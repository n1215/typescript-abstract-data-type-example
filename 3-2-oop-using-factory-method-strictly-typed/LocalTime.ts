// oop style / factory method by companion object
import { Hour, Minutes, Seconds } from "../types/strict-types.ts";

export type LocalTime = {
  readonly hour: Hour;
  readonly minutes: Minutes;
  readonly seconds: Seconds;
  isAfter(other: LocalTime): boolean;
  toString(): string;
};

export const LocalTime = {
  of(hour: Hour, minutes: Minutes, seconds: Seconds): LocalTime {
    const toSeconds = (localTime: LocalTime): number => {
      return localTime.hour * 3600 + localTime.minutes * 60 + localTime.seconds;
    };

    const self: LocalTime = {
      hour,
      minutes,
      seconds,
      isAfter(another: LocalTime) {
        return toSeconds(self) > toSeconds(another);
      },
      toString() {
        const pad = (num: number) => String(num).padStart(2, "0");
        return `${pad(self.hour)}:${pad(self.minutes)}:${pad(self.seconds)}`;
      },
    };

    return self;
  },
};
