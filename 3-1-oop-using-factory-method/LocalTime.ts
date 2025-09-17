// oop style / factory method by companion object
export type LocalTime = {
  readonly hour: number;
  readonly minutes: number;
  readonly seconds: number;
  isAfter(other: LocalTime): boolean;
  toString(): string;
};

export const LocalTime = {
  of(hour: number, minutes: number, seconds: number): LocalTime {
    if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
      throw new Error("hour must be a integer between 0 and 23");
    }

    if (minutes < 0 || minutes > 59 || !Number.isInteger(minutes)) {
      throw new Error("minutes must be a integer between 0 and 59");
    }

    if (seconds < 0 || seconds > 59 || !Number.isInteger(seconds)) {
      throw new Error("seconds must be a integer between 0 and 59");
    }

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
