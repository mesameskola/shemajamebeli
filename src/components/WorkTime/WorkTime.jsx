import React from "react";
import "./WorkTime.css";

const times = [
  {
    day: "Monday:",
    time: " 5pm – 8pm",
  },
  {
    day: "Tuesday:",
    time: " 5pm – 8pm",
  },
  {
    day: "Wednesday:",
    time: " 5pm – 8pm",
  },
  {
    day: "Thursday:",
    time: " 5pm – 10pm",
  },
  {
    day: "Friday:",
    time: " 5pm – Late",
  },
  {
    day: "Saturday:",
    time: " 5pm – Late",
  },
  {
    day: "Sunday:",
    time: "Closed",
  },
];

const WorkTime = () => {
  return (
    <div className="workTimeBox">
      <p className="workTimeText">
        24 Darling St <br /> Balmain
      </p>
      <nav>
        <ul>
          {times.map((time, index) => (
            <li key={index} className="worTimeList">
              {time.day} {time.time}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default WorkTime;
