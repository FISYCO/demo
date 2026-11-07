import { Avatar as BaseAvatar } from "@chakra-ui/react";

import type { AvatarProps } from "./Avatar.types";

const colorPalettes = ["blue", "cyan", "green", "orange", "pink", "purple", "red", "teal", "yellow"] as const;

const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
};

const getRandomPalette = (seed?: string | null) => {
  if (!seed) return "gray";
  const index = hashString(seed) % colorPalettes.length;
  return colorPalettes[index];
};

export function Avatar({ name, src, fallback, randomColor, "data-testid": testId = "Avatar", ...props }: AvatarProps) {
  const useRandom = randomColor !== false;
  const hasImage = Boolean(src);
  const palette = useRandom && !props.colorPalette && !hasImage ? getRandomPalette(name ?? src ?? null) : undefined;
  const colorPalette = hasImage ? undefined : (props.colorPalette ?? palette);
  return (
    <BaseAvatar.Root
      {...props}
      colorPalette={colorPalette}
      bg={hasImage ? "transparent" : undefined}
      // Subtle top-down white sheen over the auto-picked color for a bit of depth
      // (Telegram-style). Photo avatars are left untouched. `white/NN` is a design
      // token alpha (like `bg/70`), not a hardcoded color. Chakra v3 gradient props:
      // direction via bgGradient + gradientFrom/gradientTo (the v2 `linear(...)` string
      // is not expanded in v3 and leaks invalid CSS).
      bgGradient={hasImage ? undefined : "to-b"}
      gradientFrom={hasImage ? undefined : "white/25"}
      gradientTo={hasImage ? undefined : "white/0"}
      data-testid={testId}
    >
      {src ? <BaseAvatar.Image src={src} alt={name} data-testid="Avatar__Image" /> : null}
      <BaseAvatar.Fallback name={name} data-testid="Avatar__Fallback">
        {fallback}
      </BaseAvatar.Fallback>
    </BaseAvatar.Root>
  );
}
