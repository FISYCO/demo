"use client";
import { Dialog as BaseDialog, IconButton } from "@chakra-ui/react";
import { Times } from "../../../../../src/icons/times";

import type { DialogHeaderProps } from "../Dialog.types";

export function Header({
  "data-testid": testId = "Dialog__Header",
  title,
  description,
  closable = true,
  children,
  ...props
}: DialogHeaderProps) {
  return (
    <BaseDialog.Header
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      gap="4"
      data-testid={testId}
      {...props}
    >
      <div>
        {title ? <BaseDialog.Title data-testid="Dialog__Title">{title}</BaseDialog.Title> : null}
        {description ? (
          <BaseDialog.Description data-testid="Dialog__Description">{description}</BaseDialog.Description>
        ) : null}
        {children}
      </div>
      {closable ? (
        <BaseDialog.CloseTrigger asChild data-testid="Dialog__CloseTrigger">
          <IconButton size="sm" variant="ghost" aria-label="Close dialog" flexShrink={0}>
            <Times />
          </IconButton>
        </BaseDialog.CloseTrigger>
      ) : null}
    </BaseDialog.Header>
  );
}
