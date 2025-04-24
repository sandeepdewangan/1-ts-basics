// --------- null and undefined ---------
// In essence, undefined indicates that a value is missing due to the absence of initialization or declaration, 
// while null signifies that a value is intentionally missing.
// While both null and undefined loosely equate to each other 
// (null == undefined is true), they are not strictly equal (null === undefined is false). 

let message: null | string;

// --------- forced not null and chaining ---------

const inputEl = document.getElementById('username')!;
// '!' => this will not yield null
// '?' => i know that inputEl can contain null, if it contains null, then dont try to access .value property
console.log(inputEl?.value);

// --------- type casting ---------

const inputEl2 = document.getElementById('username') as HTMLInputElement | null;


// --------- optional values ---------

function generateError(msg?: string) {
}

// --------- Nullish Coalescing ---------
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let input = '';
const didProvideInput = input ?? false; // if input is null false is output, else input

