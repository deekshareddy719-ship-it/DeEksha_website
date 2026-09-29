import './App.css'

function App() {
  const projects = [
    {
      title: '2D Graphics Editor',
      description:
        'A menu-driven 2D graphics editor developed in C with graphical drawing and editing features.',
      tech: 'C',
      github:
        'https://github.com/deekshareddy719-ship-it/2-D-Graphic-Editor',
    },
    {
      title: 'ManganQuest',
      description:
        'An AI-powered manganese exploration and production platform developed for the Smart India Hackathon.',
      tech: 'Python • Streamlit • AI',
      github: 'https://github.com/varshashreen2007-cmd/ManganQuest',
    },
    {
      title: 'Bluetooth Controlled Car',
      description:
        'A Bluetooth-controlled robotic car project developed using a microcontroller and Bluetooth communication.',
      tech: 'Arduino • Bluetooth',
      github: null,
    },
  ]

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">Deeksha</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="small-heading">HELLO, I'M</p>

          <h1>
            N. Deeksha
          </h1>

          <h2>Computer Science Student</h2>

          <p className="hero-description">
            B.Tech student passionate about technology, programming,
            artificial intelligence and building creative projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a
              href="https://www.linkedin.com/in/n-deeksha-511620384"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <p>
            Hello! I'm Deeksha, a B.Tech student interested in Artificial
            Intelligence, Data Science and software development. I enjoy
            learning new technologies and applying my knowledge through
            practical projects.
          </p>

          <p>
            I have worked with programming languages such as Python and C
            and have experience creating projects involving AI, web
            technologies and embedded systems.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-label">WHAT I KNOW</p>

        <h2 className="section-title">Skills</h2>

        <div className="skills-container">
          <div className="skill-card">Python</div>
          <div className="skill-card">C</div>
          <div className="skill-card">Data Structures</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">Git & GitHub</div>
          <div className="skill-card">Streamlit</div>
          <div className="skill-card">Artificial Intelligence</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>

        <h2 className="section-title">Projects</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
