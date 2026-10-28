import React, { useEffect, useState } from "react";

function App() {
  // the data response from the API - initially empty array
  const [data, setData] = useState([]);
  // a flag to indicate the data is loading - initially false
  const [loading, setLoading] = useState(false);
  // a flag to indicate an error, if any - initially null.
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/petermooney/cs385/refs/heads/main/trains/trainData100.json";

    async function fetchTrainData() {
      try {
        const response = await fetch(URL);
        const trainDataJson = await response.json(); // wait for the JSON response
        setData(trainDataJson.trainService);
        setLoading(true);
      } catch (error) {
        setError(error); // take the error message from the system
        setLoading(false);
      } // end try-catch block
    }

    fetchTrainData(); // invoke fetchTrainData in useEffect
  }, []); // end of useEffect

  if (error) {
    return <h1>Opps! An error has occurred: {error.toString()}</h1>;
  } else if (loading === false) {
    return <h1>Waiting for the train data ...... waiting....</h1>;
  } else {
    return (
      <>
        <DeutscheBahnComponent APIData={data} />
      </>
    );
  } // end else
} // end App() function or component

function TrainDisplayComponent(props) {
  return (
    <>
      <h1>The CS385 Train Tracker App</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Dept.</th>
            <th>Dest</th>
            <th>Operator</th>
          </tr>
        </thead>
        <tbody>
          {props.APIData.map((t, index) => (
            <tr key={index}>
              <td>
                <b>{t.departure}</b>
              </td>
              <td>
                <b>{t.destination}</b>
              </td>
              <td>
                <b>{t.details.operator}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}


function DeutscheBahnComponent(props) {
  const deutscheBahnTrains = props.APIData.filter(
    (t) => t.details.operator === "Deutsche Bahn"
  );

  return (
    <>
      <h1>Deutsche Bahn Trains only!</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Service No.</th>
            <th>Dept.</th>
            <th>Dest</th>
            <th>Operator</th>
          </tr>
        </thead>
        <tbody>
          {deutscheBahnTrains.map((t, index) => (
            <tr key={index}>
              <td>
                <b>{t.serviceNumber}</b>
              </td>
              <td>
                <b>{t.departure}</b>
              </td>
              <td>
                <b>{t.destination}</b>
              </td>
              <td>
                <i>{t.details.operator}</i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;