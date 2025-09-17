// fp style + branded type
import { Brand } from "../types/Brand.ts";

export type LocalTime = {
  readonly hour: number;
  readonly minutes: number;
  readonly seconds: number;
} & Brand<"LocalTime">;

export function createLocalTime(
  hour: number,
  minutes: number,
  seconds: number,
): LocalTime {
  if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
    throw new Error("hour must be an integer between 0 and 23");
  }

  if (minutes < 0 || minutes > 59 || !Number.isInteger(minutes)) {
    throw new Error("minutes must be an integer between 0 and 59");
  }

  if (seconds < 0 || seconds > 59 || !Number.isInteger(seconds)) {
    throw new Error("seconds must be an integer between 0 and 59");
  }

  return {
    hour,
    minutes,
    seconds,
  } as LocalTime;
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
