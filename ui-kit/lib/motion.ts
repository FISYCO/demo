/**
 * Движение интерфейса (#1761): пружины вместо кривых Безье.
 *
 * Так устроено движение в iOS: оно быстро стартует и мягко садится на место, а длительность — следствие физики, а
 * не число, подобранное на глаз. Браузер пружин не знает, поэтому кривая пружины снимается в `linear()` по точкам —
 * её понимают все поддерживаемые браузеры, и анимация остаётся обычной CSS-анимацией.
 */

export interface SpringEasing {
  /** Кривая для `transition-timing-function` / `animation-timing-function`. */
  easing: string;
  /** Сколько пружине нужно, чтобы сесть на место: длительность анимации. */
  ms: number;
}

/**
 * Пружина по затуханию и отклику, как в SwiftUI: `ratio` 1 — без перелёта, меньше 1 — с отскоком; `response` —
 * период колебания в секундах, чем меньше, тем быстрее.
 */
export function springEasing(ratio: number, response: number): SpringEasing {
  const omega = (2 * Math.PI) / response;
  const position = (t: number) => {
    if (ratio >= 1) return 1 - Math.exp(-omega * t) * (1 + omega * t);
    const damped = omega * Math.sqrt(1 - ratio * ratio);
    return (
      1 - Math.exp(-ratio * omega * t) * (Math.cos(damped * t) + ((ratio * omega) / damped) * Math.sin(damped * t))
    );
  };
  // Пружина «села», когда до цели меньше 0.2% и она уже не возвращается дальше 0.4%.
  let duration = 0.05;
  while (duration < 3 && (Math.abs(1 - position(duration)) > 0.002 || Math.abs(1 - position(duration * 0.9)) > 0.004)) {
    duration += 0.01;
  }
  const points: string[] = [];
  const samples = 48;
  for (let i = 0; i <= samples; i++) points.push(position((duration * i) / samples).toFixed(4));
  points[0] = "0";
  points[samples] = "1";
  return { easing: `linear(${points.join(", ")})`, ms: Math.round(duration * 1000) };
}

/** Основная пружина: переходы, раскрытия, перемещения. Без перелёта. */
export const SPRING = springEasing(1, 0.42);

/** Пружина отклика на нажатие: элемент проседает и упруго возвращается. */
export const SPRING_PRESS = springEasing(0.55, 0.34);

/**
 * Длительности, которые не задаёт пружина: уход быстрее появления — старое не спорит за внимание с новым.
 */
export const MOTION = {
  exit: 120,
  enter: 220,
  /** Шаг каскада: элементы списка проявляются по очереди. */
  stagger: 28,
  /** Подсветка изменившегося значения. */
  flash: 1400,
} as const;
