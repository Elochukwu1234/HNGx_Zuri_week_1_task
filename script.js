"use strict";
const day = document.querySelector(".day");
const time = document.querySelector(".time");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDayOfTheWeek = () => {
  const currentDayIndex = new Date().getUTCDay();
  const currentDay = weekday[currentDayIndex];
  day.textContent = currentDay;
};
currentDayOfTheWeek();

const currentUTCTime = () => {
//   const hours = new Date().getUTCHours();
//   const minutes = new Date().getUTCMinutes();
//   const seconds = new Date().getUTCSeconds();
//   const milliseconds = new Date().getUTCMilliseconds();
//   const currentTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    const currentTime = new Date().getTime();
  time.textContent = currentTime;
};
currentUTCTime();

setInterval(currentUTCTime, 1000);
