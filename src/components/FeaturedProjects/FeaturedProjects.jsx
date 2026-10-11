import React from "react";
import {
  FaArrowUpRightFromSquare,
  FaCode,
  FaGithub,
  FaFolderOpen,
} from "react-icons/fa6";
import { projects } from "../../data/projects";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  const featuredProjects = projects.some((project) => project.featured)
    ? projects.filter((project) => project.featured).slice(0, 3)
    : projects.slice(0, 3);

  return (
    <section className="featured-projects" id="featured-work">
      <div className="featured-projects__container">
        <div className="featured-projects__heading">
          <div>
            <span className="featured-projects__eyebrow">
              <span className="featured-projects__eyebrow-dot" />
              HANDPICKED HIGHLIGHTS
            </span>

            <h2 className="featured-projects__title">
              A few projects <span>worth a look.</span>
            </h2>

            <p className="featured-projects__description">
              Selected work showcasing full-stack development, creative
              interfaces, and practical problem-solving.
            </p>
          </div>

          <a className="featured-projects__all-link" href="/projects">
            View all projects <span>↗</span>
          </a>
        </div>

        <div className="featured-projects__grid">
          {featuredProjects.map((project, index) => {
            const title = project.title || project.name || "Untitled project";

            const description =
              project.description ||
              "More details about this project will be available soon.";

            const technologies =
              project.technologies || project.techStack || project.stack || [];

            const github = project.github || project.githubUrl;
            const live = project.live || project.liveUrl || project.demoUrl;

            const image =
              project.image || project.imageUrl || project.thumbnail;

            return (
              <article
                className={`featured-project-card featured-project-card--${
                  index + 1
                }`}
                key={project.id ?? title}
              >
                <div className="featured-project-card__preview">
                  {image ? (
                    <img
                      src={image}
                      alt={`${title} project preview`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="featured-project-card__placeholder">
                      <span className="featured-project-card__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <FaFolderOpen className="featured-project-card__folder" />

                      <span className="featured-project-card__preview-label">
                        FEATURED PROJECT / {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}

                  <span className="featured-project-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="featured-project-card__body">
                  <div className="featured-project-card__topline">
                    <span>
                      FEATURED PROJECT {String(index + 1).padStart(2, "0")}
                    </span>
                    <FaCode />
                  </div>

                  <h3>{title}</h3>

                  <p className="featured-project-card__description">
                    {description}
                  </p>

                  {technologies.length > 0 && (
                    <div className="featured-project-card__technologies">
                      {technologies.slice(0, 5).map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  )}

                  {(github || live) && (
                    <div className="featured-project-card__links">
                      {github && (
                        <a
                          className="featured-project-card__button featured-project-card__button--secondary"
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${title} source code on GitHub`}
                        >
                          <FaGithub />
                          Source Code
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}

                      {live && (
                        <a
                          className="featured-project-card__button featured-project-card__button--primary"
                          href={live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${title} live website`}
                        >
                          Live Website
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="featured-projects__footer">
          <span>A SELECTION OF MY WORK</span>

          <a href="/projects" className="featured-projects__footer-link">
            Discover more projects <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
