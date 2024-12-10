import React from "react";
import "./Week.css";

const Week = ({
  forcast,
  forcast1,
  forcast2,
  forcast3,
  forcast4,
  forcast5,
  forcast6,
}) => {
  return (
    <div className="week-cont">
      <div className="seven">
        <div>
          <h5>Mon</h5>
          <img src={`${forcast.condition.icon}`} alt="" />
          <h4>{forcast.avgtemp_c}°C</h4>
          <p>
            {forcast.maxtemp_c}/{forcast.mintemp_c}
          </p>
        </div>
        <div>
          <h5>Tue</h5>
          <img src={`${forcast1.condition.icon}`} alt="" />
          <h4>{forcast1.avgtemp_c}°C</h4>
          <p>
            {forcast1.maxtemp_c}/{forcast1.mintemp_c}
          </p>
        </div>
        <div>
          <h5>Wed</h5>
          <img src={`${forcast2.condition.icon}`} alt="" />
          <h4>{forcast2.avgtemp_c}°C</h4>
          <p>
            {forcast2.maxtemp_c}/{forcast2.mintemp_c}
          </p>
        </div>
        <div>
          <h5>Thurs</h5>
          <img src={`${forcast3.condition.icon}`} alt="" />
          <h4>{forcast3.avgtemp_c}°C</h4>
          <p>
            {forcast3.maxtemp_c}/{forcast3.mintemp_c}
          </p>
        </div>
        <div>
          <h5>Fri</h5>
          <img src={`${forcast4.condition.icon}`} alt="" />
          <h4>{forcast4.avgtemp_c}°C</h4>
          <p>
            {forcast4.maxtemp_c}/{forcast4.mintemp_c}
          </p>
        </div>
        <div>
          <h5>Sat</h5>
          <img src={`${forcast5.condition.icon}`} alt="" />
          <h4>{forcast5.avgtemp_c}°C</h4>
          <p>
            {forcast5.maxtemp_c}/{forcast5.mintemp_c}
          </p>
        </div>
        <div>
          <h5>Sun</h5>
          <img src={`${forcast6.condition.icon}`} alt="" />
          <h4>{forcast6.avgtemp_c}°C</h4>
          <p>
            {forcast6.maxtemp_c}/{forcast6.mintemp_c}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Week;
