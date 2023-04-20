import Wrapper from '../components/Wrapper'
import React from 'react'
import { skillsSection } from '@/utils/portfolio';
import Skill from '../components/Skill';
import { getSectionAnimation } from '../animations';

const Skills = () => {
  const {title, skills} = skillsSection;

  return (
    <div>
    <Wrapper as="section" id="skills" {...getSectionAnimation}>
  <h2 className='text-center heading-secondary'>{title}</h2>
  <div className='space-y-32'>
    {skills.map(({id, lottie, softwareSkills, points, title})=>(
      <Skill
      key={id}
      className="text-white odd:lg:flex-row-reverse"
      lottie={lottie['light']}
      skills={softwareSkills}
      points = {points}
      title={title}
      {...getSectionAnimation}
      ></Skill>
    ))}
  </div>
  </Wrapper>
  </div>
  )
}

export default Skills
