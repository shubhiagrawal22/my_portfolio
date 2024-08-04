import React from 'react'
import './projectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ details }) => {
  return (
    <div className='work-exp-card'>
        <h6>
            {details.title}
        </h6>
        <div className="work-duration">
            <Link to={details.link} target='__blank'>{details.link}</Link>
        </div>
        <ul>
            {details.description.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProjectCard