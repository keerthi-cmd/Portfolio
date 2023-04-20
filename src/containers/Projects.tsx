import React, {useState} from "react";
import { motion } from "framer-motion";
import { projectsSection } from "@/utils/portfolio";
import { sortByYear } from "@/utils/helper";
import { PROJECTS_INITIALLY } from "@/utils/config";
import ProjectCard from "@/components/ProjectCard";
import Wrapper from "../components/Wrapper";
import { getSectionAnimation, projectVariants } from "../animations";
const Projects = () => {
 const {projects, title} = projectsSection;

  return (
    <div>
      <Wrapper id="projects">
        <motion.h2 
        {...getSectionAnimation}
        className="heading-secondary text-center !mb-12">
          {title}
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 grid-cols-auto-300 place-items-center">
        {sortByYear(projects).map((project, i) => {
         
         return (
          <ProjectCard
            {...project}
            key={project.id}
            variants={projectVariants}
            custom={i - PROJECTS_INITIALLY}
            viewport={{ once: true }}
          />
        );
      })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Projects;
