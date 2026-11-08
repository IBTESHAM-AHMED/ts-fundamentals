//*Top types
let helloWorld = "Hello World";
helloWorld = 42; // No error as tghe type is any
// helloworld.length //u cant do length on any type
const something = "Hello World";
// No error as the type is unknown
//*Core Types
let smthing1;
const num = 42;
smthing1 = num; // No error as the type is unknown
const currentUser = null;
//*Unit Type
const greet = () => {
    console.log("Hello World");
};
const somethin2 = greet(); // No error as the type is void
//*Sub-type of Unit Type
const greet2 = () => {
    console.log("Hello wa");
    return undefined; // No error as the type is void
};
const greetings = greet2();
console.log(greetings); // No error as the type is void
//*Bottom Type
let neverHappens;
// neverHappens = 42; // Error as the type is never
// neverHappens = "Hello World"; // Error as the type is never
// neverHappens = null; // Error as the type is never
// neverHappens = undefined; // Error as the type is never
const getError = (msg) => {
    throw new Error(msg);
};
const x = getError("This is an error");
export {};
//no error cz its bottom type. can be assigned any types
