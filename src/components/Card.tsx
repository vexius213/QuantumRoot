import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Card: React.FC<CardProps> = ({ title, children, style }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        borderRadius: "var(--radius-lg)",
        padding: "2rem",
        boxShadow: "var(--shadow-lg)",
        maxWidth: "400px",
        width: "100%",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        ...style,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-5px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <h3 style={{ marginBottom: "1rem", color: "var(--color-text)" }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
