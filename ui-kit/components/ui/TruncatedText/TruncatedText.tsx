"use client";

import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

import { Tooltip } from "../Tooltip";
import type { TruncatedTextProps } from "./TruncatedText.types";

/**
 * Текст, который обрезается по ширине и показывает себя целиком при наведении и фокусе.
 *
 * Подсказка появляется только когда текст действительно не поместился: на коротком имени она
 * повторяла бы видимое и превращалась в шум. Обрезание без подсказки — потеря: длинное имя токена
 * или библиотеки прочитать было негде.
 *
 * Обрезанный текст принимает фокус, иначе с клавиатуры полное значение не прочитать (#1380).
 * Поместившийся — нет: лишняя остановка табуляции на каждой строке таблицы мешает больше, чем помогает.
 */
/**
 * Один наблюдатель размеров на все строки (#1778). Свой `ResizeObserver` и синхронный замер у каждого экземпляра на
 * сетке из сотен плиток давали сотни наблюдателей и столько же принудительных пересчётов раскладки при монтировании.
 * Общий наблюдатель сообщает размеры пачкой после раскладки, а скрытые `content-visibility` строки меряются, когда
 * появятся на экране.
 */
const measures = new WeakMap<Element, () => void>();
let sharedObserver: ResizeObserver | null = null;

function observeSize(node: Element, measure: () => void) {
  if (typeof ResizeObserver === "undefined") {
    measure();
    return () => {};
  }
  sharedObserver ??= new ResizeObserver((entries) => {
    for (const entry of entries) measures.get(entry.target)?.();
  });
  measures.set(node, measure);
  sharedObserver.observe(node);
  return () => {
    sharedObserver?.unobserve(node);
    measures.delete(node);
  };
}

export function TruncatedText({ children, tooltip, ...textProps }: TruncatedTextProps) {
  const [node, setNode] = useState<HTMLParagraphElement | null>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (!node) return;
    // Полтора пикселя запаса: браузер округляет дробную ширину, и ровно поместившийся текст
    // иначе считался бы обрезанным на каждом втором экране.
    return observeSize(node, () => setIsTruncated(node.scrollWidth > node.clientWidth + 1));
    // Текст мог смениться при той же ширине: наблюдение заново даёт свежий замер.
  }, [node, children]);

  const text = (
    <Text
      ref={setNode}
      truncate
      tabIndex={isTruncated ? 0 : undefined}
      focusVisibleRing="outside"
      borderRadius="xs"
      {...textProps}
    >
      {children}
    </Text>
  );

  // Подсказка монтируется только у обрезанного текста: у поместившегося она ничего не показала бы, а машина
  // состояний на каждой строке длинного списка стоит дорого.
  return isTruncated ? <Tooltip content={tooltip ?? children}>{text}</Tooltip> : text;
}
