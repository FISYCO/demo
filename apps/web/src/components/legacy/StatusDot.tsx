/** Цветная точка статуса: hsl-цвета вместо токенов, и три копии этого файла по продукту. */
export function StatusDot({ status }: { status: "online" | "away" | "offline" }) {
  const fill = status === "online" ? "hsl(152, 60%, 40%)" : status === "away" ? "hsl(40, 90%, 50%)" : "hsl(220, 10%, 60%)";
  const ring = status === "offline" ? "gray.300" : "white";
  return <span aria-label={status} title={status} style={{ display: "inline-block", width: 8, height: 8, borderRadius: 4, background: fill, boxShadow: `0 0 0 2px ${ring}`, outlineColor: "gray.200" }} />;
}
