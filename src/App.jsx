import React from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    title: '2D Graphics Editor',
    type: 'C PROGRAMMING',
    description:
      'A menu-driven 2D Graphics Editor developed using C programming. It allows users to perform graphical operations such as drawing lines, rectangles and other shapes using structured programming.',
    tags: ['C Programming', 'Graphics', 'Functions', 'Modular Design'],
    link: 'https://github.com/deekshareddy719-ship-it/2-D-Graphic-Editor'
  },
  {
    number: '02',
    title: 'Bluetooth Controlled Car',
    type: 'IOT & EMBEDDED SYSTEMS',
    description:
      'A Bluetooth-based robotic car that allows wireless movement control through a mobile device.',
    tags: ['Bluetooth', 'IoT', 'Arduino', 'Hardware']
  },
  {
    number: '03',
    title: 'Intelligent Tutorial System',
    type: 'AI & DATA SCIENCE',
    description:
      'An intelligent learning platform designed to provide personalized learning experiences, quizzes, performance tracking and recommendations.',
    tags: ['Artificial Intelligence', 'Python', 'Personalized Learning']
  }
]

const skills = [
  'Python',
  'C Programming',
  'Advanced C',
  'Data Structures',
  'Problem Solving',
  'Communication',
  'Teamwork',
  'Logical Thinking'
]

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Deeksha<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="subtitle">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>N. Deeksha</span>
          </h1>

          <h2>
            Artificial Intelligence & Data Science Student
          </h2>

          <p className="hero-description">
            Passionate about programming, technology, artificial
            intelligence and creating innovative solutions.
            I enjoy learning new technologies and developing
            practical projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Projects →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">ND</div>
          <h2>N. Deeksha</h2>
          <p>AI & Data Science</p>
          <div className="card-line"></div>
          <p>REVA University</p>
          <p>Bengaluru, India</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <p className="section-label">01 / ABOUT ME</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-box">
          <p>
            I am N. Deeksha, a B.Tech student specializing in
            Artificial Intelligence and Data Science at REVA
            University.
          </p>

          <p>
            I have knowledge of Python, C and Advanced C.
            I am interested in software development, artificial
            intelligence and emerging technologies.
          </p>

          <p>
            My goal is to improve my technical skills, gain
            practical experience and build innovative projects
            that solve real-world problems.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <p className="section-label">02 / MY EXPERTISE</p>
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>0{index + 1}</span>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section projects-section">
        <p className="section-label">03 / MY WORK</p>
        <h2 className="section-title">My Projects</h2>

        <p className="section-description">
          Here are some of my academic and technical projects.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-type">
                  {project.type}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project on GitHub
                  <span> ↗ </span>
                </a>
              ) : (
                <span className="coming-soon">
                  Project details coming soon
                </span>
              )}

            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="section">
        <p className="section-label">04 / EDUCATION</p>
        <h2 className="section-title">My Education</h2>

        <div className="education-card">
          <h3>Bachelor of Technology</h3>
          <h4>Artificial Intelligence & Data Science</h4>
          <p>REVA University, Bengaluru</p>
          <span>Undergraduate Student</span>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <p className="section-label">05 / GET IN TOUCH</p>
        <h2 className="section-title">Let's Connect</h2>

        <p>
          I am always interested in learning, collaborating
          and exploring new opportunities.
        </p>

        <div className="contact-buttons">
          <a href="mailto:your-email@gmail.com">
            Email Me ↗
          </a>

          <a
            href="https://github.com/deekshareddy719-ship-it"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>Deeksha<span>.</span></h3>

        <p>
          Designed & Developed by N. Deeksha
        </p>

        <p>© 2026 All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App
