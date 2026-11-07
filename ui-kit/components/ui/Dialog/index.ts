"use client";
import { Dialog as BaseDialog } from "@chakra-ui/react";

import { ActionTrigger } from "./elements/ActionTrigger";
import { Body } from "./elements/Body";
import { Content } from "./elements/Content";
import { Footer } from "./elements/Footer";
import { Form } from "./elements/Form";
import { Header } from "./elements/Header";
import { Root } from "./elements/Root";
import { Trigger } from "./elements/Trigger";

export const Dialog = {
  Root,
  Trigger,
  Content,
  Header,
  Body,
  Footer,
  Form,
  ActionTrigger,
  // Escape hatches (low-level sub-components for custom layouts)
  Backdrop: BaseDialog.Backdrop,
  Positioner: BaseDialog.Positioner,
  Title: BaseDialog.Title,
  Description: BaseDialog.Description,
  CloseTrigger: BaseDialog.CloseTrigger,
  // Non-DOM utilities
  Context: BaseDialog.Context,
  RootProvider: BaseDialog.RootProvider,
  PropsProvider: BaseDialog.PropsProvider,
};

export type {
  DialogActionTriggerProps,
  DialogBackdropProps,
  DialogBodyProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogPositionerProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "./Dialog.types";
// Public types
export type { DialogFormProps } from "./elements/Form";
