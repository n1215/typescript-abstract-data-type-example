// oop style (class based)
export class LocalTime {
  constructor(
    private readonly _hour: number,
    private readonly _minutes: number,
    private readonly _seconds: number,
  ) {
    if (_hour < 0 || _hour > 23 || !Number.isInteger(_hour)) {
      throw new Error("hour must be an integer between 0 and 23");
    }

    if (_minutes < 0 || _minutes > 59 || !Number.isInteger(_minutes)) {
      throw new Error("minutes must be an integer between 0 and 59");
    }

    if (_seconds < 0 || _seconds > 59 || !Number.isInteger(_seconds)) {
      throw new Error("seconds must be an integer between 0 and 59");
    }
  }

  get hour(): number {
    return this._hour;
  }

  get minutes(): number {
    return this._minutes;
  }

  get seconds(): number {
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
