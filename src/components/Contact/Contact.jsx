import React, { useState } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contact.css";

const CONTACT_EMAIL = "your.email@example.com";
const LINKEDIN_URL = "https://www.linkedin.com/";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || `Portfolio inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <header className="contact__header">
          <span className="contact__eyebrow">LET'S CONNECT</span>

          <h2 className="contact__title">
            Have an idea?
            <br />
            <span>Let's build it together.</span>
          </h2>

          <p className="contact__intro">
            Have a project in mind, an opportunity to discuss, or
            just want to connect? I'd be happy to hear from you.
          </p>
        </header>

        <div className="contact__layout">
          <div className="contact__details">
            <span className="contact__section-label">
              GET IN TOUCH
            </span>

            <h3 className="contact__subheading">
              Let's start a conversation.
            </h3>

            <p className="contact__description">
              I'm open to discussing software development
              opportunities, interesting projects, and collaborations.
            </p>

            <a
              className="contact__email-link"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              <span className="contact__detail-icon">
                <FaEnvelope aria-hidden="true" />
              </span>

              <span className="contact__detail-text">
                <span className="contact__detail-label">
                  EMAIL ME
                </span>

                <span className="contact__detail-value">
                  {CONTACT_EMAIL}
                </span>
              </span>

              <FaArrowRight
                className="contact__detail-arrow"
                aria-hidden="true"
              />
            </a>

            <div className="contact__location">
              <span className="contact__detail-icon">
                <FaMapMarkerAlt aria-hidden="true" />
              </span>

              <span className="contact__detail-text">
                <span className="contact__detail-label">
                  LOCATION
                </span>

                <span className="contact__detail-value">
                  Ahmedabad, Gujarat, India
                </span>
              </span>
            </div>

            <div className="contact__socials">
              <span className="contact__detail-label">
                FIND ME ONLINE
              </span>

              <div className="contact__social-links">
                <a
                  href="https://github.com/jeetchauhan123"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  title="GitHub"
                >
                  <FaGithub aria-hidden="true" />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-area">
            <div className="contact__form-heading">
              <h3>Send me a message</h3>
              <p>Fill in the details below and let's talk.</p>
            </div>

            <form
              className="contact__form"
              onSubmit={handleSubmit}
            >
              <div className="contact__field-row">
                <div className="contact__field">
                  <label htmlFor="contact-name">Your name</label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-email">Your email</label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-subject">Subject</label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What's on your mind?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">Message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little about your idea..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact__submit"
              >
                <span>Send Message</span>
                <FaPaperPlane aria-hidden="true" />
              </button>

              <p className="contact__form-note">
                Submitting opens your default email application.
                Messages are not sent directly through this website.
              </p>
            </form>
          </div>
        </div>

        <footer className="contact__footer">
          <span>THANK YOU FOR STOPPING BY</span>

          <span className="contact__footer-mark">
            JC <span>© {new Date().getFullYear()}</span>
          </span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;