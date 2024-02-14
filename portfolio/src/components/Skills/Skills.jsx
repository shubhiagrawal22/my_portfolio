import React, { useState } from 'react';
import './skills.css';
import { SKILLS } from '../../utils/data';
import Card from './Card/Card';
import CardInfo from './CardInfo/CardInfo';

const Skills = () => {

    const[selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

  return (
    <section className='skills-container' id='skills'>
        <h5> Technical Proficiency </h5>
        <div className='skills-content'>
            <div className='skills'>
                {SKILLS.map((item) => (
                    <Card 
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={() => {
                            handleSelectSkill(item);
                        }}
                    />
                ))}
            </div>
            <div className='skills-info'>
                <CardInfo
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills