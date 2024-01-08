// Skills.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faNode, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import skillsData from './skill';
import './skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      {skillsData.map((category, index) => (
        <div key={index} className="category-container">
          <h3>{category.category}</h3>
          <div className="skills-list">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                {category.category === 'Web Development' && skill === 'Node.js' && (
                  <FontAwesomeIcon icon={faNode} className="icon" />
                )}
                {category.category === 'Web Development' && skill === 'Express.js' && (
                  <FontAwesomeIcon icon={faJs} className="icon" />
                )}
                {category.category === 'Web Development' && skill === 'MongoDB' && (
                  <FontAwesomeIcon icon={faDatabase} className="icon" />
                )}
                {category.category === 'Web Development' && skill === 'React.js' && (
                  <FontAwesomeIcon icon={faReact} className="icon" />
                )}
                {category.category !== 'Web Development' && (
                  <FontAwesomeIcon icon={faCode} className="icon" />
                )}
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;