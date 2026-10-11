import { skills } from "./skills";
import { projects } from "./projects";
import { experience } from "./experience";
import { formatDuration, getTotalDurationMonths } from "../utils/dateUtils";

export function getPortfolioStats() {
  const experienceMonths = getTotalDurationMonths(experience);

  return {
    experienceMonths,
    experienceDuration: formatDuration(experienceMonths),
    projectCount: projects.length,
    skillCount: skills.length,
    experienceCount: experience.length,
  };
}
