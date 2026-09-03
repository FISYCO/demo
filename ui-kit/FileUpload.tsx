import { color, fontSize, radius, spacing } from "./tokens";

/** Загрузка файлов: зона перетаскивания или кнопка. */

export type FileUploadVariant = "dropzone" | "button";
export type FileUploadState = "idle" | "uploading" | "error";

export interface FileUploadProps {
  variant?: FileUploadVariant;
  state?: FileUploadState;
  accept?: string;
  multiple?: boolean;
  label?: string;
  onFiles?: (files: File[]) => void;
}

export function FileUpload({ variant = "dropzone", state = "idle", accept, multiple, label = "Перетащите файлы", onFiles }: FileUploadProps) {
  const input = (
    <input
      type="file"
      accept={accept}
      multiple={multiple}
      onChange={(event) => onFiles?.(Array.from(event.target.files ?? []))}
      style={{ display: variant === "button" ? "block" : "none" }}
    />
  );

  if (variant === "button") return input;

  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: spacing.sm,
        padding: spacing.xl,
        border: `1px dashed ${state === "error" ? color.danger : color.border}`,
        borderRadius: radius.lg,
        background: state === "uploading" ? color.surfaceMuted : color.surface,
        color: state === "error" ? color.danger : color.textMuted,
        fontSize: fontSize.sm,
        cursor: state === "uploading" ? "progress" : "pointer",
      }}
    >
      {state === "uploading" ? "Загружаем…" : label}
      {input}
    </label>
  );
}
