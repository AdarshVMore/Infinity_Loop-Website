import React, { useState, useEffect } from "react";
import "./commingsoon.css";

function CommingSoonDex() {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const calculateTimeLeft = () => {
    const difference = new Date("2023-08-28") - new Date();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimer({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    calculateTimeLeft();
    const timerInterval = setInterval(calculateTimeLeft, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return (
    <div className="CSoon days-one">
      <h2>Comming Soon...</h2>
      <div className="">
        {timer.days} days : {timer.hours} hour : {timer.minutes} min :{" "}
        {timer.seconds} sec
      </div>
    </div>
  );
}

export default CommingSoonDex;
