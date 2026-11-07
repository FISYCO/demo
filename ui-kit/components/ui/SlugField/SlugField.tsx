"use client";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { HStack, Input } from "@chakra-ui/react";

import type { UIBaseProps } from "../../../lib/component-types";
import { Button } from "../Button";
import { Field } from "../Field";

export interface SlugFieldProps extends UIBaseProps {
  /** Значение слага: компонент управляемый, значение держит форма. */
  value: string;
  onValueChange: (value: string) => void;
  /** Название, из которого собирается слаг, пока его не правили руками. */
  source: string;
  /**
   * Правило слага приходит из приложения (`slugifyBlog` у блога): у каждой сущности своя длина,
   * своя транслитерация и свой набор допустимых символов, и вторая копия этого правила в библиотеке
   * разошлась бы с проверкой на сервере.
   */
  slugify: (text: string) => string;
  label: ReactNode;
  /** Подпись кнопки, открывающей ручную правку. */
  editLabel: string;
  /** Ошибка уникальности приходит с сервера и живёт под полем. */
  error?: ReactNode;
  helperText?: ReactNode;
  disabled?: boolean;
}

/**
 * Слаг записи (#1516): собирается из названия, правится по явному действию.
 *
 * Состояний два, и они независимы.
 *
 * - **Следует за названием** — только пока слаг пуст, то есть у новой записи. У сохранённой правка
 *   названия слаг не трогает: адрес уже разошёлся по ссылкам, и менять его молча значит их потерять.
 * - **Открыто на правку** — после нажатия «Изменить». До этого поле только для чтения: слаг — часть
 *   адреса, и случайная опечатка в нём стоит дороже, чем в названии.
 *
 * «Изменить» выключает слежение за названием навсегда: человек сказал, каким слагу быть.
 */
export function SlugField({
  value,
  onValueChange,
  source,
  slugify,
  label,
  editLabel,
  error,
  helperText,
  disabled,
  "data-testid": testId = "SlugField",
}: SlugFieldProps) {
  // Пустой слаг бывает только у новой записи — у неё и следим за названием.
  const [follows, setFollows] = useState(() => value.length === 0);
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!follows) return;
    const next = slugify(source);
    if (next !== value) onValueChange(next);
  }, [follows, slugify, source, value, onValueChange]);

  return (
    <Field.Root invalid={Boolean(error)} disabled={disabled} data-testid={testId}>
      <Field.Label>{label}</Field.Label>
      <HStack gap="2" width="full">
        <Input
          ref={inputRef}
          value={value}
          readOnly={!editing}
          onChange={(event) => onValueChange(event.target.value)}
          data-testid="SlugField__Input"
        />
        {editing ? null : (
          <Button
            size="sm"
            variant="outline"
            disabled={disabled}
            onClick={() => {
              setEditing(true);
              setFollows(false);
              // Фокус переходит в поле сразу: нажали «Изменить» — значит, собираются печатать.
              requestAnimationFrame(() => inputRef.current?.focus());
            }}
            data-testid="SlugField__Edit"
          >
            {editLabel}
          </Button>
        )}
      </HStack>
      {error ? (
        <Field.ErrorText>{error}</Field.ErrorText>
      ) : helperText ? (
        <Field.HelperText>{helperText}</Field.HelperText>
      ) : null}
    </Field.Root>
  );
}
