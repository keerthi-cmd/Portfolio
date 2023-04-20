import React from "react";
import { motion } from "framer-motion";
import { getSectionAnimation } from "../animations";
import { experienceSection } from '../utils/portfolio';
import Tablist from "../components/Tablist";
const Experience = () => {
  return (
    <div>
      <motion.section
        id="experience"
        className="max-w-2xl py-32 mx-auto"
        {...getSectionAnimation}
      >
       <h2 className="heading-secondary">{experienceSection.title}</h2>
      <Tablist experiences={experienceSection.experiences} />
      </motion.section>
    </div>
  );
};

export default Experience;
