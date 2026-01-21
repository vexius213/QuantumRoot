import Card from "../components/Card";
import Button from "../components/Button";
import { useToggle } from "../hooks/useToggle";

const Home = () => {
  const { value: showMessage, toggle } = useToggle(false);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          color: "var(--color-primary)",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Welcome to my test site, i know its so trash but skid it if u want to lol
      </h1>

      <Card
        title="Main Menu"
        style={{ textAlign: "center", maxWidth: "500px" }}
      >
        <p style={{ marginBottom: "1rem", lineHeight: 1.6, color: "var(--color-muted)" }}>
          • Add whatever you want to this<br />
          • I was just bored so I made this
        </p>

        <Button
          label={showMessage ? "Hide Message" : "Show Message"}
          onClick={toggle}
          fullWidth
        />

        {showMessage && (
          <p
            style={{
              marginTop: "1rem",
              fontWeight: 600,
              color: "var(--color-primary)",
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            Add whatever message u want
          </p>
        )}
      </Card>
    </main>
  );
};

export default Home;
