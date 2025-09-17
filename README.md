# Patterns for implementing Abstract Data Type in TypeScript

A collection of sample code for comparing and learning different styles for designing and implementing a simple abstract data type called `LocalTime` in TypeScript.

It provides practical examples of applying different paradigms such as object-oriented (class-based, prototype-based, factory method) and functional programming to the same requirements, and further enhancing type safety.

# Explanation of each directory

Each directory contains a sample for each pattern.

## 1. Class-based oop

A traditional object-oriented style.

### 1-1-oop-class-based

- A standard implementation using TypeScript's `class`.
- Encapsulates data and behavior in a class.
- Ensures class invariants by validating values in the constructor.

### 1-2-oop-class-based-strictly-typed

- In addition to `1-1`, it introduces strict types such as `Hour` and `Minutes` (from `types/strict-types.ts`).
- Enhances type safety by detecting invalid values at compile time.

## 2. Prototype-based oop

A classic JavaScript style that does not use the `class` syntax.

### 2-1-oop-prototype-based

- Implemented using a constructor function and the prototype chain.
- It is difficult to implement private methods.

### 2-2-oop-prototype-based-strictly-typed

- Introduces strict types to `2-1` to enhance compile-time safety.

## 3. oop using Factory Method

A style that encapsulates object creation without using classes or constructor functions.

### 3-1-oop-using-factory-method

- Creates instances with a factory method `LocalTime.of()`.
- It is possible to create invalid objects by bypassing the factory.
- It is memory inefficient because methods like `isAfter()` are defined for each object.

### 3-2-oop-using-factory-method-strictly-typed

- Introduces strict types to `3-1` to enhance compile-time safety.

## 4. Functional programming

A style that completely separates data and behavior.

### 4-1-fp

- `LocalTime` is defined as a simple data structure (`type`) with no methods.
- Manipulates data with pure functions like `createLocalTime` and `isAfter`.
- At this point, it is possible to directly create objects with invalid values.

### 4-2-fp-strictly-typed

- Introduces strict types to `4-1` to enhance compile-time safety.

### 4-3-fp-with-branded-type

- The most recommended and well-balanced style.
- In addition to the approach of `4-1`, it introduces **Branded Types** (from `types/Brand.ts`).
- This ensures that only "legitimate" objects created through the `createLocalTime` factory function can be treated as the `LocalTime` type, even if they have the same structure.
- It overcomes the weakness of TypeScript's structural typing and achieves strong type safety close to nominal typing.

# How to run

Each sample can be run using `deno`.

```bash
# Example: To run the sample in 4-3
deno run 4-3-fp-with-branded-type/main.ts
```
