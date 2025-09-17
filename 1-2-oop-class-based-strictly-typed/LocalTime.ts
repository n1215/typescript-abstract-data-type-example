// oop style (class based) + strictly typed
import { Hour, Minutes, Seconds } from "../types/strict-types.ts";

export class LocalTime {
  constructor(
    private readonly _hour: Hour,
    private readonly _minutes: Minutes,
    private readonly _seconds: Seconds,
  ) {
  }

  get hour(): Hour {
    return this._hour;
  }

  get minutes(): Minutes {
    return this._minutes;
  }

  get seconds(): Seconds {
    return this._seconds;
  }

  private toSeconds(): number {
    return this.hour * 3600 + this.minutes * 60 + this.seconds;
  }

  isAfter(another: LocalTime): boolean {
    return this.toSeconds() > another.toSeconds();
  }

  toString(): string {
    const pad = (num: number) => String(num).padStart(2, "0");
    return `${pad(this.hour)}:${pad(this.minutes)}:${pad(this.seconds)}`;
  }
}
