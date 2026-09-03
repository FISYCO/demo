import { useState } from "react";
import { Alert, Card, Progress, spacing } from "@demo/ui";

import { StepWizard } from "../components/forms/StepWizard";
import { UploadPanel } from "../components/forms/UploadPanel";
import { ToastHost, type ToastMessage } from "../components/feedback/ToastHost";

/** Первый запуск: мастер, импорт и подсказки. */
export function Onboarding() {
  const [done, setDone] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  return (
    <div style={{ maxWidth: 760, margin: "48px auto", display: "flex", flexDirection: "column", gap: spacing.xl }}>
      <Progress value={done ? 100 : 33} size="sm" tone={done ? "success" : "brand"} label="Настройка" />
      <Card title="Добро пожаловать">
        {done ? (
          <Alert status="success" title="Рабочее пространство готово">
            Первая синхронизация запустится через минуту.
          </Alert>
        ) : (
          <StepWizard
            onDone={() => {
              setDone(true);
              setToasts([{ id: "t1", status: "success", title: "Готово", description: "Команда приглашена" }]);
            }}
          />
        )}
      </Card>
      <Card title="Импорт токенов" tone="muted">
        <UploadPanel accept=".json" />
      </Card>
      <ToastHost messages={toasts} onDismiss={(id) => setToasts((known) => known.filter((entry) => entry.id !== id))} />
    </div>
  );
}
