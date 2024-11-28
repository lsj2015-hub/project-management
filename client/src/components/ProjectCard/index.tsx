import React from "react";
import { Project } from "@/state/api";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded border p-4 shadow">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>StartDate: {project.startDate}</p>
      <p>EndDate: {project.endDate}</p>
    </div>
  );
};

export default ProjectCard;
