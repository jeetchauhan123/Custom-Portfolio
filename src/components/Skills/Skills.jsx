import { useMemo, useState } from "react";
import * as SimpleIcons from "@icons-pack/react-simple-icons";
import { FaCode, FaGithub } from "react-icons/fa";
import { skillCategories, skills } from "../../data/skills";
import "./Skills.css";

const branding = {
  "JavaScript (ES6+)": { icon: "SiJavascript", color: "#F7DF1E" },
  "C#": { icon: "SiCsharp", color: "#9B4F96" },
  HTML5: { icon: "SiHtml5", color: "#E34F26" },
  CSS3: { icon: "SiCss3", color: "#1572B6" },
  "React.js": { icon: "SiReact", color: "#61DAFB" },
  "Redux Toolkit": { icon: "SiRedux", color: "#764ABC" },
  "React Router": { icon: "SiReactrouter", color: "#F44250" },
  "Tailwind CSS": { icon: "SiTailwindcss", color: "#38BDF8" },
  GSAP: { icon: "SiGreensock", color: "#88CE02" },
  Axios: { icon: "SiAxios", color: "#854BDB" },
  "Node.js": { icon: "SiNodedotjs", color: "#83CD29" },
  "Express.js": { icon: "SiExpress", color: "#E5E7EB" },
  "ASP.NET": { icon: "SiDotnet", color: "#512BD4" },
  "REST APIs": { icon: null, color: "#5DD6C0" },
  GraphQL: { icon: "SiGraphql", color: "#E535AB" },
  SignalR: { icon: null, color: "#A78BFA" },
  MongoDB: { icon: "SiMongodb", color: "#47A248" },
  PostgreSQL: { icon: "SiPostgresql", color: "#699ECA" },
  Git: { icon: "SiGit", color: "#F05032" },
  GitHub: { icon: null, color: "#E6E6E6" },
  "VS Code": { icon: "SiVisualstudiocode", color: "#007ACC" },
  Vercel: { icon: "SiVercel", color: "#EDEDED" },
  Render: { icon: "SiRender", color: "#A6A6F5" },
  Postman: { icon: "SiPostman", color: "#FF6C37" },
};

const descriptions = {
  all: "The technologies and tools behind my development workflow.",
  languages: "The languages I use to shape interfaces and application logic.",
  frontend: "Tools for responsive interfaces and interactive experiences.",
  backend: "Server-side development, application logic, and APIs.",
  database: "Technologies for storing and working with application data.",
  "cloud-tools":
    "Tools for version control, testing, development, and deployment.",
};

function getSkillIcon(skillName) {
  const iconName = branding[skillName]?.icon;

  if (iconName && SimpleIcons[iconName]) {
    return SimpleIcons[iconName];
  }

  return skillName === "GitHub" ? FaGithub : FaCode;
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const counts = useMemo(
    () =>
      Object.fromEntries(
        skillCategories.map((category) => [
          category.id,
          category.id === "all"
            ? skills.length
            : skills.filter((skill) => skill.category === category.id).length,
        ]),
      ),
    [],
  );

  const filteredSkills = useMemo(
    () =>
      activeCategory === "all"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory),
    [activeCategory],
  );

  const activeCategoryInfo = skillCategories.find(
    (category) => category.id === activeCategory,
  );

  return (
    <section className="skills-section section" id="skills">
      <div className="skills-container container">
        <header className="skills-heading">
          <div>
            <span className="skills-eyebrow">
              <span className="skills-live-dot" />
              CAPABILITIES <span>/</span> TECHNICAL TOOLKIT
            </span>

            <h2 className="skills-title">
              What I build
              <br />
              <span>with.</span>
            </h2>
          </div>

          <div className="skills-heading-note">
            <span className="skills-note-code">JC / DEV-STACK</span>
            <p>
              Technologies I use to develop interfaces, application logic, and
              connected experiences.
            </p>
            <span className="skills-heading-total">
              {String(skills.length).padStart(2, "0")} TECHNOLOGIES
            </span>
          </div>
        </header>

        <div className="skills-blueprint">
          <div className="skills-blueprint-top">
            <span>TECHNOLOGY OVERVIEW</span>
            <span className="skills-blueprint-status">
              <span />
              {String(filteredSkills.length).padStart(2, "0")} SHOWN
            </span>
          </div>

          <div className="skills-workspace">
            <aside className="skills-sidebar">
              <div className="skills-sidebar-heading">
                <span>EXPLORE</span>
                <span className="skills-sidebar-rule" />
              </div>

              <nav
                className="skills-category-list"
                aria-label="Skill categories"
              >
                {skillCategories.map((category, index) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`skills-category ${
                      activeCategory === category.id ? "is-active" : ""
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                    aria-pressed={activeCategory === category.id}
                  >
                    <span className="skills-category-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="skills-category-name">
                      {category.name}
                    </span>
                    <span className="skills-category-count">
                      {String(counts[category.id]).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </nav>

              <div className="skills-sidebar-note">
                <span className="skills-sidebar-note-mark">✳</span>
                <p>Different tools. One goal: useful digital experiences.</p>
              </div>
            </aside>

            <div className="skills-main">
              <div className="skills-selection">
                <div>
                  <span className="skills-selection-label">
                    CURRENT CATEGORY
                  </span>
                  <h3>{activeCategoryInfo?.name ?? "All"}</h3>
                </div>
                <p>{descriptions[activeCategory] ?? descriptions.all}</p>
              </div>

              <div className="skills-grid" key={activeCategory}>
                {filteredSkills.map((skill, index) => {
                  const skillBrand = branding[skill.name] ?? {
                    color: "#B5F36D",
                  };
                  const SkillIcon = getSkillIcon(skill.name);
                  const categoryName =
                    skillCategories.find(
                      (category) => category.id === skill.category,
                    )?.name ?? skill.category;

                  return (
                    <article
                      className="skill-card"
                      key={skill.name}
                      style={{
                        "--brand-color": skillBrand.color,
                        "--card-index": index,
                      }}
                    >
                      <span className="skill-card-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="skill-card-icon">
                        <SkillIcon aria-hidden="true" />
                      </div>

                      <div className="skill-card-details">
                        <h4>{skill.name}</h4>
                        <span>{categoryName}</span>
                      </div>

                      <span className="skill-card-status" />
                    </article>
                  );
                })}
              </div>

              <div className="skills-grid-footer">
                <span>SELECTED TOOLSET</span>
                <span>
                  {String(filteredSkills.length).padStart(2, "0")} TECHNOLOGIES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
