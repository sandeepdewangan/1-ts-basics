let username: string; // explicit type assignment
let useAge = 34; // type inference

username = "Sandeep";

// get the type of
console.log(typeof username); // string

// functions
function add(a: number, b: number) {
    return a + b;
}

// Union type
let userid: string | number;
userid = 'sandeep';
userid = 9893228899;

// Arrays and types
let users1: string[]; // accepts array of strings
let users2: (string | number)[] // accepts array of strings and number

// alternate way of describing an array type

let users3: Array<string | number>; // generic type

// Tuples
let possibleResults: [number, string]; // possible result is an array of 2 values, exactly two values.
possibleResults = [1, 'Hello'];

// Object
let user: {
    name: string;
    age: number;
}

// Data should be an object of any key-value pair.
let data: Record<string, number | string>;
data = {
    name: 'Sandeep',
    age: 34,
}

// --------- Enums ---------

enum Role {
    Admin,
    Guests,
    Editor
}

let userRole: Role = Role.Admin;

// OR
enum Role1 {
    Admin = "Admin",
    Guests = "Guests",
    Editor = "Editor"
}

// OR, start index from 1
enum Role2 {
    Admin = 1,
    Guests,
    Editor
}

// --------- Literal Types (alternative to enums) ---------

let userRole1: 'admin' | 'guest' | 'editor' = 'admin';

// the possible outcomes returns two values, one is -1 or 1 and any number
let possibleResults1: [1 | -1, number];

// --------- IMP ---------
// --------- Custom Types or Type Aliases ---------

type Roles = 'admin' | 'superadmin' | 'reader' | 'editor';
type myNumber = number; // we can use myNumber in place of number.

// --------- negation operator ---------
// returns the original boolean value of the operand.
// First Negation (!): The first ! converts the operand to a boolean and inverts it.
// Second Negation (!): The second ! inverts the boolean value back to its original truthy or falsy equivalent.

!!'hello'; // true, because 'hello' is a truthy value
!!0;     // false, because 0 is a falsy value
!!{};    // true, because an empty object is a truthy value
!!null;  // false, because null is a falsy value

