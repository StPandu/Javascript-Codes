import React, { useState } from "react";
// IMPORTANT - we need to import useState if we want
// to use it in our application.

function App() {
  const [alpha, setAlpha] = useState(0);
  const [gamma, setGamma] = useState(0);

  function changeAlpha(i) {
    setAlpha(alpha + i);
  }

  function changeGamma(i) {
    setGamma(gamma + i);
  }

  return (
    <>
      <h1>Hi, this is the parent component</h1>

      <hr />
      <Robert alpha={alpha} changeAlpha={changeAlpha} />
      <hr />
      <Jennifer gamma={gamma} changeGamma={changeGamma} />
    </>
  );
}

// This is the Child component called Robert
function Robert(props) {
  return (
    <>
      <h1>Hi, this is Robert (a child component)</h1>
      <h2>The value of alpha is: {props.alpha}</h2>
      <button onClick={() => props.changeAlpha(5)}>Button</button>
    </>
  );
}

// This is the Child component called Jennifer
function Jennifer(props) {
  return (
    <>
      <h1>Hi, this is Jennifer (a child component)</h1>
      <h2>The value of gamma is: {props.gamma}</h2>
      <button onClick={() => props.changeGamma(10)}>Button</button>
    </>
  );
}

export default App;
