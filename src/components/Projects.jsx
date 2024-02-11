import React from 'react';

const Projects = (props) => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {props.projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
