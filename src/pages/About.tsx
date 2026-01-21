import Card from "../components/Card";

const About = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>About</h1>

      <Card title="About This App">
        <p>
          This is just a simple React + TypeScript app built with Vite just for fun
        </p>
        <p>
          You can add whatever you want to the source, have fun skids.
        </p>
      </Card>
    </div>
  );
};

export default About;
