
import { useState } from "react";
import "./App.css";

function About({ name, role, description }) {
  return (
    <section id="about" className="section hero">
      <p className="eyebrow">HELLO, WORLD!</p>
      <h1>I'm <span>{name}</span></h1>
      <h2>{role}</h2>
      <p>{description}</p>
      <a className="button" href="#projects">Explore My Projects</a>
    </section>
  );
}

function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">WHAT I KNOW</p>
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">WHAT I'VE BUILT</p>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="eyebrow">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ email, github, linkedin }) {
  return (
    <section id="contact" className="section">
      <p className="eyebrow">LET'S CONNECT</p>
      <h2>Contact Me</h2>
      <p>Let's connect, learn, and build something useful!</p>
      <a className="button" href={`mailto:${email}`}>Email Me</a>
      <div className="social-links">
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const skills = [
    "C Programming",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Machine Learning",
    "Git & GitHub"
  ];

  const projects = [
    {
      title: "HeartCare AI",
      type: "AI / Machine Learning",
      description: "A heart disease prediction project using machine learning and Flask.",
      link: "https://github.com/rishanbangera25"
    },
    {
      title: "C Programming Practice",
      type: "Programming",
      description: "C programs covering arrays, pointers, structures, and stacks.",
      link: "https://github.com/rishanbangera25/dsa-in-c"
    },
    {
      title: "Developer Portfolio",
      type: "Web Development",
      description: "My personal portfolio built using React and responsive CSS.",
      link: "https://github.com/rishanbangera25"
    }
  ];

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header className="navbar">
        <a href="#about" className="logo">Risha<span>.</span></a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <main>
        <About
          name="Risha"
          role="Computer Science Engineering Student"
          description="I'm a B.Tech Computer Science Engineering student interested in programming, web development, and artificial intelligence. I enjoy learning new technologies and building useful projects."
        />

        <Skills skills={skills} />
        <Projects projects={projects} />

        <Contact
          email="YOUR_EMAIL@example.com"
          github="https://github.com/rishanbangera25"
          linkedin="https://www.linkedin.com/"
        />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Risha | Built with React
      </footer>
    </div>
  );
}

export default App;
