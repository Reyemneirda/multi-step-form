import React from "react";

export interface IButtonStyles {
  base: React.CSSProperties;
  hover: React.CSSProperties;
  focus: React.CSSProperties;
  disabled: React.CSSProperties;
  small: React.CSSProperties;
}

export const buttonStyles: IButtonStyles = {
  base: {
    margin: "0.2rem",
    display: "inline-block",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    fontWeight: 500,
    textAlign: "center" as const,
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "rgb(2, 41, 90)",
    border: "1px solid #007bff",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#007bff",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition:
      "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
  },
  hover: {
    backgroundColor: "rgba(2, 41, 90, 0.9)",
    borderColor: "#0056b3",
  },
  focus: {
    outline: "none",
    boxShadow: "0 0 0 0.2rem rgba(38, 143, 255, 0.5)",
  },
  disabled: {
    backgroundColor: "#6c757d",
    borderColor: "#6c757d",
    cursor: "not-allowed",
    opacity: 0.65,
  },
  small: {
    padding: "0rem 0.5rem",
    fontSize: "0.5rem",
    fontWeight: 400,
  },
};
