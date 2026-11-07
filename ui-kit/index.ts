"use client";
export type { IconProps, LinkProps } from "@chakra-ui/react";
export {
  Box,
  ChakraProvider,
  CheckboxCard,
  CheckboxGroup,
  Circle,
  ColorSwatch,
  Container,
  createListCollection,
  createTreeCollection,
  DataList,
  Fieldset,
  FileUpload,
  Flex,
  Float,
  FormatNumber,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  Kbd,
  Link,
  List,
  LocaleProvider,
  Portal,
  QrCode,
  RadioCard,
  Separator,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
  Stat,
  Text,
  Textarea,
  TreeView,
  useCarousel,
  useLocaleContext,
  useTabs,
  VisuallyHidden,
} from "@chakra-ui/react";

// ── Wrapped components ────────────────────────────────────────────────────────
// All components below are wrapped to:
//   1. Block `className` prop (prevent ad-hoc style overrides)
//   2. Set brand-aware defaults (colorPalette="brand" on interactive components)
//
// Namespace components are re-assembled as computed objects so the dot-access
// API (e.g. <Checkbox.Root>, <Dialog.Content>) remains identical for consumers.

// ── Wrapped components ────────────────────────────────────────────────────────
// All components below are wrapped to:
//   1. Block `className` prop (prevent ad-hoc style overrides)
//   2. Set brand-aware defaults (colorPalette="brand" on interactive components)
//
// Namespace components are re-assembled as computed objects so the dot-access
// API (e.g. <Checkbox.Root>, <Dialog.Content>) remains identical for consumers.

// ── Wrapped components ────────────────────────────────────────────────────────
// All components below are wrapped to:
//   1. Block `className` prop (prevent ad-hoc style overrides)
//   2. Set brand-aware defaults (colorPalette="brand" on interactive components)
//
// Namespace components are re-assembled as computed objects so the dot-access
// API (e.g. <Checkbox.Root>, <Dialog.Content>) remains identical for consumers.

// ── Wrapped components ────────────────────────────────────────────────────────
// All components below are wrapped to:
//   1. Block `className` prop (prevent ad-hoc style overrides)
//   2. Set brand-aware defaults (colorPalette="brand" on interactive components)
//
// Namespace components are re-assembled as computed objects so the dot-access
// API (e.g. <Checkbox.Root>, <Dialog.Content>) remains identical for consumers.

