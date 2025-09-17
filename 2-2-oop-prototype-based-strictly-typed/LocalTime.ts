// oop style (prototype based) + strictly typed
import { Hour, Minutes, Seconds } from "../types/strict-types.ts";

export type LocalTime = {
  readonly hour: Hour;
  readonly minutes: Minutes;
  readonly seconds: Seconds;
  isAfter(other: LocalTime): boolean;
  toString(): string;
  toSeconds(): number;
};

/**
 * @constructor
 * @returns {LocalTime}
 */
export function LocalTime(hour: Hour, minutes: Minutes, seconds: Seconds) {
  this.hour = hour;
  this.minutes = minutes;
  this.seconds = seconds;
}

LocalTime.prototype.toSeconds = function (): number {
  return this.hour * 3600 + this.minutes * 60 + this.seconds;
};

LocalTime.prototype.isAfter = function (another: LocalTime): boolean {
  return this.toSeconds() > another.toSeconds();
};

LocalTime.prototype.toString = function (): string {
  const pad = (num: number) => String(num).padStart(2, "0");
  return `${pad(this.hour)}:${pad(this.minutes)}:${pad(this.seconds)}`;
};
