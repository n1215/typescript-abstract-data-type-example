// oop style (prototype based) / constructor function
export type LocalTime = {
  readonly hour: number;
  readonly minutes: number;
  readonly seconds: number;
  isAfter(other: LocalTime): boolean;
  toString(): string;
  toSeconds(): number;
};

/**
 * @constructor
 * @returns {LocalTime}
 */
export function LocalTime(hour: number, minutes: number, seconds: number) {
  if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
    throw new Error("hour must be an integer between 0 and 23");
  }

  if (minutes < 0 || minutes > 59 || !Number.isInteger(minutes)) {
    throw new Error("minutes must be an integer between 0 and 59");
  }

  if (seconds < 0 || seconds > 59 || !Number.isInteger(seconds)) {
    throw new Error("seconds must be an integer between 0 and 59");
  }
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