export { Accordion } from "./components/ui/Accordion";
export type { ActionBarContentProps, ActionBarRootProps } from "./components/ui/ActionBar";
// Namespace components
export { ActionBar } from "./components/ui/ActionBar";
export type {
  AlertContentProps,
  AlertDescriptionProps,
  AlertIndicatorProps,
  AlertRootProps,
  AlertTitleProps,
} from "./components/ui/Alert";
export { Alert } from "./components/ui/Alert";
export type { AnimatedListItemProps, AnimatedListRootProps } from "./components/ui/AnimatedList";
export { AnimatedList } from "./components/ui/AnimatedList";
export type { AnimatedNumberProps } from "./components/ui/AnimatedNumber";
export { AnimatedNumber } from "./components/ui/AnimatedNumber";
export type { AutoHeightProps } from "./components/ui/AutoHeight";
export { AutoHeight } from "./components/ui/AutoHeight";
export type { AvatarProps } from "./components/ui/Avatar";
// Simple components
export { Avatar } from "./components/ui/Avatar";
export type { BadgeProps } from "./components/ui/Badge";
export { Badge } from "./components/ui/Badge";
export type { BarChartPoint, BarChartProps } from "./components/ui/BarChart";
export { BarChart } from "./components/ui/BarChart";
export type { BreadcrumbItem, BreadcrumbProps } from "./components/ui/Breadcrumb";
export { Breadcrumb } from "./components/ui/Breadcrumb";
export type { ButtonProps } from "./components/ui/Button";
export { Button } from "./components/ui/Button";
export type { CardRootProps } from "./components/ui/Card";
export { Card } from "./components/ui/Card";
export type {
  CarouselControlProps,
  CarouselControlsProps,
  CarouselIndicatorsProps,
  CarouselItemGroupProps,
  CarouselItemProps,
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
  CarouselRootProps,
} from "./components/ui/Carousel";
export { Carousel } from "./components/ui/Carousel";
export { Checkbox } from "./components/ui/Checkbox";
export type {
  CollapsibleContentProps,
  CollapsibleRootProps,
  CollapsibleTriggerProps,
} from "./components/ui/Collapsible";
export { Collapsible } from "./components/ui/Collapsible";
export { ColorModeButton, useColorMode } from "./components/ui/ColorMode";
export { Dialog } from "./components/ui/Dialog";
export type { DisclosureIconProps } from "./components/ui/DisclosureIcon";
export { DisclosureIcon } from "./components/ui/DisclosureIcon";
export { Drawer } from "./components/ui/Drawer";
export type { EmptyStateProps } from "./components/ui/EmptyState";
export { EmptyState } from "./components/ui/EmptyState";
export { Field } from "./components/ui/Field";
export type { IconButtonProps } from "./components/ui/IconButton";
export { IconButton } from "./components/ui/IconButton";
export type { LanguageTabItem, LanguageTabState, LanguageTabsProps } from "./components/ui/LanguageTabs";
export { LanguageTabs } from "./components/ui/LanguageTabs";
export type { ListboxContentProps, ListboxGroupProps, ListboxRootProps } from "./components/ui/Listbox";
export { Listbox } from "./components/ui/Listbox";
export type { ListViewProps } from "./components/ui/ListView";
export { ListView } from "./components/ui/ListView";
export { Menu } from "./components/ui/Menu";
export { Popover } from "./components/ui/Popover";
export { Progress } from "./components/ui/Progress";
export type { RecordDrawerProps } from "./components/ui/RecordDrawer";
export { RecordDrawer } from "./components/ui/RecordDrawer";
export type { RecordFormProps } from "./components/ui/RecordForm";
export { RecordForm } from "./components/ui/RecordForm";
export type { RefreshBarProps } from "./components/ui/RefreshBar";
export { RefreshBar } from "./components/ui/RefreshBar";
export type { RevealRootProps, RevealSlotProps } from "./components/ui/Reveal";
export { Reveal } from "./components/ui/Reveal";
export type { RowAction, RowActionsProps } from "./components/ui/RowActions";
export { RowActions } from "./components/ui/RowActions";
export type { ScrollAreaProps } from "./components/ui/ScrollArea";
export { ScrollArea } from "./components/ui/ScrollArea";
export type { ScrollHighlightProps } from "./components/ui/ScrollHighlight";
export { ScrollHighlight } from "./components/ui/ScrollHighlight";
export type { ScrollRevealProps } from "./components/ui/ScrollReveal";
export { ScrollReveal } from "./components/ui/ScrollReveal";
export type { SegmentGroupOption, SegmentGroupProps } from "./components/ui/SegmentGroup";
export { SegmentGroup } from "./components/ui/SegmentGroup";
export type { SelectContentProps, SelectRootProps, SelectTriggerProps } from "./components/ui/Select";
export { Select } from "./components/ui/Select";
export type { SlugFieldProps } from "./components/ui/SlugField";
export { SlugField } from "./components/ui/SlugField";
export type { SpinnerProps } from "./components/ui/Spinner";
export { Spinner } from "./components/ui/Spinner";
export type { StatusProps } from "./components/ui/Status";
export { Status } from "./components/ui/Status";
export { Steps } from "./components/ui/Steps";
export { Switch } from "./components/ui/Switch";
export type { TableColumn, TableProps, TableSort, TableSortDirection } from "./components/ui/Table";
export { Table } from "./components/ui/Table";
export { Tabs } from "./components/ui/Tabs";
export type { TimelineRootProps } from "./components/ui/Timeline";
export { Timeline } from "./components/ui/Timeline";
export { Toaster, toaster } from "./components/ui/Toaster";
export type { TooltipProps } from "./components/ui/Tooltip";
export { Tooltip } from "./components/ui/Tooltip";
export type { TourProps, TourStepDetails, UseTourProps, UseTourReturn } from "./components/ui/Tour";
export { Tour, useTour } from "./components/ui/Tour";
export type { TruncatedTextProps } from "./components/ui/TruncatedText";
export { TruncatedText } from "./components/ui/TruncatedText";
// Brand customization
export { createBrandConfig } from "./lib/brand-palette";
// Motion (#1761): one spring for everything that moves, transition names, change highlight.
export { MOTION, SPRING, SPRING_PRESS } from "./lib/motion";
// Toast helpers over `toaster`: dedupe by key, errors persist, others auto-dismiss.
export type { NotifyOptions, ToastAction } from "./lib/notifications";
export {
  notifyError,
  notifyFallbackError,
  notifyInfo,
  notifyLoading,
  notifySuccess,
  notifyWarning,
} from "./lib/notifications";
export { transitionName } from "./lib/transition-name";
export { useChangeFlash } from "./lib/use-change-flash";
export type { UseInViewOptions } from "./lib/use-in-view";
export { useInView } from "./lib/use-in-view";
export type { UseInfiniteScrollOptions } from "./lib/use-infinite-scroll";
export { useInfiniteScroll } from "./lib/use-infinite-scroll";
export type { LoopStep } from "./lib/use-loop";
export { useLoop } from "./lib/use-loop";
export { useMotionData } from "./lib/use-motion-data";
export { useReducedMotion } from "./lib/use-reduced-motion";
export { useSaveShortcut } from "./lib/use-save-shortcut";
export { useScrollProgress } from "./lib/use-scroll-progress";
export { useScrollReveal } from "./lib/use-scroll-reveal";
export { useScrollSpy } from "./lib/use-scroll-spy";
// Theme
export { ThemeProvider } from "./provider";
export { accentConfig, accentSystem, createSystem, defaultConfig, system, themeConfig } from "./theme";

// Seavora: части Chakra, которые экраны приложения берут напрямую, — стили из темы ui-kit.
export { ProgressCircle, RadioGroup, Slider, Toast } from "@chakra-ui/react";
