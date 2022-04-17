// Basic Types

let id: number = 5;
let company: string = 'Sunefire';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple, has to be in particular order that you set
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple array, array of tuples
let employee: [number, string][];

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
];

// Union, lets var be either or
let pid: string | number = 22;

pid = '22';
pid = 22;

// Enum
enum Direction1 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// console.log(Direction1.Up);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

// Type Assertion
let cid: any = 1;
// let customerID = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  readonly id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, 'Brad T');
const mike = new Person(2, 'Mike Jordan');

// console.log(brad, mike);
// brad.id = 5;
// console.log(brad);
// console.log(brad.register());

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Bradley', 'Johno', 'Shaun']);

// numArray.push('hello');
numArray.push(1);
