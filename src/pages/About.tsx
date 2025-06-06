const About = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <p>This is a modern React application built with:</p>
      <ul style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
        <li>Vite - Next Generation Frontend Tooling</li>
        <li>React - A JavaScript library for building user interfaces</li>
        <li>TypeScript - JavaScript with syntax for types</li>
        <li>React Router - Declarative routing for React</li>
      </ul>
    </div>
  );
};

export default About;
