import { LocalTime } from "./LocalTime.ts";

const localTime = new LocalTime(10, 0, 1);
const localTime2 = new LocalTime(10, 0, 0);

console.log(localTime.hour, localTime.minutes, localTime.seconds);
console.log(localTime.isAfter(localTime2));
console.log(localTime.toString());

// // compile time type error
// const invalidLocalTime: LocalTime = {
//   hour: 25,
//   minutes: 0,
//   seconds: 0,
//   isAfter(another: LocalTime): boolean {
//     return true;
//   },
//   toString(): string {
//     return "";
//   }
// };
