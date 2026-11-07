import type { ReactNode } from "react";
import type {
  DialogActionTriggerProps as BaseDialogActionTriggerProps,
  DialogBackdropProps as BaseDialogBackdropProps,
  DialogBodyProps as BaseDialogBodyProps,
  DialogContentProps as BaseDialogContentProps,
  DialogDescriptionProps as BaseDialogDescriptionProps,
  DialogFooterProps as BaseDialogFooterProps,
  DialogHeaderProps as BaseDialogHeaderProps,
  DialogPositionerProps as BaseDialogPositionerProps,
  DialogRootProps as BaseDialogRootProps,
  DialogTitleProps as BaseDialogTitleProps,
  DialogTriggerProps as BaseDialogTriggerProps,
} from "@chakra-ui/react";

import type { UIProps } from "../../../lib/component-types";

// `scrollBehavior` — поведенческий вариант: он решает, прокручивается тело или страница
// под ним. Но имя совпадает с CSS-свойством, поэтому `UIProps` срезает его вместе со
// стилевыми, и потребитель получает ошибку типа на совершенно законный вызов.
//
// Возвращается точечно, а не через общий белый список: разрешение в `AllowedStyleProps`
// подействовало бы на все компоненты сразу, а нужен он двум.
export type DialogRootProps = UIProps<BaseDialogRootProps> & Pick<BaseDialogRootProps, "scrollBehavior">;

export interface DialogTriggerProps extends Omit<UIProps<BaseDialogTriggerProps>, "children"> {
  children?: ReactNode;
}

export interface DialogContentProps extends Omit<UIProps<BaseDialogContentProps>, "children"> {
  backdrop?: boolean;
  children?: ReactNode;
}

export interface DialogHeaderProps extends Omit<UIProps<BaseDialogHeaderProps>, "children" | "title"> {
  title?: ReactNode;
  description?: ReactNode;
  closable?: boolean;
  children?: ReactNode;
}

export type DialogBodyProps = Omit<UIProps<BaseDialogBodyProps>, "children"> & {
  children?: ReactNode;
};

export type DialogFooterProps = Omit<UIProps<BaseDialogFooterProps>, "children"> & {
  children?: ReactNode;
};

export type DialogActionTriggerProps = Omit<UIProps<BaseDialogActionTriggerProps>, "children"> & {
  children?: ReactNode;
};

export type DialogBackdropProps = UIProps<BaseDialogBackdropProps>;
export type DialogPositionerProps = UIProps<BaseDialogPositionerProps>;

export type DialogTitleProps = Omit<UIProps<BaseDialogTitleProps>, "children"> & {
  children?: ReactNode;
};

export type DialogDescriptionProps = Omit<UIProps<BaseDialogDescriptionProps>, "children"> & {
  children?: ReactNode;
};
