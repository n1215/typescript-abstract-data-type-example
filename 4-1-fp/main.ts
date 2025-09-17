import {
  createLocalTime,
  isAfter,
  LocalTime,
  localTimeToString,
} from "./LocalTime.ts";

const localTime = createLocalTime(10, 0, 1);
const localTime2 = createLocalTime(10, 0, 0);

console.log(localTime.hour, localTime.minutes, localTime.seconds);
console.log(localTimeToString(localTime));
console.log(isAfter(localTime, localTime2));

// no type error
const invalidLocalTime: LocalTime = {
  hour: 25,
  minutes: 0,
  seconds: 0,
};
