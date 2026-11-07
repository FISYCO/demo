"use client";

import type { FunctionComponent, ReactNode, SVGProps } from "react";
import { Toaster as BaseToaster, createToaster, Icon, Stack, Toast } from "@chakra-ui/react";
import { CheckCircle } from "../../../../src/icons/check-circle";
import { InfoCircle } from "../../../../src/icons/info-circle";
import { TimesCircle } from "../../../../src/icons/times-circle";
import { TriangleExclamation } from "../../../../src/icons/triangle-exclamation";

const baseToaster = createToaster({
  placement: "top-end",
});

type ToastCreateOptions = Parameters<typeof baseToaster.create>[0];

const isAutoCloseType = (type?: ToastCreateOptions["type"]) =>
  type === "success" || type === "warning" || type === "info";

const normalizeToastOptions = (options: ToastCreateOptions) => {
  const type = options?.type;

  if (type === "error") {
    return {
      ...options,
      duration: Number.POSITIVE_INFINITY,
      closable: true,
    };
  }

  if (isAutoCloseType(type)) {
    const isPersistent = options?.duration === Number.POSITIVE_INFINITY;
    return {
      ...options,
      duration: isPersistent ? Number.POSITIVE_INFINITY : options?.duration,
      closable: isPersistent,
    };
  }

  return options;
};

export const toaster = {
  ...baseToaster,
  create: (options: ToastCreateOptions) => baseToaster.create(normalizeToastOptions(options)),
};

// Status is conveyed by a single colored leading icon over a neutral surface (#339). Colors come
// from the `status.*` semantic tokens; the toast surface itself stays neutral (see Toaster.recipe).
// Иконки набора — обычные компоненты над <svg>, поэтому и тип обычный: свойства svg.
const STATUS_ICON: Record<string, { icon: FunctionComponent<SVGProps<SVGSVGElement>>; color: string }> = {
  success: { icon: CheckCircle, color: "status.success" },
  error: { icon: TimesCircle, color: "status.error" },
  warning: { icon: TriangleExclamation, color: "status.warning" },
  info: { icon: InfoCircle, color: "status.info" },
};

function ToastLead({ type, custom }: { type?: string; custom?: ReactNode }) {
  if (custom) {
    return custom;
  }
  // `loading` keeps Chakra's spinner indicator.
  if (type === "loading") {
    return <Toast.Indicator />;
  }
  const config = (type && STATUS_ICON[type]) || STATUS_ICON.info;
  return <Icon as={config.icon} color={config.color} boxSize="5" flexShrink="0" mt="0.5" />;
}

export function Toaster() {
  return (
    <BaseToaster toaster={toaster} w="360px">
      {(toast) => (
        <Toast.Root>
          <ToastLead type={toast.type} custom={toast.meta?.icon} />
          <Stack gap="1" flex="1" minW="0">
            {toast.title ? <Toast.Title>{toast.title}</Toast.Title> : null}
            {toast.description ? <Toast.Description>{toast.description}</Toast.Description> : null}
          </Stack>
          {toast.action ? (
            <Toast.ActionTrigger onClick={toast.action.onClick}>{toast.action.label}</Toast.ActionTrigger>
          ) : null}

          {toast.closable ? <Toast.CloseTrigger /> : null}
        </Toast.Root>
      )}
    </BaseToaster>
  );
}
