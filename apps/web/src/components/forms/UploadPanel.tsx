import { useState } from "react";
import { Alert, Btn, FileUpload, Progress, spacing } from "@demo/ui";

/** Загрузка файлов с прогрессом и ошибкой. */
export function UploadPanel({ accept }: { accept?: string }) {
  const [state, setState] = useState<"idle" | "uploading" | "error">("idle");
  const [progress, setProgress] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: spacing.md }}>
      <FileUpload
        variant="dropzone"
        state={state}
        accept={accept}
        multiple
        onFiles={(files) => {
          setState(files.length > 0 ? "uploading" : "error");
          setProgress(files.length > 0 ? 35 : 0);
        }}
      />
      {state === "uploading" ? <Progress value={progress} size="sm" tone="brand" label="Загрузка" /> : null}
      {state === "error" ? (
        <Alert status="danger" title="Файлы не выбраны">
          Перетащите хотя бы один файл или выберите его кнопкой.
        </Alert>
      ) : null}
      <div>
        <Btn style="transparent" size="sm" onClick={() => setState("idle")}>
          Сбросить
        </Btn>
      </div>
    </div>
  );
}
