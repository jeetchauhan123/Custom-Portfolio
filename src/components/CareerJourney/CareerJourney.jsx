import React, { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { experience } from "../../data/experience";
import { education } from "../../data/education";
import { certifications } from "../../data/certifications";

import "./CareerJourney.css";

const tabs = [
  { id: "experience", label: "Experience", icon: FaBriefcase },
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "certifications", label: "Certifications", icon: FaCertificate },
];

const formatPeriod = (startDate, endDate) => {
  if (!startDate && !endDate) return "";
  if (!startDate) return endDate;
  if (!endDate) return `${startDate} – Present`;

  return `${startDate} – ${endDate}`;
};

const CareerJourney = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const items = {
    experience: experience.map((item) => ({
      id: item.id,
      title: item.position,
      organization: item.company,
      location: item.location,
      period: formatPeriod(item.startDate, item.endDate),
      type: item.type === "internship" ? "Internship" : "Professional Experience",
      points: item.description,
      icon: FaBriefcase,
    })),

    education: education.map((item) => ({
      id: item.id,
      title: item.degree,
      organization: item.institution,
      location: item.location,
      period: formatPeriod(item.startDate, item.endDate),
      type: "Education",
      icon: FaGraduationCap,
    })),

    certifications: certifications.map((item) => ({
      id: item.id,
      title: item.title,
      organization: item.issuer,
      period: item.date || "",
      type: "Certification",
      link: item.credentialUrl,
      icon: FaCertificate,
    })),
  };

  const activeItems = items[activeTab];

  return (
    <section className="career-journey" id="career-journey">
      <div className="career-journey__container">
        <header className="career-journey__header">
          <span className="career-journey__eyebrow">
            MY BACKGROUND
          </span>

          <h2 className="career-journey__title">
            My <span>Journey</span>
          </h2>

          <p className="career-journey__intro">
            My experience, education, and achievements that have
            shaped my journey as a developer.
          </p>
        </header>

        <nav
          className="career-journey__tabs"
          role="tablist"
          aria-label="Career journey categories"
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`career-tab-${id}`}
              aria-selected={activeTab === id}
              aria-controls="career-panel"
              className={`career-journey__tab ${
                activeTab === id ? "career-journey__tab--active" : ""
              }`}
              onClick={() => setActiveTab(id)}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div
          className="career-journey__timeline"
          id="career-panel"
          role="tabpanel"
          aria-labelledby={`career-tab-${activeTab}`}
        >
          {activeItems.length > 0 ? (
            activeItems.map((item, index) => {
              const ItemIcon = item.icon;

              return (
                <article
                  className="career-journey__item"
                  key={item.id}
                  style={{ "--item-index": index }}
                >
                  <div className="career-journey__marker-column">
                    <span className="career-journey__marker">
                      <ItemIcon aria-hidden="true" />
                    </span>
                  </div>

                  <div className="career-journey__content">
                    <div className="career-journey__meta">
                      <span className="career-journey__type">
                        {item.type}
                      </span>

                      {item.period && (
                        <span className="career-journey__period">
                          {item.period}
                        </span>
                      )}
                    </div>

                    <h3 className="career-journey__role">
                      {item.title}
                    </h3>

                    <p className="career-journey__organization">
                      {item.organization}
                    </p>

                    {item.location && (
                      <p className="career-journey__location">
                        <FaMapMarkerAlt aria-hidden="true" />
                        {item.location}
                      </p>
                    )}

                    {item.points?.length > 0 && (
                      <ul className="career-journey__points">
                        {item.points.map((point, pointIndex) => (
                          <li key={`${item.id}-${pointIndex}`}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.link && (
                      <a
                        className="career-journey__link"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Credential
                        <FaExternalLinkAlt aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })
          ) : (
            <p className="career-journey__empty">
              No records available in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;