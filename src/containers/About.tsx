import React from 'react';
import Wrapper from '../components/Wrapper';
import { aboutSection, author } from '@/utils/portfolio';
import { getSectionAnimation } from '../animations';
import { getId } from '../utils/helper';
import ListItem from '../components/ListItem';
import ProfileImage from '@/components/ProfileImage';

const About = () => {
  const {title, img, list} = aboutSection;
  return (
    <div >
      <Wrapper
      id="about" {...getSectionAnimation}>
        <h2 className='heading-secondary'>{title}</h2>
        <main className='flex flex-col items-center gap-16 text-xl text-white lg:items-start lg:flex-row'>
          <div className='space-y-4 lg:w-3/5'>
            <p>
              Hi, This is Keerthi Appasani, crazy front end developer who want to explore every stack.
            </p>
            <p>
              Fast-forward to today, I've had the privilege of working at Infosys and Accenture.
            </p>
            <p>
              My main focus these days is finding a decent job in front end.
            </p>
            {list && (
              <>
              <p>{list.title}</p>
              <ul className = "grid grid-cols-2 ">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}

              </ul>
              </>
            )}
          </div>
          <ProfileImage src={img} alt={author.firstName}/>
        </main>
    </Wrapper>
    </div>
  )
}

export default About
