import React from "react";

const Greetings = ({ translation }) => { 
  return (
    <div>
      <h1>{translation.greeting}</h1>
      <p>{translation.description}</p>
    </div>
  );
};

export default Greetings;
