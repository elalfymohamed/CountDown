import { useState, useEffect } from "react";
const Time = () => {
  // eslint-disable-next-line no-unused-vars
  const [countdownDate, setCountdownDate] = useState(new Date("4/30/2021"));

  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  });

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));

      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };
  return (
    <div className="section-hero_time">
      <ul>
        <li>
          {state.days || "0"}
          <span className="time_title"> Days</span>
        </li>
        <li>
          {state.hours || "0"}
          <span className="time_title"> Hours</span>
        </li>
        <li>
          {state.minutes || "0"}
          <span className="time_title"> Minutes</span>
        </li>
        <li>
          {state.seconds || "0"}
          <span className="time_title"> Seconds</span>
        </li>
      </ul>
    </div>
  );
};

export default Time;
