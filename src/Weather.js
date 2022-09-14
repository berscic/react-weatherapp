import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Malta",
    date: " Wednesday, 14th September 2022",
    description: "Sunny",
    imgUrl:
      "https://assets.msn.com/weathermapdata/1/static/svg/72/v2/card_fix_partlysunny/SunnyDayV3.svg",
    temperature: 30,
    humidity: 40,
    wind: 4,
  };
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type city"
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul className="current">
          <li>
            {" "}
            <span> Last updated:{weatherData.date}</span>{" "}
          </li>
          <li>{weatherData.description}</li>
          <li></li>
        </ul>
      </div>
      <div className="row align-items-start">
        <div className="col">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              class="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C |</a> <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col extra-details">
          <ul>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span>{weatherData.wind}</span>m/s
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
