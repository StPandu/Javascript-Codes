import React, { useState } from "react";
import { flightData } from "./airlines.js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function onSearchFormChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <h1>Parent Component: Search</h1>
      <form>
        <h2>Type here</h2>
        <input onChange={onSearchFormChange} type="text" />
      </form>
      <hr />
      <ResultsComponent
        searchTermFromParent={searchTerm}
        airlinesFromParent={flightData}
      />
    </>
  );
}

function ResultsComponent(props) {
  const term = props.searchTermFromParent.toLowerCase();

  function airlinesFilterFunction(airlinesObject) {
    const flight = airlinesObject.flight.toLowerCase();
    const dept = airlinesObject.dept.toLowerCase();
    const dest = airlinesObject.dest.toLowerCase();

    return (
      term !== "" &&
      (flight.includes(term) || dept.includes(term) || dest.includes(term))
    );
  }

  const results = props.airlinesFromParent.filter(airlinesFilterFunction);

  return (
    <>
 <table border="1">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Departure</th>
            <th>Destination</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((s, index) => (
            <tr key={index}>
              <td><b>{s.flight}</b></td>
              <td><i>{s.dept}</i></td>
              <td>{s.dest}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;