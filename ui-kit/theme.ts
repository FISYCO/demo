import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { alertRecipe } from "./components/ui/Alert/Alert.recipe";
import { badgeRecipe } from "./components/ui/Badge/Badge.recipe";
import { buttonRecipe } from "./components/ui/Button/Button.recipe";
import { cardRecipe } from "./components/ui/Card/Card.recipe";
import { carouselRecipe } from "./components/ui/Carousel/Carousel.recipe";
import { collapsibleRecipe } from "./components/ui/Collapsible/Collapsible.recipe";
import { dialogRecipe } from "./components/ui/Dialog/Dialog.recipe";
import { drawerRecipe } from "./components/ui/Drawer/Drawer.recipe";
import { listboxRecipe } from "./components/ui/Listbox/Listbox.recipe";
import { menuRecipe } from "./components/ui/Menu/Menu.recipe";
import { segmentGroupRecipe } from "./components/ui/SegmentGroup/SegmentGroup.recipe";
import { selectRecipe } from "./components/ui/Select/Select.recipe";
import { tableRecipe } from "./components/ui/Table/Table.recipe";
import { tabsRecipe } from "./components/ui/Tabs/Tabs.recipe";
import { toastRecipe } from "./components/ui/Toaster/Toaster.recipe";
import { iconRecipe } from "./lib/icon.recipe";
import { MOTION, SPRING, SPRING_PRESS } from "./lib/motion";

/**
 * Base neutral palette for all semantic tokens.
 * Change to "slate" or "mauve" to switch the entire UI tone in one line.
 */
const neutral = "slate";

/** Переходы между состояниями (#1761): классы, которые ставят примитивы движения и навигация. */
const viewTransitionCss = {
  // Пока идёт переход, клики проходят к живой странице: иначе нажатие во время анимации терялось бы.
  "::view-transition": { pointerEvents: "none" },
  // Страница целиком не крестит: двигается только то, что помечено. Иначе каждое обновление мигало бы всем экраном.
  "::view-transition-old(root), ::view-transition-new(root)": { animation: "none" },
  "::view-transition-group(*)": {
    animationDuration: `${SPRING.ms}ms`,
    animationTimingFunction: SPRING.easing,
  },
  // Скелетон уступает место контенту, вкладка — вкладке: уход быстрый, появление мягче и с небольшим подъёмом. Новое
  // начинается, когда старое уже ушло: при наложении две разные раскладки полсекунды лежали друг на друге — старая
  // страница поверх каркаса новой, потом каркас поверх содержимого, и это читалось как «перебивающиеся» скелетоны.
  // Снимки прижаты к верхнему левому углу и не растягиваются, пока контейнер меняет высоту на пружине: каркас и
  // страница разной высоты иначе на миг сплющивались.
  "::view-transition-old(.fis-conceal), ::view-transition-new(.fis-reveal)": {
    height: "100%",
    objectFit: "none",
    objectPosition: "left top",
  },
  "::view-transition-old(.fis-conceal)": { animation: `${MOTION.exit}ms ease-in both fis-fade-out` },
  "::view-transition-new(.fis-reveal)": { animation: `${MOTION.enter}ms ease-out ${MOTION.exit}ms both fis-reveal` },
  // Пара «плашка ↔ блок»: контейнер меняет форму на пружине, снимки прижаты к верхнему левому углу и не
  // растягиваются; плашка гаснет быстро, чтобы серая полоса не висела поверх проявившегося блока.
  "::view-transition-old(.fis-morph), ::view-transition-new(.fis-morph)": {
    height: "100%",
    objectFit: "none",
    objectPosition: "left top",
  },
  "::view-transition-old(.fis-morph)": { animation: `${MOTION.exit}ms ease-in both fis-fade-out` },
  "::view-transition-new(.fis-morph)": { animation: `${MOTION.enter}ms ease-out both fis-fade-in` },
  // Элемент списка: новый вырастает на своём месте, удалённый сжимается и гаснет, остальные едут на пружине.
  "::view-transition-old(.fis-shrink)": { animation: "140ms ease-in both fis-shrink-out" },
  "::view-transition-new(.fis-grow)": {
    animation: `${SPRING.ms}ms ${SPRING.easing} 80ms both fis-grow-in`,
  },
  // Раскрытие в мастер создания (#1811): из кнопки вырастает лист — плашка цвета панели со скруглением, а не
  // прозрачная рамка, сквозь которую сразу видно весь мастер (это читалось диагональной шторкой). Кнопка гаснет сразу,
  // содержимое мастера проявляется, когда лист почти дорос; к концу плашка растворяется в фоне страницы.
  // Лист стартует цветом и скруглением самой кнопки (`--fis-expand-from`, `--fis-expand-radius` ставит `ExpandOrigin`
  // при нажатии) и по ходу роста становится панелью (#1816): кнопка сама разрастается в мастер.
  "::view-transition-image-pair(.fis-expand)": {
    animation: `${SPRING.ms}ms ${SPRING.easing} both fis-sheet`,
  },
  "::view-transition-old(.fis-expand), ::view-transition-new(.fis-expand)": {
    height: "100%",
    objectFit: "none",
    objectPosition: "left top",
  },
  // Снимок кнопки гаснет за пару кадров и не едет вместе с листом: иначе было видно, как кнопка летит в другой угол.
  "::view-transition-old(.fis-expand)": { animation: "60ms linear both fis-fade-out" },
  "::view-transition-new(.fis-expand)": {
    animation: `${MOTION.enter}ms ease-out ${Math.round(SPRING.ms * 0.55)}ms both fis-fade-in`,
  },
  "::view-transition-old(.fis-nav-expand)": { animation: `${SPRING.ms}ms ${SPRING.easing} both fis-sink` },
  "::view-transition-new(.fis-nav-expand)": { animation: `${MOTION.enter}ms ease-out 160ms both fis-fade-in` },
  // Навигация (#1765): вглубь — старое уходит влево, новое приходит справа; назад — зеркально. Сдвиг небольшой:
  // направление читается, а глазу не нужно гнаться за содержимым через весь экран. Смена вкладки внутри раздела —
  // `fis-conceal` / `fis-reveal` на содержимом, без сдвига.
  "::view-transition-old(.fis-nav-forward)": {
    animation: `${MOTION.exit}ms ease-in both fis-fade-out, ${SPRING.ms}ms ${SPRING.easing} both fis-to-left`,
  },
  "::view-transition-new(.fis-nav-forward)": {
    animation: `${MOTION.enter}ms ease-out 60ms both fis-fade-in, ${SPRING.ms}ms ${SPRING.easing} both fis-from-right`,
  },
  "::view-transition-old(.fis-nav-back)": {
    animation: `${MOTION.exit}ms ease-in both fis-fade-out, ${SPRING.ms}ms ${SPRING.easing} both fis-to-right`,
  },
  "::view-transition-new(.fis-nav-back)": {
    animation: `${MOTION.enter}ms ease-out 60ms both fis-fade-in, ${SPRING.ms}ms ${SPRING.easing} both fis-from-left`,
  },
  // Значение, которое изменилось само (пришло событием или фоновым обновлением), на миг подсвечивается — см.
  // `useChangeFlash`. Цвет берётся из темы, поэтому подсветка одинаково спокойная в обеих темах.
  "[data-changed]": { animation: `fis-flash ${MOTION.flash}ms ease-out` },
};

