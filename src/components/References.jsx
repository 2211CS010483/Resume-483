import React from 'react';

const References = (props) => {
  return (
    <div>
      <h2>References</h2>
      <ul>
        {props.references.map((reference, index) => (
          <li key={index}><a href={reference.url} target="_blank" rel="noopener noreferrer">{reference.name}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default References;
