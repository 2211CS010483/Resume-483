import React from 'react';

const Skills = (props) => {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
