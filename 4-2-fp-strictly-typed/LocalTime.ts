// fp style + strictly typed
import { Hour, Minutes, Seconds } from "../types/strict-types.ts";

export type LocalTime = {
  readonly hour: Hour;
  readonly minutes: Minutes;
  readonly seconds: Seconds;
};

export function createLocalTime(
  hour: Hour,
  minutes: Minutes,
  seconds: Seconds,
): LocalTime {
  return {
    hour,
    minutes,
    seconds,
  };
}

function toSeconds(time: LocalTime): number {
  return time.hour * 3600 + time.minutes * 60 + time.seconds;
}

export function isAfter(one: LocalTime, another: LocalTime): boolean {
  return toSeconds(one) > toSeconds(another);
}

export function localTimeToString(time: LocalTime): string {
  const pad = (num: number) => String(num).padStart(2, "0");
  return `${pad(time.hour)}:${pad(time.minutes)}:${pad(time.seconds)}`;
}
