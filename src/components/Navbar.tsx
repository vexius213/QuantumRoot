import React from "react";
import { NavLink } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "./Button";

type User = { username: string; email: string; password: string };

const Navbar: React.FC = () => {
  const [savedUser, setSavedUser] = useLocalStorage<User | null>("user", null);

  const handleLogout = () => setSavedUser(null);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "var(--color-surface)",
        boxShadow: "var(--shadow-md)",
        borderRadius: "0 0 var(--radius-lg) var(--radius-lg)",
        marginBottom: "2rem",
      }}
    >
      <h2 style={{ color: "var(--color-primary)" }}>My App</h2>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {["/", "/about", "/login"].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: "var(--color-text)",
            })}
          >
            {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}

        {savedUser && (
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--color-muted)" }}>
              {savedUser.username}
            </span>
            <Button label="Logout" onClick={handleLogout} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
