/**
 * Имя для `view-transition-name` из `useId` и ключа (#1761). `useId` даёт `:r1:`, а имя перехода — CSS-идентификатор:
 * двоеточия и прочее, кроме букв, цифр, `-` и `_`, в нём недопустимы.
 */
export function transitionName(...parts: Array<string | number>): string {
  return `fis-${parts.map((part) => String(part).replace(/[^a-zA-Z0-9_-]/g, "")).join("-")}`;
}
