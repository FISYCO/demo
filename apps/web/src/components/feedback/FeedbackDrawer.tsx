import { useState } from "react";
import { Btn, Drawer, Field, RadioGroup, Textarea } from "@demo/ui";

/** Форма обратной связи в выезжающей панели. */
export function FeedbackDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [kind, setKind] = useState("bug");
  return (
    <Drawer
      open={open}
      title="Написать нам"
      placement="end"
      size="md"
      onClose={onClose}
      footer={
        <Btn style="primary" size="md" onClick={onClose}>
          Отправить
        </Btn>
      }
    >
      <Field label="Что случилось">
        <RadioGroup
          name="feedback-kind"
          value={kind}
          onChange={setKind}
          orientation="horizontal"
          options={[
            { value: "bug", label: "Ошибка" },
            { value: "idea", label: "Идея" },
          ]}
        />
      </Field>
      <Field label="Подробности" hint="Чем точнее, тем быстрее ответим">
        <Textarea rows={6} placeholder="Опишите шаги" />
      </Field>
    </Drawer>
  );
}
