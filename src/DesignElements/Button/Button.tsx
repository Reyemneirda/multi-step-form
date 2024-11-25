import React, { useState } from "react";
import { buttonStyles } from "./Button.styles";
interface IButton {
  label?: string;
  disabled?: boolean;
  onclick?: () => void;
}
const Button: React.FC<IButton> = (props) => {
  const { label = "Click", disabled = false, onclick } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const getStyles = (): React.CSSProperties => {
    let styles = { ...buttonStyles.base };
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
