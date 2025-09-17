const BrandTypeId: unique symbol = Symbol.for("mylib/Brand");

export interface Brand<in out K extends string | symbol> {
  readonly [BrandTypeId]: {
    readonly [k in K]: K;
  };
}
