# TypeScript Notes

## What is TypeScript?

An open source language, superset of JavaScript (What is a superset?) A programming language that contains all the features of a given language and has been expanded or enhanced to include other features as well.

- Offers additional features to JS, including static types
- Using types is completely optional
- Compiles down to regular JS
- Can be used for both front-end JS as well as backend with Node.js
- Types from 3rd party libraries can be added with type definitions

## Dynamic vs Static Typing

### Dynamic

Types are associated with run-time values and not named explicitly in your code
**Examples**
JavaScript, Python, Ruby, PHP

### Static

In statically typed languages, you explicitly assign types to variable, function parameters, return values, etc
**Examples**
Java, C, C++, Rust, Go

## Pros & Cons

### Pros

- More Rubust
- Spot bugs easily
- Predictable
- Readability
- Popular

### Cons

- Additional code to write
- Required compilation
- Not true static typing

## Compiling TypeScript

- TypeScript uses .ts and .tsx file extensions
- TSC (TypeScript Compiler) is used to compile .ts files down to JS
- TSC can watch files and report errors at compile time
- Many tools include TS compilation by default
- Most IDEs have great support for TS
- The tsconsfig.json file is used to configure how TypeScript works

---

# How to use TypeScript with React?

`npx create-react-app my-app --template typescript`

## Some points about TypeScript

- files end in .tsx
- strict to true in config, harder at first but better in long run
- catches errors in development before it makes it into production
- does not replace TDD. can detect poorly structured code in advance, but not bad logic
- **try to never use any**
- provides automatic documentation for your code, helps with collaborative coding
- can have type inference (guesses what the type may be)

## Benefits of JS vs TS (this or that format)

| JavaScript  | TypeScript       |
| ----------- | ---------------- |
| Silly Bugs  | More Code        |
| Crappy Docs | Automatic Docs   |
| Fast MVP    | Fast Refactoring |
