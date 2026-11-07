import { Alert as BaseAlert } from "@chakra-ui/react";

import type { AlertRootProps } from "../Alert.types";

// Роль зависит от статуса, и это не мелочь.
//
// Chakra не ставит на сообщение ни роли, ни `aria-live`: свойство `status` меняет только цвет и
// иконку. То есть для читалки сообщение об ошибке было неотличимо от обычного абзаца, и
// пользователь мог просто не узнать, что сверка упала (#1201).
//
// `alert` объявляется настойчиво и перебивает чтение — это верно для ошибки и предупреждения, но
// не для успеха: прерывать человека ради хорошей новости не за что. Остальным достаётся `status`,
// он ждёт паузы.
//
// Переопределить можно: `Alert` иногда стоит на странице как статичный блок, и объявлять его не
// надо вовсе.
const ROLE_BY_STATUS = {
  error: "alert",
  warning: "alert",
  info: "status",
  success: "status",
  neutral: "status",
} as const;

export function Root({ "data-testid": testId = "Alert", status = "info", role, ...props }: AlertRootProps) {
  // `status` у Chakra условный: строка либо набор значений по контрольным точкам. Роль выводится
  // только из строки — сообщение, меняющее статус от ширины экрана, существует лишь в теории, а
  // угадывать за него роль было бы хуже, чем не ставить её вовсе.
  const resolvedRole = role ?? (typeof status === "string" ? ROLE_BY_STATUS[status] : undefined);

  return <BaseAlert.Root data-testid={testId} status={status} role={resolvedRole} {...props} />;
}
