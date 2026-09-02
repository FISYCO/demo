import { color, fontSize, radius } from "./tokens";

/** Аватар пользователя: картинка или инициалы, когда картинки нет. */

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps {
  name: string;
  src?: string;
  size?: AvatarSize;
}

const SIDE: Record<AvatarSize, number> = { sm: 24, md: 32, lg: 40 };

export function Avatar({ name, src, size = "md" }: AvatarProps) {
  const side = SIDE[size];
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  if (src) {
    return <img src={src} alt={name} width={side} height={side} style={{ borderRadius: radius.full }} />;
  }

  return (
    <span
      style={{
        width: side,
        height: side,
        borderRadius: radius.full,
        background: color.brandSubtle,
        color: color.brandSolid,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size === "sm" ? fontSize.xs : fontSize.sm,
        fontWeight: 600,
      }}
    >
      {initials}
    </span>
  );
}