/**
 * Уменьшение движения (#1761): остаются только короткие затухания, всё перемещение уходит. Спиннер продолжает
 * вращаться, полоса фонового обновления (`data-motion-keep`) — бежать: без движения оба выглядят зависшими.
 */
const reducedMotionCss = {
  "@media (prefers-reduced-motion: reduce)": {
    "*:not(.chakra-spinner, [data-motion-keep] *), *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important",
    },
    "::view-transition-group(*)": { animationDuration: "0s !important" },
    "::view-transition-old(*)": { animation: `${MOTION.exit}ms ease-out both fis-fade-out !important` },
    "::view-transition-new(*)": { animation: `${MOTION.exit}ms ease-out both fis-fade-in !important` },
  },
};

export const themeConfig = defineConfig({
  globalCss: { ...viewTransitionCss, ...reducedMotionCss },
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: "oklch(98.5% 0 0)" },
          100: { value: "oklch(97% 0 0)" },
          150: { value: "oklch(94.6% 0 0)" },
          200: { value: "oklch(92.2% 0 0)" },
          250: { value: "oklch(89.6% 0 0)" },
          300: { value: "oklch(87% 0 0)" },
          350: { value: "oklch(78.9% 0 0)" },
          400: { value: "oklch(70.8% 0 0)" },
          450: { value: "oklch(63.2% 0 0)" },
          500: { value: "oklch(55.6% 0 0)" },
          550: { value: "oklch(49.8% 0 0)" },
          600: { value: "oklch(43.9% 0 0)" },
          650: { value: "oklch(40.5% 0 0)" },
          700: { value: "oklch(37.1% 0 0)" },
          750: { value: "oklch(32% 0 0)" },
          800: { value: "oklch(26.9% 0 0)" },
          850: { value: "oklch(23.9% 0 0)" },
          900: { value: "oklch(21% 0 0)" },
          950: { value: "oklch(18% 0 0)" },
        },
        // Cool blue-tinted neutral (H~257, C 0.003–0.014)
        // Same lightness as gray, just a hint of blue
        slate: {
          50: { value: "oklch(98.5% 0.003 255)" },
          100: { value: "oklch(97% 0.004 255)" },
          150: { value: "oklch(94.6% 0.005 255)" },
          200: { value: "oklch(92.2% 0.006 255)" },
          250: { value: "oklch(89.6% 0.007 255)" },
          300: { value: "oklch(87% 0.008 255)" },
          350: { value: "oklch(78.9% 0.009 256)" },
          400: { value: "oklch(70.8% 0.010 256)" },
          450: { value: "oklch(63.2% 0.011 256)" },
          500: { value: "oklch(55.6% 0.012 257)" },
          550: { value: "oklch(49.8% 0.013 257)" },
          600: { value: "oklch(43.9% 0.013 257)" },
          650: { value: "oklch(40.5% 0.013 257)" },
          700: { value: "oklch(37.1% 0.014 257)" },
          750: { value: "oklch(32% 0.014 257)" },
          800: { value: "oklch(26.9% 0.014 258)" },
          850: { value: "oklch(23.9% 0.014 259)" },
          900: { value: "oklch(21% 0.014 260)" },
          950: { value: "oklch(18% 0.013 262)" },
        },
        // Warm purple-tinted neutral (H~323, C 0.002–0.012)
        // Same lightness as gray, just a hint of purple
        mauve: {
          50: { value: "oklch(98.5% 0.002 325)" },
          100: { value: "oklch(97% 0.003 325)" },
          150: { value: "oklch(94.6% 0.004 325)" },
          200: { value: "oklch(92.2% 0.005 325)" },
          250: { value: "oklch(89.6% 0.006 325)" },
          300: { value: "oklch(87% 0.007 325)" },
          350: { value: "oklch(78.9% 0.008 324)" },
          400: { value: "oklch(70.8% 0.009 323)" },
          450: { value: "oklch(63.2% 0.010 323)" },
          500: { value: "oklch(55.6% 0.011 323)" },
          550: { value: "oklch(49.8% 0.011 323)" },
          600: { value: "oklch(43.9% 0.012 322)" },
          650: { value: "oklch(40.5% 0.012 322)" },
          700: { value: "oklch(37.1% 0.012 323)" },
          750: { value: "oklch(32% 0.012 322)" },
          800: { value: "oklch(26.9% 0.011 321)" },
          850: { value: "oklch(23.9% 0.011 321)" },
          900: { value: "oklch(21% 0.010 322)" },
          950: { value: "oklch(18% 0.008 324)" },
        },
        // Акцентные шкалы. `brand` основной темы — контраст, а не цвет (см. ниже), и приложению,
        // которому нужен цветной акцент, нужна шкала, а не одно значение: у акцента те же роли, что
        // у brand, — заливка, текст, мягкая подложка, граница, кольцо фокуса.
        //
        // Светлота повторяет нейтральную лестницу, насыщенность прижата к границе sRGB на каждой
        // ступени: иначе тёмные ступени уходят из охвата и браузер приводит их куда попало.
        //
        // Тёплый акцент назван `ember`, а не `orange`: `orange` — статусная шкала Chakra, и занять
        // её именем акцента значит поменять смысл предупреждений. Тон уведён в красную сторону
        // (H≈45) от янтарного предупреждения (H=70), чтобы акцент и «внимание» не путались.
        ember: {
          100: { value: "oklch(97% 0.026 52)" },
          200: { value: "oklch(92.2% 0.064 52)" },
          300: { value: "oklch(87% 0.105 52)" },
          400: { value: "oklch(72% 0.155 52)" },
          500: { value: "oklch(58% 0.158 50)" },
          600: { value: "oklch(47% 0.148 48)" },
          700: { value: "oklch(38% 0.118 46)" },
          800: { value: "oklch(27.5% 0.086 46)" },
          900: { value: "oklch(21% 0.068 46)" },
        },
        violet: {
          100: { value: "oklch(97% 0.016 300)" },
          200: { value: "oklch(92.2% 0.042 300)" },
          300: { value: "oklch(87% 0.072 300)" },
          400: { value: "oklch(70.8% 0.150 300)" },
          500: { value: "oklch(55.6% 0.175 300)" },
          600: { value: "oklch(43.9% 0.165 300)" },
          700: { value: "oklch(37.1% 0.150 300)" },
          800: { value: "oklch(26.9% 0.112 300)" },
          900: { value: "oklch(21% 0.092 300)" },
        },
        // Шкалы акцентов (#1771): одна лестница светлоты на все цвета — та же, что у нейтральной, плюс ступень 450
        // для заливок тёмной темы, — и насыщенность, прижатая к 0.14 и к границе sRGB. Раньше палитры Chakra
        // расходились: в тёмной оранжевый (L 0.70) и жёлтый (L 0.91) светились, а красный, зелёный и синий (L 0.44)
        // тонули в фоне при 2.2–2.5, фиолетовый бейдж AI был самым громким пятном (C 0.25), а белый текст на
        // бирюзовом и голубом не дотягивал до AA. Шкалы сгенерированы одним правилом и разбираются
        // `scripts/check-theme-contrast.mjs`: контраст и ровность акцентов проверяются, а не держатся на памяти.
        red: {
          50: { value: "oklch(98.5% 0.007 25)" },
          100: { value: "oklch(97% 0.014 25)" },
          200: { value: "oklch(92.2% 0.038 25)" },
          300: { value: "oklch(87% 0.067 25)" },
          400: { value: "oklch(70.8% 0.130 25)" },
          450: { value: "oklch(63.2% 0.140 25)" },
          500: { value: "oklch(55.6% 0.140 25)" },
          600: { value: "oklch(43.9% 0.130 25)" },
          700: { value: "oklch(37.1% 0.110 25)" },
          800: { value: "oklch(26.9% 0.080 25)" },
          900: { value: "oklch(21% 0.065 25)" },
          950: { value: "oklch(18% 0.050 25)" },
        },
        orange: {
          50: { value: "oklch(98.5% 0.008 50)" },
          100: { value: "oklch(97% 0.016 50)" },
          200: { value: "oklch(92.2% 0.043 50)" },
          300: { value: "oklch(87% 0.074 50)" },
          400: { value: "oklch(70.8% 0.130 50)" },
          450: { value: "oklch(63.2% 0.140 50)" },
          500: { value: "oklch(55.6% 0.140 50)" },
          600: { value: "oklch(43.9% 0.112 50)" },
          700: { value: "oklch(37.1% 0.094 50)" },
          800: { value: "oklch(26.9% 0.069 50)" },
          900: { value: "oklch(21% 0.054 50)" },
          950: { value: "oklch(18% 0.047 50)" },
        },
        amber: {
          50: { value: "oklch(98.5% 0.010 70)" },
          100: { value: "oklch(97% 0.021 70)" },
          200: { value: "oklch(92.2% 0.056 70)" },
          300: { value: "oklch(87% 0.090 70)" },
          400: { value: "oklch(70.8% 0.130 70)" },
          450: { value: "oklch(63.2% 0.132 70)" },
          500: { value: "oklch(55.6% 0.116 70)" },
          600: { value: "oklch(43.9% 0.091 70)" },
          700: { value: "oklch(37.1% 0.077 70)" },
          800: { value: "oklch(26.9% 0.056 70)" },
          900: { value: "oklch(21% 0.044 70)" },
          950: { value: "oklch(18% 0.038 70)" },
        },
        yellow: {
          50: { value: "oklch(98.5% 0.012 95)" },
          100: { value: "oklch(97% 0.028 95)" },
          200: { value: "oklch(92.2% 0.060 95)" },
          300: { value: "oklch(87% 0.090 95)" },
          400: { value: "oklch(70.8% 0.130 95)" },
          450: { value: "oklch(63.2% 0.125 95)" },
          500: { value: "oklch(55.6% 0.110 95)" },
          600: { value: "oklch(43.9% 0.087 95)" },
          700: { value: "oklch(37.1% 0.073 95)" },
          800: { value: "oklch(26.9% 0.053 95)" },
          900: { value: "oklch(21% 0.042 95)" },
          950: { value: "oklch(18% 0.036 95)" },
        },
        green: {
          50: { value: "oklch(98.5% 0.012 150)" },
          100: { value: "oklch(97% 0.028 150)" },
          200: { value: "oklch(92.2% 0.060 150)" },
          300: { value: "oklch(87% 0.090 150)" },
          400: { value: "oklch(70.8% 0.130 150)" },
          450: { value: "oklch(63.2% 0.140 150)" },
          500: { value: "oklch(55.6% 0.140 150)" },
          600: { value: "oklch(43.9% 0.116 150)" },
          700: { value: "oklch(37.1% 0.098 150)" },
          800: { value: "oklch(26.9% 0.072 150)" },
          900: { value: "oklch(21% 0.056 150)" },
          950: { value: "oklch(18% 0.048 150)" },
        },
        teal: {
          50: { value: "oklch(98.5% 0.012 185)" },
          100: { value: "oklch(97% 0.028 185)" },
          200: { value: "oklch(92.2% 0.060 185)" },
          300: { value: "oklch(87% 0.090 185)" },
          400: { value: "oklch(70.8% 0.120 185)" },
          450: { value: "oklch(63.2% 0.107 185)" },
          500: { value: "oklch(55.6% 0.094 185)" },
          600: { value: "oklch(43.9% 0.074 185)" },
          700: { value: "oklch(37.1% 0.063 185)" },
          800: { value: "oklch(26.9% 0.046 185)" },
          900: { value: "oklch(21% 0.036 185)" },
          950: { value: "oklch(18% 0.031 185)" },
        },
        cyan: {
          50: { value: "oklch(98.5% 0.011 215)" },
          100: { value: "oklch(97% 0.022 215)" },
          200: { value: "oklch(92.2% 0.059 215)" },
          300: { value: "oklch(87% 0.090 215)" },
          400: { value: "oklch(70.8% 0.120 215)" },
          450: { value: "oklch(63.2% 0.107 215)" },
          500: { value: "oklch(55.6% 0.094 215)" },
          600: { value: "oklch(43.9% 0.075 215)" },
          700: { value: "oklch(37.1% 0.063 215)" },
          800: { value: "oklch(26.9% 0.046 215)" },
          900: { value: "oklch(21% 0.036 215)" },
          950: { value: "oklch(18% 0.031 215)" },
        },
        blue: {
          50: { value: "oklch(98.5% 0.007 250)" },
          100: { value: "oklch(97% 0.014 250)" },
          200: { value: "oklch(92.2% 0.037 250)" },
          300: { value: "oklch(87% 0.064 250)" },
          400: { value: "oklch(70.8% 0.130 250)" },
          450: { value: "oklch(63.2% 0.140 250)" },
          500: { value: "oklch(55.6% 0.140 250)" },
          600: { value: "oklch(43.9% 0.119 250)" },
          700: { value: "oklch(37.1% 0.101 250)" },
          800: { value: "oklch(26.9% 0.074 250)" },
          900: { value: "oklch(21% 0.058 250)" },
          950: { value: "oklch(18% 0.050 250)" },
        },
        purple: {
          50: { value: "oklch(98.5% 0.008 300)" },
          100: { value: "oklch(97% 0.016 300)" },
          200: { value: "oklch(92.2% 0.042 300)" },
          300: { value: "oklch(87% 0.072 300)" },
          400: { value: "oklch(70.8% 0.130 300)" },
          450: { value: "oklch(63.2% 0.140 300)" },
          500: { value: "oklch(55.6% 0.140 300)" },
          600: { value: "oklch(43.9% 0.130 300)" },
          700: { value: "oklch(37.1% 0.110 300)" },
          800: { value: "oklch(26.9% 0.080 300)" },
          900: { value: "oklch(21% 0.065 300)" },
          950: { value: "oklch(18% 0.050 300)" },
        },
        pink: {
          50: { value: "oklch(98.5% 0.008 350)" },
          100: { value: "oklch(97% 0.017 350)" },
          200: { value: "oklch(92.2% 0.045 350)" },
          300: { value: "oklch(87% 0.079 350)" },
          400: { value: "oklch(70.8% 0.130 350)" },
          450: { value: "oklch(63.2% 0.140 350)" },
          500: { value: "oklch(55.6% 0.140 350)" },
          600: { value: "oklch(43.9% 0.130 350)" },
          700: { value: "oklch(37.1% 0.110 350)" },
          800: { value: "oklch(26.9% 0.080 350)" },
          900: { value: "oklch(21% 0.065 350)" },
          950: { value: "oklch(18% 0.050 350)" },
        },
      },
      /**
       * Движение (#1761): пружины и длительности. Компоненты берут их токенами (`transition="..."` с
       * `transitionTimingFunction="spring"`), чтобы ни одна длительность не писалась руками.
       */
      easings: {
        spring: { value: SPRING.easing },
        springPress: { value: SPRING_PRESS.easing },
      },
      durations: {
        spring: { value: `${SPRING.ms}ms` },
        springPress: { value: `${SPRING_PRESS.ms}ms` },
        enter: { value: `${MOTION.enter}ms` },
        exit: { value: `${MOTION.exit}ms` },
      },
      fonts: {
        heading: {
          value: "var(--font-heading), Inter, system-ui, -apple-system, Segoe UI, sans-serif",
        },
        body: {
          value: "var(--font-body), Inter, system-ui, -apple-system, Segoe UI, sans-serif",
        },
      },
    },

    semanticTokens: {
      /**
       * Три уровня скругления (#1788): `l1` — мелочи (чекбокс, чип), `l2` — элементы управления (кнопка, поле, меню,
       * переключатель), `l3` — поверхности (карточка, таблица, диалог, шторка). Chakra красит ими весь кит, поэтому
       * характер углов меняется здесь, а не в компонентах. Мягче, чем по умолчанию (2/4/6px): интерфейс дружелюбнее.
       * Прямые размеры (`sm`, `md`, `lg`) в компонентах запрещены — их ловит design:check.
       */
      radii: {
        l1: { value: "0.375rem" },
        l2: { value: "0.625rem" },
        l3: { value: "1rem" },
      },
      colors: {
        /**
         * Поверхности стоят на целых ступенях палитры, границы — на половинных (#1244).
         *
         * Так задумано и так должно остаться: раньше обе лестницы шли по одним ступеням, только
         * со сдвигом, и каждая граница где-нибудь совпадала с поверхностью до неразличимости.
         * В светлой пропадала рамка на `bg.muted`, в тёмной — на `bg.subtle`, а `bg.subtle`
         * вовсе равнялся фону страницы, и секция сливалась с ним.
         *
         * Половинные ступени — не украшение: между 100 и 200 в светлой нет ничего, а поставить
         * границу на соседнюю целую значило бы отдать её другой поверхности.
         */
        bg: {
          DEFAULT: {
            value: { _light: `{colors.${neutral}.100}`, _dark: `{colors.${neutral}.900}` },
          },
          panel: {
            value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` },
          },
          subtle: {
            value: { _light: `{colors.${neutral}.200}`, _dark: `{colors.${neutral}.800}` },
          },
          muted: {
            value: { _light: `{colors.${neutral}.300}`, _dark: `{colors.${neutral}.700}` },
          },
          emphasized: {
            value: { _light: `{colors.${neutral}.400}`, _dark: `{colors.${neutral}.600}` },
          },
          /**
           * Подсветка изменившегося (#1761): карточка или число, обновлённые в фоне, на секунду загораются и гаснут.
           * Мягкий синий, а не нейтральный: серую вспышку не отличить от наведения.
           */
          highlight: {
            value: { _light: "{colors.blue.100}", _dark: "{colors.blue.800}" },
          },
        },

        // Foreground (swapped from Chakra convention to match codebase)
        //
        // Три уровня, и у каждого свой запас контраста на обеих темах: fg ~19/17, fg.subtle
        // ~7/7, fg.muted ~5/5.1 на фоне страницы. Раньше приглушённый в светлой давал 2.38 против 3.75 в
        // тёмной — то есть одна и та же подпись читалась в тёмной и еле проступала в светлой,
        // а таких подписей в интерфейсе больше двухсот (#1244).
        fg: {
          DEFAULT: {
            value: { _light: "{colors.black}", _dark: `{colors.${neutral}.50}` },
          },
          subtle: {
            value: { _light: `{colors.${neutral}.600}`, _dark: `{colors.${neutral}.400}` },
          },
          // Светлая — на половинной ступени 550, а не на 500. Рецепты Chakra красят `fg.muted` не только
          // украшения, но и читаемый текст: подсказки полей, неактивные вкладки, звенья хлебных
          // крошек, описания пустых состояний. На 500 это давало 4.31 на фоне страницы — ниже WCAG AA
          // 4.5; нашлось строгой проверкой a11y историй. 550 проходит порог и остаётся светлее
          // `fg.subtle`.
          muted: {
            value: { _light: `{colors.${neutral}.550}`, _dark: `{colors.${neutral}.450}` },
          },
          inverted: {
            value: { _light: `{colors.${neutral}.50}`, _dark: "{colors.black}" },
          },
        },

        border: {
          DEFAULT: {
            value: { _light: `{colors.${neutral}.350}`, _dark: `{colors.${neutral}.650}` },
          },
          muted: {
            value: { _light: `{colors.${neutral}.250}`, _dark: `{colors.${neutral}.750}` },
          },
          subtle: {
            value: { _light: `{colors.${neutral}.150}`, _dark: `{colors.${neutral}.850}` },
          },
          emphasized: {
            value: { _light: `{colors.${neutral}.450}`, _dark: `{colors.${neutral}.550}` },
          },
          inverted: {
            value: { _light: `{colors.${neutral}.800}`, _dark: `{colors.${neutral}.200}` },
          },
        },

        // Brand = contrast (yin-yang), shifted one step deeper than bg
        // so brand-colored elements are visible against neutral backgrounds.
        brand: {
          // В тёмной — светло-нейтральная заливка, а не чистый белый (#1771): белая кнопка была самым ярким пятном
          // тёмного экрана (18.8 к панели). Кнопка остаётся главной, надпись на ней — чёрная, контраст около 15.
          solid: {
            value: { _light: `{colors.${neutral}.900}`, _dark: `{colors.${neutral}.200}` },
          },
          contrast: {
            value: { _light: "{colors.white}", _dark: "{colors.black}" },
          },
          fg: {
            value: { _light: `{colors.${neutral}.800}`, _dark: `{colors.${neutral}.200}` },
          },
          subtle: {
            value: { _light: `{colors.${neutral}.200}`, _dark: `{colors.${neutral}.800}` },
          },
          muted: {
            value: { _light: `{colors.${neutral}.300}`, _dark: `{colors.${neutral}.700}` },
          },
          emphasized: {
            value: { _light: `{colors.${neutral}.500}`, _dark: `{colors.${neutral}.500}` },
          },
          focusRing: {
            value: { _light: `{colors.${neutral}.500}`, _dark: `{colors.${neutral}.450}` },
          },
          border: {
            value: { _light: `{colors.${neutral}.500}`, _dark: `{colors.${neutral}.500}` },
          },
        },

        // Серая палитра — та же нейтральная шкала, что у поверхностей, а не своя (#1771): серая заливка в тёмной была
        // чисто белой и светилась, как прежняя главная кнопка.
        gray: {
          solid: { value: { _light: `{colors.${neutral}.900}`, _dark: `{colors.${neutral}.200}` } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: `{colors.${neutral}.800}`, _dark: `{colors.${neutral}.200}` } },
          subtle: { value: { _light: `{colors.${neutral}.200}`, _dark: `{colors.${neutral}.800}` } },
          muted: { value: { _light: `{colors.${neutral}.300}`, _dark: `{colors.${neutral}.700}` } },
          emphasized: { value: { _light: `{colors.${neutral}.400}`, _dark: `{colors.${neutral}.600}` } },
          focusRing: { value: { _light: `{colors.${neutral}.500}`, _dark: `{colors.${neutral}.450}` } },
          border: { value: { _light: `{colors.${neutral}.350}`, _dark: `{colors.${neutral}.650}` } },
        },
        // Роли акцентов (#1771) — одинаковые у всех палитр, поэтому акценты ровные в обеих темах. Заливка: в светлой
        // ступень 600 с белым текстом (7.4–8.4), в тёмной — 450 с тёмным текстом (5.0–5.8): светлая заливка на тёмной
        // странице, как у `brand`, вместо тёмной, которая тонула. Мягкая плашка — 100/900, текст на ней — 700/300.
        red: {
          solid: { value: { _light: "{colors.red.600}", _dark: "{colors.red.450}" } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: "{colors.red.700}", _dark: "{colors.red.300}" } },
          subtle: { value: { _light: "{colors.red.100}", _dark: "{colors.red.900}" } },
          muted: { value: { _light: "{colors.red.200}", _dark: "{colors.red.800}" } },
          emphasized: { value: { _light: "{colors.red.300}", _dark: "{colors.red.700}" } },
          focusRing: { value: { _light: "{colors.red.500}", _dark: "{colors.red.450}" } },
          border: { value: { _light: "{colors.red.500}", _dark: "{colors.red.400}" } },
        },
        orange: {
          solid: { value: { _light: "{colors.orange.600}", _dark: "{colors.orange.450}" } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: "{colors.orange.700}", _dark: "{colors.orange.300}" } },
          subtle: { value: { _light: "{colors.orange.100}", _dark: "{colors.orange.900}" } },
          muted: { value: { _light: "{colors.orange.200}", _dark: "{colors.orange.800}" } },
          emphasized: { value: { _light: "{colors.orange.300}", _dark: "{colors.orange.700}" } },
          focusRing: { value: { _light: "{colors.orange.500}", _dark: "{colors.orange.450}" } },
          border: { value: { _light: "{colors.orange.500}", _dark: "{colors.orange.400}" } },
        },
        amber: {
          solid: { value: { _light: "{colors.amber.600}", _dark: "{colors.amber.450}" } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: "{colors.amber.700}", _dark: "{colors.amber.300}" } },
          subtle: { value: { _light: "{colors.amber.100}", _dark: "{colors.amber.900}" } },
          muted: { value: { _light: "{colors.amber.200}", _dark: "{colors.amber.800}" } },
          emphasized: { value: { _light: "{colors.amber.300}", _dark: "{colors.amber.700}" } },
          focusRing: { value: { _light: "{colors.amber.500}", _dark: "{colors.amber.450}" } },
          border: { value: { _light: "{colors.amber.500}", _dark: "{colors.amber.400}" } },
        },
        yellow: {
          solid: { value: { _light: "{colors.yellow.600}", _dark: "{colors.yellow.450}" } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: "{colors.yellow.700}", _dark: "{colors.yellow.300}" } },
          subtle: { value: { _light: "{colors.yellow.100}", _dark: "{colors.yellow.900}" } },
          muted: { value: { _light: "{colors.yellow.200}", _dark: "{colors.yellow.800}" } },
          emphasized: { value: { _light: "{colors.yellow.300}", _dark: "{colors.yellow.700}" } },
          focusRing: { value: { _light: "{colors.yellow.500}", _dark: "{colors.yellow.450}" } },
          border: { value: { _light: "{colors.yellow.500}", _dark: "{colors.yellow.400}" } },
        },
        green: {
          solid: { value: { _light: "{colors.green.600}", _dark: "{colors.green.450}" } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: "{colors.green.700}", _dark: "{colors.green.300}" } },
          subtle: { value: { _light: "{colors.green.100}", _dark: "{colors.green.900}" } },
          muted: { value: { _light: "{colors.green.200}", _dark: "{colors.green.800}" } },
          emphasized: { value: { _light: "{colors.green.300}", _dark: "{colors.green.700}" } },
          focusRing: { value: { _light: "{colors.green.500}", _dark: "{colors.green.450}" } },
          border: { value: { _light: "{colors.green.500}", _dark: "{colors.green.400}" } },
        },
        teal: {
          solid: { value: { _light: "{colors.teal.600}", _dark: "{colors.teal.450}" } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: "{colors.teal.700}", _dark: "{colors.teal.300}" } },
          subtle: { value: { _light: "{colors.teal.100}", _dark: "{colors.teal.900}" } },
          muted: { value: { _light: "{colors.teal.200}", _dark: "{colors.teal.800}" } },
          emphasized: { value: { _light: "{colors.teal.300}", _dark: "{colors.teal.700}" } },
          focusRing: { value: { _light: "{colors.teal.500}", _dark: "{colors.teal.450}" } },
          border: { value: { _light: "{colors.teal.500}", _dark: "{colors.teal.400}" } },
        },
        cyan: {
          solid: { value: { _light: "{colors.cyan.600}", _dark: "{colors.cyan.450}" } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: "{colors.cyan.700}", _dark: "{colors.cyan.300}" } },
          subtle: { value: { _light: "{colors.cyan.100}", _dark: "{colors.cyan.900}" } },
          muted: { value: { _light: "{colors.cyan.200}", _dark: "{colors.cyan.800}" } },
          emphasized: { value: { _light: "{colors.cyan.300}", _dark: "{colors.cyan.700}" } },
          focusRing: { value: { _light: "{colors.cyan.500}", _dark: "{colors.cyan.450}" } },
          border: { value: { _light: "{colors.cyan.500}", _dark: "{colors.cyan.400}" } },
        },
        blue: {
          solid: { value: { _light: "{colors.blue.600}", _dark: "{colors.blue.450}" } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: "{colors.blue.700}", _dark: "{colors.blue.300}" } },
          subtle: { value: { _light: "{colors.blue.100}", _dark: "{colors.blue.900}" } },
          muted: { value: { _light: "{colors.blue.200}", _dark: "{colors.blue.800}" } },
          emphasized: { value: { _light: "{colors.blue.300}", _dark: "{colors.blue.700}" } },
          focusRing: { value: { _light: "{colors.blue.500}", _dark: "{colors.blue.450}" } },
          border: { value: { _light: "{colors.blue.500}", _dark: "{colors.blue.400}" } },
        },
        purple: {
          solid: { value: { _light: "{colors.purple.600}", _dark: "{colors.purple.450}" } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: "{colors.purple.700}", _dark: "{colors.purple.300}" } },
          subtle: { value: { _light: "{colors.purple.100}", _dark: "{colors.purple.900}" } },
          muted: { value: { _light: "{colors.purple.200}", _dark: "{colors.purple.800}" } },
          emphasized: { value: { _light: "{colors.purple.300}", _dark: "{colors.purple.700}" } },
          focusRing: { value: { _light: "{colors.purple.500}", _dark: "{colors.purple.450}" } },
          border: { value: { _light: "{colors.purple.500}", _dark: "{colors.purple.400}" } },
        },
        pink: {
          solid: { value: { _light: "{colors.pink.600}", _dark: "{colors.pink.450}" } },
          contrast: { value: { _light: "{colors.white}", _dark: `{colors.${neutral}.950}` } },
          fg: { value: { _light: "{colors.pink.700}", _dark: "{colors.pink.300}" } },
          subtle: { value: { _light: "{colors.pink.100}", _dark: "{colors.pink.900}" } },
          muted: { value: { _light: "{colors.pink.200}", _dark: "{colors.pink.800}" } },
          emphasized: { value: { _light: "{colors.pink.300}", _dark: "{colors.pink.700}" } },
          focusRing: { value: { _light: "{colors.pink.500}", _dark: "{colors.pink.450}" } },
          border: { value: { _light: "{colors.pink.500}", _dark: "{colors.pink.400}" } },
        },

        // Status accents — restrained, low-chroma hues for the toast icon and other status
        // affordances (#339). Foreground-level (icons/text), not background fills.
        status: {
          success: { value: { _light: "{colors.green.600}", _dark: "{colors.green.400}" } },
          error: { value: { _light: "{colors.red.600}", _dark: "{colors.red.400}" } },
          info: { value: { _light: "{colors.blue.600}", _dark: "{colors.blue.400}" } },
          warning: { value: { _light: "{colors.amber.600}", _dark: "{colors.amber.400}" } },
        },
      },
    },

    /** Кадры движения (#1761): появление, уход, подсветка изменившегося. Имена с префиксом — общие с переходами. */
    textStyles: {
      // Подпись раздела капслоком (#1777): один размер, вес и трекинг на всё приложение. Цвет задаёт место.
      label: {
        value: {
          fontSize: "xs",
          lineHeight: "1rem",
          fontWeight: "semibold",
          letterSpacing: "wider",
          textTransform: "uppercase",
        },
      },
    },
    keyframes: {
      "fis-fade-in": { from: { opacity: 0 } },
      "fis-fade-out": { to: { opacity: 0 } },
      "fis-reveal": { from: { opacity: 0, translate: "0 8px", filter: "blur(3px)" } },
      "fis-rise": { from: { opacity: 0, translate: "0 8px" } },
      "fis-grow-in": { from: { opacity: 0, scale: "0.94" } },
      "fis-shrink-out": { to: { opacity: 0, scale: "0.94" } },
      "fis-flash": {
        "0%, 25%": { backgroundColor: "var(--chakra-colors-bg-highlight)" },
        "100%": { backgroundColor: "transparent" },
      },
      "fis-from-right": { from: { translate: "48px 0" } },
      "fis-from-left": { from: { translate: "-48px 0" } },
      "fis-to-left": { to: { translate: "-48px 0" } },
      "fis-to-right": { to: { translate: "48px 0" } },
      // Полоса у нижнего края: въезжает из-за него и уходит туда же.
      "fis-from-bottom": { from: { translate: "0 100%" } },
      "fis-to-bottom": { to: { translate: "0 100%", opacity: 0 } },
      "fis-sweep": { from: { transform: "translateX(-100%)" }, to: { transform: "translateX(250%)" } },
      // Шаг мастера (#1811): приходит со стороны, куда идёт человек, и проявляется.
      "fis-step-forward": { from: { opacity: 0, translate: "32px 0" } },
      "fis-step-back": { from: { opacity: 0, translate: "-32px 0" } },
      // Страница, из которой раскрывается мастер, уходит вглубь: уменьшается, тускнеет и чуть размывается.
      "fis-sink": { to: { opacity: 0, scale: "0.94", filter: "blur(1px)" } },
      // Лист мастера, пока растёт: поверхность панели, к концу растворяется в фоне страницы.
      "fis-sheet": {
        "0%": {
          backgroundColor: "var(--fis-expand-from, var(--chakra-colors-bg-panel))",
          clipPath: "inset(0 round var(--fis-expand-radius, var(--chakra-radii-l2)))",
        },
        "35%, 75%": {
          backgroundColor: "var(--chakra-colors-bg-panel)",
          clipPath: "inset(0 round var(--chakra-radii-l3))",
        },
        "100%": { backgroundColor: "var(--chakra-colors-bg)", clipPath: "inset(0 round var(--chakra-radii-l3))" },
      },
    },

    recipes: {
      badge: badgeRecipe,
      button: buttonRecipe,
      icon: iconRecipe,
    },
    slotRecipes: {
      alert: alertRecipe,
      card: cardRecipe,
      carousel: carouselRecipe,
      collapsible: collapsibleRecipe,
      dialog: dialogRecipe,
      drawer: drawerRecipe,
      listbox: listboxRecipe,
      menu: menuRecipe,
      segmentGroup: segmentGroupRecipe,
      select: selectRecipe,
      table: tableRecipe,
      tabs: tabsRecipe,
      toast: toastRecipe,
    },
  },
});

export { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, themeConfig);

/**
 * Акцент приложения.
 *
 * `brand` основной темы — контраст, а не цвет: чёрный в светлой теме, белый в тёмной. Это решение,
 * а не недосмотр, и веб на нём остаётся. Приложению, которому нужен цветной акцент (админка),
 * незачем красить экраны руками: `colorPalette` по месту расходится с первой же новой кнопкой.
 * Оно берёт эту сборку — и акцентными становятся все элементы, включая порталы: меню, ящики, тосты.
 *
 * Сменить акцент — одна строка: имя шкалы в `accent`. Блок повторяет форму `brand` выше, потому
 * что оба разбирает `scripts/check-theme-contrast.mjs`: контраст акцента проверяется так же, как
 * контраст нейтральной темы, иначе цвет уезжает в одной из тем незаметно.
 */
const accent = "ember";

export const accentConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        brand: {
          // В тёмной теме заливка светлеет, а надпись темнеет — тот же приём, что у нейтрального
          // brand. Тёмная заливка на тёмной странице давала 2.09 и тонула в фоне; поймано этой же
          // проверкой контраста.
          solid: { value: { _light: `{colors.${accent}.600}`, _dark: `{colors.${accent}.400}` } },
          contrast: { value: { _light: "{colors.white}", _dark: "{colors.black}" } },
          fg: { value: { _light: `{colors.${accent}.700}`, _dark: `{colors.${accent}.300}` } },
          subtle: { value: { _light: `{colors.${accent}.100}`, _dark: `{colors.${accent}.900}` } },
          muted: { value: { _light: `{colors.${accent}.200}`, _dark: `{colors.${accent}.800}` } },
          emphasized: { value: { _light: `{colors.${accent}.300}`, _dark: `{colors.${accent}.700}` } },
          focusRing: { value: { _light: `{colors.${accent}.500}`, _dark: `{colors.${accent}.500}` } },
          border: { value: { _light: `{colors.${accent}.500}`, _dark: `{colors.${accent}.400}` } },
        },
      },
    },
  },
});

/** Тема с акцентом: `<ThemeProvider system={accentSystem}>` — одна строка на приложение. */
export const accentSystem = createSystem(defaultConfig, themeConfig, accentConfig);
