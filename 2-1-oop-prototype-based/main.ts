import { LocalTime } from "./LocalTime.ts";

const localTime = new LocalTime(10, 0, 1);
const localTime2 = new LocalTime(10, 0, 0);

console.log(localTime.hour, localTime.minutes, localTime.seconds);
console.log(localTime.toString());
console.log(localTime.isAfter(localTime2));

const invalidLocalTime: LocalTime = {
  hour: 25,
  minutes: 0,
  seconds: 0,
  isAfter(another: LocalTime): boolean {
    return true;
  },
  toSeconds(): number {
    return 0;
  },
  toString(): string {
    return "";
  },
};
