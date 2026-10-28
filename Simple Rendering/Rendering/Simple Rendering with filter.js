import React from "react";
import { companies } from "./companies";

function companyEmployeesFilter(filterEmployee) {
  return function (companyObject) {
    return companyObject.employees >= filterEmployee;
  };
}

function companyName(searchStr) {
  return function (companyObject) {
    let searchStrLower = searchStr.toLowerCase();
    let targetName = companyObject.company.toLowerCase();

    return targetName.includes(searchStrLower);
  };
}

function App() {
  return (
    <>
      <h1>CS385 Lab 1 Template</h1>
      <h2>Task Part A</h2>
      {companies.map((c, index) => (
        <p key={index}>
          Company: <b>{c.company}</b>, Id: <b>{c.cid}</b>, Employees:{" "}
          <b>{c.employees}</b>, Material: <b>{c.material}</b>
        </p>
      ))}
      <h2>Task Part B</h2>
      {companies.filter(companyEmployeesFilter(400)).map((c, index) => (
        <p key={index}>
          Company: <b>{c.company}</b>, Id: <b>{c.cid}</b>, Employees:{" "}
          <b>{c.employees}</b>, Material: <b>{c.material}</b>
        </p>
      ))}
      <h2>Task Part C</h2>
      {companies.filter(companyName("llc")).map((c, index) => (
        <p key={index}>
          Company: <b>{c.company}</b>, Id: <b>{c.cid}</b>, Employees:{" "}
          <b>{c.employees}</b>, Material: <b>{c.material}</b>
        </p>
      ))}
    </>
  );
}

export default App;
