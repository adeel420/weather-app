import React, { useState } from "react";
import Header from "../components/Header";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import Week from "../components/Week";

const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [forcast, setForcast] = useState("");
  const [forcast1, setForcast1] = useState("");
  const [forcast2, setForcast2] = useState("");
  const [forcast3, setForcast3] = useState("");
  const [forcast4, setForcast4] = useState("");
  const [forcast5, setForcast5] = useState("");
  const [forcast6, setForcast6] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    setInput(input);
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=51ed285957794244b74181147240912&q=${input}&aqi=no&days=7`
    );
    const result = await response.json();
    console.log(result);
    setData(result.location);
    setIcon(result.current.condition);
    setTemp(result.current);
    setForcast(result.forecast.forecastday[0].day);
    setForcast1(result.forecast.forecastday[1].day);
    setForcast2(result.forecast.forecastday[2].day);
    setForcast3(result.forecast.forecastday[3].day);
    setForcast4(result.forecast.forecastday[4].day);
    setForcast5(result.forecast.forecastday[5].day);
    setForcast6(result.forecast.forecastday[6].day);
  };
  return (
    <div>
      <Header handleClick={handleClick} setInput={setInput} input={input} />
      <div className="cont">
        <div className="text">
          <img className="main-img" src={icon.icon} alt="" />
          <div className="center">
            <h4>
              <SlCalender />{" "}
              {temp.last_updated ? temp.last_updated : "12 / 11 / 2024"}
            </h4>
            <h1>{temp.temp_c ? temp.temp_c : "12"}°C</h1>
            <h5>
              <span>
                {data.name ? data.name : "lahore"} <br /> {data.country}
              </span>
              <span>
                <FaLocationDot />
              </span>
            </h5>
          </div>
          <h5 className="short" style={{ textAlign: "center" }}>
            {icon.text ? icon.text : "sunny"}
          </h5>
        </div>
      </div>
      <Week
        forcast={forcast}
        forcast1={forcast1}
        forcast2={forcast2}
        forcast3={forcast3}
        forcast4={forcast4}
        forcast5={forcast5}
        forcast6={forcast6}
      />
    </div>
  );
};

export default Home;
