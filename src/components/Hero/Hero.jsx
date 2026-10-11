import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { personal } from "../../data/personal";
import { socialLinks } from "../../data/social";
import "./Hero.css";

function Hero() {
  const github = socialLinks.find((item) => item.name === "GitHub");
  const linkedin = socialLinks.find((item) => item.name === "LinkedIn");

  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content container">
        <div className="hero-copy">
          <span className="hero-status">
            <span className="status-dot" />
            {personal.availability}
          </span>

          <p className="hero-eyebrow">HELLO, I'M</p>

          <h1>
            {personal.name.split(" ")[0]}
            <br />
            <span className="gradient-text">
              {personal.name.split(" ").slice(1).join(" ")}.
            </span>
          </h1>

          <div className="hero-role">
            <span>I'm a </span>
            <TypeAnimation
              sequence={[
                "Software Developer",
                1800,
                "Full Stack Developer",
                1800,
                "Web Application Developer",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="hero-description">{personal.introduction}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore My Work <FiArrowUpRight />
            </a>

            <a
              className="btn btn-secondary"
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FiDownload /> View Resume
            </a>
          </div>

          <div className="hero-socials">
            <span>Find me on</span>

            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            )}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-monogram">
            <span>J</span>
            <span className="monogram-dot">C</span>
          </div>

          <div className="hero-code-card code-card-top">
            <span className="code-card-dots">● ● ●</span>
            <code>const developer = "Jeet";</code>
          </div>

          <div className="hero-code-card code-card-bottom">
            <span className="code-symbol">{"{ }"}</span>
            <div>
              <strong>Build.</strong>
              <strong className="gradient-text">Create.</strong>
              <strong>Improve.</strong>
            </div>
          </div>

          <span className="hero-floating-tag tag-react">React.js</span>
          <span className="hero-floating-tag tag-node">Node.js</span>
        </div>
      </div>

      <a className="hero-scroll" href="#about">
        <FaArrowDown />
        <span>Scroll to explore</span>
      </a>
    </section>
  );
}

export default Hero;
