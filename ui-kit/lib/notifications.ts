"use client";

import type { ReactNode } from "react";

import { toaster } from "../components/ui/Toaster";

type ToastAction = {
  label: string;
  onClick: VoidFunction;
};

type NotifyOptions = {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ToastAction;
  persistent?: boolean;
  dedupeKey?: string;
};

type ToastType = "success" | "error" | "info" | "warning" | "loading" | (string & {});

const DEFAULT_DURATION_MS = 3000;
/**
 * Ошибка висит дольше успеха — её надо успеть прочитать, — но закрывается сама (#1764): «вечный» тост копился и
 * закрывал экран. Остаётся до закрытия только ошибка с действием или явно `persistent`.
 */
const ERROR_DURATION_MS = 8000;
const activeToastKeys = new Map<ToastType, Set<string>>();
/** Сколько раз просили показать ошибку: по нему запасной тост узнаёт, что ошибку уже показали на месте. */
let errorRequests = 0;

const normalizeKey = (value: ReactNode | undefined) => {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  return "[node]";
};

const getToastKey = (type: ToastType, options: NotifyOptions) =>
  options.dedupeKey ?? `${type}:${normalizeKey(options.title)}:${normalizeKey(options.description)}`;

const rememberKey = (type: ToastType, key: string) => {
  const bucket = activeToastKeys.get(type) ?? new Set<string>();
  bucket.add(key);
  activeToastKeys.set(type, bucket);
};

const forgetKey = (type: ToastType, key: string) => {
  const bucket = activeToastKeys.get(type);
  if (!bucket) return;
  bucket.delete(key);
  if (bucket.size === 0) {
    activeToastKeys.delete(type);
  }
};

const isActive = (type: ToastType, key: string) => {
  const bucket = activeToastKeys.get(type);
  if (bucket?.has(key)) return true;
  return toaster.isVisible(key);
};

const createToast = (type: ToastType, options: NotifyOptions) => {
  if (type === "error") errorRequests += 1;
  const key = getToastKey(type, options);
  if (isActive(type, key)) return;

  const persistent = options.persistent ?? (type === "error" && Boolean(options.action));
  const duration = persistent ? Number.POSITIVE_INFINITY : type === "error" ? ERROR_DURATION_MS : DEFAULT_DURATION_MS;

  rememberKey(type, key);
  // Defer to microtask so Zag's internal flushSync doesn't collide
  // with React's commit phase (e.g. when called from useEffect).
  queueMicrotask(() =>
    toaster.create({
      id: key,
      type,
      title: options.title,
      description: options.description,
      action: options.action,
      duration,
      meta: options.icon ? { icon: options.icon } : undefined,
      onStatusChange: (details) => {
        if (details.status === "unmounted") {
          forgetKey(type, key);
        }
      },
    }),
  );
};

export const notifySuccess = (options: NotifyOptions) => createToast("success", options);
export const notifyError = (options: NotifyOptions) => createToast("error", options);
export const notifyInfo = (options: NotifyOptions) => createToast("info", options);
export const notifyWarning = (options: NotifyOptions) => createToast("warning", options);
export const notifyLoading = (options: NotifyOptions) => createToast("loading", options);

/**
 * Запасной тост ошибки (#1764): показывается, только если за этот такт никто не показал свою. Глобальный обработчик
 * мутаций срабатывает раньше локального `onError`; без этой отсрочки одна ошибка давала два тоста с разными
 * заголовками.
 */
export const notifyFallbackError = (options: NotifyOptions) => {
  const seen = errorRequests;
  setTimeout(() => {
    if (errorRequests === seen) createToast("error", options);
  }, 0);
};

export type { NotifyOptions, ToastAction };
