import React, {
  forwardRef,
  ForwardRefRenderFunction,
  MutableRefObject,
} from "react";
import cx from "classnames";

export enum ButtonType {
  Success = "success",
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Warning = "warning",
  Outline = "outline",
  Transparent = "transparent",
  Clear = "clear",
  Recent = "recent",
}

export enum ButtonSize {
  Large = "l",
  Medium = "m",
  Small = "s",
  ExtraLarge = "xl",
}

interface Props extends React.ButtonHTMLAttributes<any> {
  buttonType?:
    | ButtonType
    | "success"
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "outline"
    | "transparent"
    | "clear"
    | "recent";
  buttonSize?: "l" | "m" | "s" | "xl";
  size?: "l" | "m" | "s" | "xl";
  innerRef?: MutableRefObject<HTMLButtonElement>;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  props,
  ref
) => {
  const {
    buttonType = "primary",
    size,
    buttonSize = size || "m",
    children,
    className,
    innerRef,
    ...other
  } = props;

  return (
    <button
      type={"button"}
      ref={innerRef || ref}
      className={cx(
        "button",
        {
          success: buttonType === ButtonType.Success,
          primary: buttonType === ButtonType.Primary,
          secondary: buttonType === ButtonType.Secondary,
          danger: buttonType === ButtonType.Danger,
          warning: buttonType === ButtonType.Warning,
          outline: buttonType === ButtonType.Outline,
          transparent: buttonType === ButtonType.Transparent,
          clear: buttonType === ButtonType.Clear,
          medium: buttonSize === ButtonSize.Medium,
          large: buttonSize === ButtonSize.Large,
          small: buttonSize === ButtonSize.Small,
          recent: buttonType === ButtonType.Recent,
        },
        className
      )}
      {...other}
    >
      {children}
    </button>
  );
};
export default React.memo(forwardRef<HTMLButtonElement, Props>(Button));
