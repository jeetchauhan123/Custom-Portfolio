import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { personal } from "../../data/personal";
import { socialLinks } from "../../data/social";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#featured-work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#career-journey" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const github = socialLinks.find((item) => item.name === "GitHub");
  const linkedin = socialLinks.find((item) => item.name === "LinkedIn");

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a
          className="navbar-logo"
          href="#home"
          onClick={() => setMenuOpen(false)}
          aria-label={`${personal.name} home`}
        >
          <span className="logo-mark">J</span>
          <span>
            {personal.firstName}
            <span className="logo-dot">.</span>
          </span>
        </a>

        <nav className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            className="navbar-resume"
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </nav>

        <div className="navbar-socials">
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

        <button
          className="navbar-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
