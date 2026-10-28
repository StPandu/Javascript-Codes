import React, { useState } from "react";
import { flightData } from "./airlines.js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function onSearchFormChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <h1>Parent Component:</h1>
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
  const numberResults = results.length;

  return (
    <>
      <h1>Child Component: Search Results</h1>
      <h2>There are {numberResults} search results</h2>
      {numberResults === 0 && <p>No flight information available</p>}
      {numberResults === 1 && <p>One flight available</p>}
      {numberResults >= 2 && numberResults <= 20 && <p>Several flights available</p>}
      {numberResults > 20 && <p>A large number of search results – please consider narrowing
your search</p>}

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