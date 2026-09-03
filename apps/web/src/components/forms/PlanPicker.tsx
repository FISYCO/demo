import { Btn, Card, Chip, Divider, RadioGroup, Slider, color, fontSize, spacing } from "@demo/ui";

import { formatMoney } from "../../lib/format";

const PLANS = [
  { id: "solo", name: "Соло", price: 0, seats: 1 },
  { id: "team", name: "Команда", price: 4900, seats: 10 },
  { id: "company", name: "Компания", price: 19900, seats: 100 },
];

/** Выбор тарифа с ползунком числа мест. */
export function PlanPicker({ current, seats, onSeats }: { current: string; seats: number; onSeats: (value: number) => void }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: spacing.lg }}>
      {PLANS.map((plan) => (
        <Card key={plan.id} tone={plan.id === current ? "default" : "muted"} title={plan.name}>
          <div style={{ fontSize: 24, fontWeight: 700, color: color.text }}>{formatMoney(plan.price)}</div>
          <div style={{ fontSize: fontSize.sm, color: color.textMuted }}>в месяц</div>
          {plan.id === current ? (
            <Chip tone="success" size="sm">
              Текущий
            </Chip>
          ) : null}
          <Divider />
          <Slider value={Math.min(seats, plan.seats)} max={plan.seats} size="sm" tone="brand" showValue onChange={onSeats} />
          <Btn style={plan.id === current ? "secondary" : "primary"} size="sm" disabled={plan.id === current}>
            {plan.id === current ? "Подключён" : "Перейти"}
          </Btn>
        </Card>
      ))}
      <RadioGroup
        name="billing-period"
        value="year"
        orientation="horizontal"
        size="sm"
        options={[
          { value: "month", label: "Помесячно" },
          { value: "year", label: "За год, минус 20%" },
        ]}
      />
    </div>
  );
}
