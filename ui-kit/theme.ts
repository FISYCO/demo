import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { accordionSlotRecipe } from "./Accordion/Accordion.recipe";
import { actionBarSlotRecipe } from "./ActionBar/ActionBar.recipe";
import { alertSlotRecipe } from "./Alert/Alert.recipe";
import { avatarSlotRecipe } from "./Avatar/Avatar.recipe";
import { badgeRecipe } from "./Badge/Badge.recipe";
import { breadcrumbSlotRecipe } from "./Breadcrumb/Breadcrumb.recipe";
import { buttonRecipe } from "./Button/Button.recipe";
import { cardSlotRecipe } from "./Card/Card.recipe";
import { checkboxSlotRecipe } from "./Checkbox/Checkbox.recipe";
import { checkboxCardSlotRecipe } from "./CheckboxCard/CheckboxCard.recipe";
import { colorSwatchRecipe } from "./ColorSwatch/ColorSwatch.recipe";
import { dataListSlotRecipe } from "./DataList/DataList.recipe";
import { dialogSlotRecipe } from "./Dialog/Dialog.recipe";
import { drawerSlotRecipe } from "./Drawer/Drawer.recipe";
import { emptyStateSlotRecipe } from "./EmptyState/EmptyState.recipe";
import { fileUploadSlotRecipe } from "./FileUpload/FileUpload.recipe";
import { hoverCardSlotRecipe } from "./HoverCard/HoverCard.recipe";
import { inputRecipe } from "./Input/Input.recipe";
import { menuSlotRecipe } from "./Menu/Menu.recipe";
import { numberInputSlotRecipe } from "./NumberInput/NumberInput.recipe";
import { pinInputSlotRecipe } from "./PinInput/PinInput.recipe";
import { popoverSlotRecipe } from "./Popover/Popover.recipe";
import { progressSlotRecipe } from "./Progress/Progress.recipe";
import { progressCircleSlotRecipe } from "./ProgressCircle/ProgressCircle.recipe";
import { radioGroupSlotRecipe } from "./RadioGroup/RadioGroup.recipe";
import { segmentGroupSlotRecipe } from "./SegmentGroup/SegmentGroup.recipe";
import { selectSlotRecipe } from "./Select/Select.recipe";
import { separatorRecipe } from "./Separator/Separator.recipe";
import { skeletonRecipe } from "./Skeleton/Skeleton.recipe";
import { sliderSlotRecipe } from "./Slider/Slider.recipe";
import { spinnerRecipe } from "./Spinner/Spinner.recipe";
import { statSlotRecipe } from "./Stat/Stat.recipe";
import { statusSlotRecipe } from "./Status/Status.recipe";
import { stepsSlotRecipe } from "./Steps/Steps.recipe";
import { switchSlotRecipe } from "./Switch/Switch.recipe";
import { tableSlotRecipe } from "./Table/Table.recipe";
import { tabsSlotRecipe } from "./Tabs/Tabs.recipe";
import { textareaRecipe } from "./Textarea/Textarea.recipe";
import { timelineSlotRecipe } from "./Timeline/Timeline.recipe";
import { toastSlotRecipe } from "./Toast/Toast.recipe";
import { tooltipSlotRecipe } from "./Tooltip/Tooltip.recipe";

/**
 * Тема Seavora: рецепты компонентов и шрифты дизайн-системы. Цвета, отступы и радиусы — токены, которые
 * синхронизация из Figma пишет в src/tokens.
 */
export const system = createSystem(
  defaultConfig,
  defineConfig({
    theme: {
      tokens: {
        fonts: {
          heading: { value: "Montserrat, Inter, system-ui, sans-serif" },
          body: { value: "Inter, system-ui, sans-serif" },
        },
      },
      recipes: {
        badge: badgeRecipe,
        button: buttonRecipe,
        colorSwatch: colorSwatchRecipe,
        input: inputRecipe,
        separator: separatorRecipe,
        skeleton: skeletonRecipe,
        spinner: spinnerRecipe,
        textarea: textareaRecipe,
      },
      slotRecipes: {
        accordion: accordionSlotRecipe,
        actionBar: actionBarSlotRecipe,
        alert: alertSlotRecipe,
        avatar: avatarSlotRecipe,
        breadcrumb: breadcrumbSlotRecipe,
        card: cardSlotRecipe,
        checkbox: checkboxSlotRecipe,
        checkboxCard: checkboxCardSlotRecipe,
        dataList: dataListSlotRecipe,
        dialog: dialogSlotRecipe,
        drawer: drawerSlotRecipe,
        emptyState: emptyStateSlotRecipe,
        fileUpload: fileUploadSlotRecipe,
        hoverCard: hoverCardSlotRecipe,
        menu: menuSlotRecipe,
        numberInput: numberInputSlotRecipe,
        pinInput: pinInputSlotRecipe,
        popover: popoverSlotRecipe,
        progress: progressSlotRecipe,
        progressCircle: progressCircleSlotRecipe,
        radioGroup: radioGroupSlotRecipe,
        segmentGroup: segmentGroupSlotRecipe,
        select: selectSlotRecipe,
        slider: sliderSlotRecipe,
        stat: statSlotRecipe,
        status: statusSlotRecipe,
        steps: stepsSlotRecipe,
        switch: switchSlotRecipe,
        table: tableSlotRecipe,
        tabs: tabsSlotRecipe,
        timeline: timelineSlotRecipe,
        toast: toastSlotRecipe,
        tooltip: tooltipSlotRecipe,
      },
    },
  }),
);
