import React from "react";

function App() {
  const alpha = 20;
  const beta = 100;
  const gamma = 1000;

  const x = "cs385";
  const y = "App Development";
  return (
    <>
      <h1>CS385 Lab 1 Template</h1>
      <p>
        {" "}
        <b>Sum:</b> {alpha + beta + gamma}
      </p>
      <p>
        {" "}
        <b>Product:</b> {alpha * beta * gamma}
      </p>
      <p>
        {" "}
        <b>Sum * 10:</b> {(alpha + beta + gamma) * 10}
      </p>
      <h2>
        {" "}
        {x} {y}
      </h2>
      <p> {x.toUpperCase()} </p>
      <p> {y.toLowerCase()} </p>
    </>
  );
}

export default App;
