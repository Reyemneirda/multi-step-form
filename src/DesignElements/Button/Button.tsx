import React, { PropsWithChildren, useState } from "react";
import { buttonStyles } from "./Button.styles";
interface IButton extends PropsWithChildren {
  disabled?: boolean;
  onClick?: () => void;
  children?: string;
  size?: "small" | "normal";
}
const Button: React.FC<IButton> = (props) => {
  const {
    children: label = "Click",
    disabled = false,
    onClick: onclick,
    size,
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getStyles = (): React.CSSProperties => {
    let styles = { ...buttonStyles.base };

    if (size === "small") {
      styles = { ...styles, ...buttonStyles.small };
    }
    if (isHovered && !disabled) {
      styles = { ...styles, ...buttonStyles.hover };
    }

    if (isFocused && !disabled) {
      styles = { ...styles, ...buttonStyles.focus };
    }

    if (disabled) {
      styles = { ...styles, ...buttonStyles.disabled };
    }

    return styles;
  };
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={onclick}
      style={getStyles()}
    >
      {label}
    </button>
  );
};

export default Button;
