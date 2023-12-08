const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 23, 59, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

const msg = document.querySelector(".msg");
msg.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${
  getTwelveHourFormat(hours).hours
}:${minutes} ${getTwelveHourFormat(hours).format}`;

function getTwelveHourFormat(hours) {
  if (hours >= 0 && hours <= 12) {
    return { hours: hours, format: "AM" };
  } else if (hours >= 13 && hours <= 23) {
    return { hours: hours % 12, format: "PM" };
  } else {
    throw new Error("Invalid hours");
  }
}

function getRemainingTime(futureDate) {
  const presentTime = new Date().getTime();
  const diffMs = futureDate.getTime() - presentTime;

  if (diffMs < 0) {
    console.log("Expired!!!");
    clearInterval(countdown);
    timer.style.display = "none";
    description.style.display = "none";
    msg.textContent = `sorry, this giveaway has expired!`;
    msg.classList.add("expired");
  }
  //   milliseconds in one day, one hour and one minute
  const oneMinuteMs = 60 * 1000;
  const oneHourMs = 60 * oneMinuteMs;
  const oneDayMs = 24 * oneHourMs;

  let days = Math.floor(diffMs / oneDayMs);
  let hours = Math.floor((diffMs % oneDayMs) / oneHourMs);
  let minutes = Math.floor((diffMs % oneHourMs) / oneMinuteMs);
  let seconds = Math.floor((diffMs % oneMinuteMs) / 1000);
  return [days, hours, minutes, seconds];
}

function getFormattedItem(item) {
  if (item < 10) {
    return `0${item}`;
  }
  return item;
}

const timerBlocks = document.querySelectorAll("#quantity");

const description = document.querySelector("#description");

const timer = document.querySelector(".timer");

function setRemainingTime() {
  const values = getRemainingTime(futureDate);
  let i = 0;
  timerBlocks.forEach(function (timerBlock) {
    timerBlock.textContent = getFormattedItem(values[i]);
    i++;
  });
}

let countdown = setInterval(setRemainingTime, 1000);

setRemainingTime();
