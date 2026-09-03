import { Btn, Dialog, spacing } from "@demo/ui";

/** Подтверждение необратимого действия. */
export function ConfirmDialog({ open, title, onConfirm, onClose }: { open: boolean; title: string; onConfirm: () => void; onClose: () => void }) {
  return (
    <Dialog open={open} title={title} onClose={onClose}>
      <p>Это действие нельзя отменить.</p>
      <div style={{ display: "flex", gap: spacing.sm, justifyContent: "flex-end" }}>
        <Btn style="secondary" size="md" onClick={onClose}>
          Отмена
        </Btn>
        <Btn style="primary" size="md" onClick={onConfirm}>
          Удалить
        </Btn>
      </div>
    </Dialog>
  );
}
