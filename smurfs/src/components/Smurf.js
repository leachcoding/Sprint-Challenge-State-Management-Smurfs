import React from 'react';

// props are passed from Village.js
const Smurf = ({smurf}) => {
  return (
    <div>
      <p> Name: {smurf.name}</p>
      <p> Age: {smurf.age}</p>
      <p> Height: {smurf.height}</p>
    </div>
  )
};

export default Smurf;
