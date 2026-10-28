import React, { useState } from "react";
// IMPORTANT - we need to import useState if we want
// to use it in our application.

function App() {
  // Two state variables, each with a setter function, both starting at 0
  const [alpha, setAlpha] = useState(19);
  const [gamma, setGamma] = useState(27);

  return (
    <>
      <h1>Hi, this is the parent component</h1>

      <hr />
      <Robert alpha={alpha} />
      <hr />
      <Jennifer gamma={gamma} />
    </>
  );
}

// This is the Child component called Robert
function Robert(props) {
  return (
    <>
      <h1>Hi, this is Robert (a child component)</h1>
      <h2>The value of alpha is: {props.alpha}</h2>
    </>
  );
}

// This is the Child component called Jennifer
function Jennifer(props) {
  return (
    <>
      <h1>Hi, this is Jennifer (a child component)</h1>
      <h2>The value of gamma is: {props.gamma}</h2>
    </>
  );
}

export default App;
