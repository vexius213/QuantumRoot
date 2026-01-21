// ============================================================================================================ //
// it doesnt store anywhere meaning it isnt connected with a database, use MY SQL, SQL Server or Mongo DB (recommended)
// ============================================================================================================ //

import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { useLocalStorage } from "../hooks/useLocalStorage";

type User = { username: string; email: string; password: string };

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [savedUser, setSavedUser] = useLocalStorage<User | null>("user", null);

  const handleLogin = () => {
    if (!username || !email || !password) return;
    setSavedUser({ username, email, password });
    setUsername(""); setEmail(""); setPassword("");
  };

  const handleLogout = () => setSavedUser(null);

  return (
    <main>
      <Card title="Login">
        {savedUser ? (
          <div style={{ textAlign: "center" }}>
            <p><strong>{savedUser.username}</strong></p>
            <p style={{ color: "var(--color-muted)", fontSize: "0.9rem" }}>
              {savedUser.email}
            </p>
            <Button label="Logout" onClick={handleLogout} fullWidth />
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              type="text" placeholder="Username" value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email" placeholder="Email" value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button label="Login" onClick={handleLogin} fullWidth />
          </div>
        )}
      </Card>
    </main>
  );
};

export default Login;
