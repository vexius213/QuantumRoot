import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, fullWidth }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "0.6rem 1.2rem",
        borderRadius: "var(--radius-md)",
        background: "linear-gradient(90deg, #646cff, #535bf2)",
        color: "#fff",
        width: fullWidth ? "100%" : "auto",
        fontWeight: 600,
        boxShadow: "var(--shadow-sm)",
        transition: "all 0.2s ease",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
