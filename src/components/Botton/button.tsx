import React from "react";
import classnames from "classnames";

export type ButtonSize = "lg" | "sm";

export type ButtonType = "primary" | "default" | "danger" | "link" | "ghost";
interface BaseButtonProps {
  /** 设置 Button 的classname */
  className?: string;
  /** 设置 Button 的尺寸 */
  size?: ButtonSize;
  /** 设置 Button 是否禁用 */
  disabled?: boolean;
  /**设 置 Button 类型 */
  btnType?: ButtonType;
  /** 设置 Button 文案 */
  children?: React.ReactNode;
  /** 设置 Button 类型为link时的跳转地址 */
  href?: string;
}
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

/** 这是一个按钮 */
const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    children,
    className,
    href,
    ...restProps
  } = props;
  const classes = classnames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled, // link使用css处理，btn使用原生属性处理
  });
  if (btnType === "link" && href) {
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
  btnType: "default",
};

export default Button;
