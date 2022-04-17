"use strict";
// Basic Types
let id = 5;
let company = 'Sunefire';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple, has to be in particular order that you set
let person = [1, 'Brad', true];
// Tuple array, array of tuples
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union, lets var be either or
let pid = 22;
pid = '22';
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerID = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Bradley', 'Johno', 'Shaun']);
// numArray.push('hello');
numArray.push(1);
