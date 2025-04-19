import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Weather() {
  //states
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  //stores the input value
  function ChangeInput(event) {
    setInput(event.target.value.trim());
  }
  //this is to fetch data from api
  function FetchData(input) {
    setLoading(true);
    console.log("in")
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=00cba0a04d907891f28cf3fb53aaac90`
      )
      .then((response) => {
        setData(response.data.list, console.log(response.data.list));
        setStatus(null);
      })
      .catch((error) => {
        setStatus(error.response.data.message, console.error(error));
      });
      console.log("out")
    setLoading(false);
  }
  //prevents from refreshing
  function DefaultFunct(event) {
    event.preventDefault();
  }
  // This is to keep chennai as the default city value. if input is there => take input value
  useEffect(() => {
    input ? FetchData(input) : FetchData("chennai");
  }, []);
  //rendering jsx code
  return (
    <div className="App" /*style={data.main?.temp > 300 ? warm : cold}*/>
      <div>
        <h3 id="header">Know your Weather</h3>
        <form
          className="form1"
          onSubmit={(event) => {
            DefaultFunct(event);
            FetchData(input);
          }}
        >
          <label>Enter City Name: </label>
          <input
            type="text"
            id="city"
            onChange={ChangeInput}
            value={input}
            placeholder="Chennai"
          />
          <button id="search-btn" type="submit">
            Search
          </button>
          <Link to="/">
            <button type="submit" id="back-btn">
              Back
            </button>
          </Link>
        </form>
      </div>

      {status ? (
        <div>
          <p className="error-display">{status}</p>
        </div>
      ) : (
        <React.Fragment>
          <h4 id="card-header">Weather Details of the given city </h4>
          <div className="card">
            {data &&
              data.map((weather) => {
                return (
                  <div key={weather.dt} className="card-content">
                    <div id="details">
                      <p id="para-header">Date and Time : {weather.dt_txt}</p>
                      <p>Temperature : {weather.main?.temp}</p>
                      <p>Pressure : {weather.main?.pressure}</p>
                      <p>Feels like : {weather.main?.feels_like}</p>
                      <p>Visibility: {weather.visibility}</p>
                    </div>
                    <div id="icon">
                      <img
                        src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
                        alt="image loading..."
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
