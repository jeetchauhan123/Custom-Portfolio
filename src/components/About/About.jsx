
import { useEffect, useRef, useState } from 'react';
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaArrowRight,
} from 'react-icons/fa';
import { getPortfolioStats } from '../../data/stats';
import './About.css';

const focusAreas = [
  {
    number: '01',
    icon: <FaLaptopCode />,
    title: 'Frontend Engineering',
    description:
      'Building responsive interfaces, reusable components, and intuitive user interactions.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    number: '02',
    icon: <FaServer />,
    title: 'Backend Development',
    description:
      'Developing APIs, application logic, authentication, and server-side functionality.',
    tags: ['Node.js', 'Express', 'ASP.NET'],
  },
  {
    number: '03',
    icon: <FaDatabase />,
    title: 'Data & Integration',
    description:
      'Connecting applications with databases and creating reliable data-driven workflows.',
    tags: ['MongoDB', 'PostgreSQL', 'REST APIs'],
  },
];

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const stats = getPortfolioStats();

  const aboutStats = [
    {
      value: stats.experienceDuration,
      label: 'Experience',
    },
    {
      value: stats.projectCount,
      label: 'Featured Projects',
    },
    {
      value: stats.skillCount,
      label: 'Technologies & Tools',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`about-section section ${isVisible ? 'about-visible' : ''}`}
      id="about"
      ref={sectionRef}
    >
      <div className="about-container container">
        {/* Section heading */}
        <div className="about-heading">
          <div>
            <span className="about-eyebrow">
              <span className="about-eyebrow-line" />
              A LITTLE ABOUT ME
            </span>

            <h2 className="about-title">
              The person behind
              <br />
              the <span className="gradient-text">pixels.</span>
            </h2>
          </div>

          <p className="about-heading-note">
            Curiosity meets code.
            <br />
            Ideas become applications.
          </p>
        </div>

        {/* Main content */}
        <div className="about-layout">
          <div className="about-intro">
            <div className="about-intro-label">
              <span className="about-status-dot" />
              SOFTWARE DEVELOPER
            </div>

            <h3>
              Hello, I'm Jeet.
              <br />
              <span>I build for the web.</span>
            </h3>

            <p>
              I enjoy turning ideas into practical digital
              experiences. My approach combines logical
              problem-solving with an eye for interfaces that
              feel clear, responsive, and easy to use.
            </p>

            <p>
              Working across frontend and backend development
              helps me understand how an application fits
              together—from the first user interaction to the
              APIs and data supporting it.
            </p>

            <p>
              I value clean implementation, thoughtful details,
              and solutions that work reliably beyond the
              screen.
            </p>

            <a className="about-contact-link" href="#contact">
              Let's build something
              <span className="about-link-icon">
                <FaArrowRight />
              </span>
            </a>
          </div>

          {/* Areas of focus */}
          <div className="about-focus">
            <div className="about-focus-heading">
              <div>
                <span className="about-focus-kicker">
                  WHAT I WORK WITH
                </span>
                <h3>Areas of focus</h3>
              </div>

              <span className="about-focus-symbol">
                <FaCode />
              </span>
            </div>

            <div className="about-focus-list">
              {focusAreas.map((area) => (
                <article className="about-focus-item" key={area.number}>
                  <span className="about-focus-number">
                    {area.number}
                  </span>

                  <div className="about-focus-icon">
                    {area.icon}
                  </div>

                  <div className="about-focus-content">
                    <h4>{area.title}</h4>
                    <p>{area.description}</p>

                    <div className="about-focus-tags">
                      {area.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Automatically calculated portfolio statistics */}
        <div className="about-stats">
          <div className="about-stats-heading">
            <span className="about-eyebrow">BY THE NUMBERS</span>
            <p>A snapshot of my development journey.</p>
          </div>

          <div className="about-stats-grid">
            {aboutStats.map((stat, index) => (
              <div className="about-stat" key={stat.label}>
                <span className="about-stat-index">
                  0{index + 1}
                </span>

                <strong>{stat.value}</strong>
                <span className="about-stat-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;