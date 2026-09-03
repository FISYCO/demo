import { useState } from "react";
import { Btn, Field, Input, RadioGroup, Select, Stepper, Switch, spacing } from "@demo/ui";

const STEPS = [
  { id: "workspace", title: "Рабочее пространство", description: "Название и регион" },
  { id: "team", title: "Команда", description: "Кого пригласить" },
  { id: "plan", title: "Тариф", description: "Что подключить" },
];

/** Мастер первого запуска в три шага. */
export function StepWizard({ onDone }: { onDone?: () => void }) {
  const [active, setActive] = useState(0);
  const [plan, setPlan] = useState("team");
  const [weekly, setWeekly] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: spacing.xl }}>
      <Stepper steps={STEPS} active={active} orientation="horizontal" size="md" />

      {active === 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: spacing.md, maxWidth: 480 }}>
          <Field label="Название" required hint="Видно всем участникам">
            <Input placeholder="Acme Cloud" size="md" />
          </Field>
          <Field label="Регион" layout="horizontal">
            <Select
              options={[
                { label: "Европа", value: "eu" },
                { label: "Азия", value: "asia" },
              ]}
              value="eu"
              size="md"
            />
          </Field>
        </div>
      ) : null}

      {active === 1 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: spacing.md, maxWidth: 480 }}>
          <Field label="Почта коллеги" error="Такой адрес уже приглашён">
            <Input placeholder="name@company.com" size="md" invalid />
          </Field>
          <Field label="Сводка по понедельникам" layout="horizontal">
            <Switch checked={weekly} size="sm" onChange={setWeekly} />
          </Field>
        </div>
      ) : null}

      {active === 2 ? (
        <RadioGroup
          name="plan"
          value={plan}
          onChange={setPlan}
          orientation="vertical"
          size="md"
          options={[
            { value: "solo", label: "Соло", description: "Один участник, одна библиотека" },
            { value: "team", label: "Команда", description: "До десяти участников" },
            { value: "company", label: "Компания", description: "Без ограничений", disabled: true },
          ]}
        />
      ) : null}

      <div style={{ display: "flex", gap: spacing.sm }}>
        <Btn style="secondary" size="md" disabled={active === 0} onClick={() => setActive((step) => step - 1)}>
          Назад
        </Btn>
        {active < STEPS.length - 1 ? (
          <Btn style="primary" size="md" onClick={() => setActive((step) => step + 1)}>
            Дальше
          </Btn>
        ) : (
          <Btn style="primary" size="lg" onClick={onDone}>
            Готово
          </Btn>
        )}
      </div>
    </div>
  );
}
