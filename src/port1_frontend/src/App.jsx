import React from 'react';

const App = () => {
  return (
    <div className="app-container">
      {/* Navigation Section */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <h1>Hello, I'm Jyothi</h1>
        <p>Welcome to my portfolio website!</p>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with experience in Web developer. I love working on innovative projects and constantly learning new skills.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Description of the project.</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Description of the project.</p>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>Description of the project.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>
        <p>Email: yourname@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
      </section>

      {/* Footer */}
      <div className='footer'>
      <footer >
        <p>&copy; 2024 [Your Name]. All Rights Reserved.</p>
      </footer>
      </div>
    </div>
  );
};

export default App;