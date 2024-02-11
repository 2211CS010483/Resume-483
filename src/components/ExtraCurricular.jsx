import React from 'react';

const ExtraCurricular = (props) => {
  return (
    <div>
      <h2>Extra-curricular Activities</h2>
      <ul>
        {props.activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraCurricular;
