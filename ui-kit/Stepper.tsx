import { color, fontSize, radius, spacing } from "./tokens";

/** Шаги мастера. */

export type StepperOrientation = "horizontal" | "vertical";
export type StepperSize = "sm" | "md";

export interface Step {
  id: string;
  title: string;
  description?: string;
}

export interface StepperProps {
  steps: Step[];
  /** Индекс активного шага. */
  active: number;
  orientation?: StepperOrientation;
  size?: StepperSize;
}

export function Stepper({ steps, active, orientation = "horizontal", size = "md" }: StepperProps) {
  const dot = size === "sm" ? 20 : 28;
  return (
    <ol
      style={{
        display: "flex",
        flexDirection: orientation === "horizontal" ? "row" : "column",
        gap: orientation === "horizontal" ? spacing.xl : spacing.md,
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {steps.map((step, index) => {
        const done = index < active;
        const current = index === active;
        return (
          <li key={step.id} style={{ display: "flex", alignItems: "flex-start", gap: spacing.sm }}>
            <span
              aria-current={current ? "step" : undefined}
              style={{
                width: dot,
                height: dot,
                borderRadius: radius.full,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: fontSize.xs,
                fontWeight: 600,
                background: done || current ? color.brandSolid : color.surface,
                color: done || current ? color.surface : color.textMuted,
                border: `1px solid ${done || current ? color.brandSolid : color.border}`,
              }}
            >
              {done ? "✓" : index + 1}
            </span>
            <span>
              <div style={{ fontSize: size === "sm" ? fontSize.sm : fontSize.md, fontWeight: current ? 600 : 400, color: color.text }}>{step.title}</div>
              {step.description ? <div style={{ fontSize: fontSize.xs, color: color.textMuted }}>{step.description}</div> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
