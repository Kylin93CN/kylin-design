import React from "react";
import classnames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
  Ghost = "ghost",
}

interface BaseButtonProps {
  className?: string;
  size?: ButtonSize;
  disabled?: boolean;
  btnType?: ButtonType;
  children?: React.ReactNode;
  href?: string;
}
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, className, href, ...restProps } =
    props;
  const classes = classnames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled, // link使用css处理，btn使用原生属性处理
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
