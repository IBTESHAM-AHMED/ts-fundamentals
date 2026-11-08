//*Top types

let helloWorld: any = "Hello World";
helloWorld = 42; // No error as tghe type is any

// helloworld.length //u cant do length on any type

const something: unknown = "Hello World";
// No error as the type is unknown

//*Core Types

let smthing1:unknown;
const num: number = 42;
smthing1 = num; // No error as the type is unknown

//*Nullish Types
interface User {
  name: string;
  age: number;

}
type loggedInUser = User | null;
const currentUser: loggedInUser = null;

//*Unit Type

const greet = () => {
  console.log("Hello World");
}
const somethin2 :string|void = greet(); // No error as the type is void


//*Sub-type of Unit Type

const greet2 = ():undefined => {
  console.log("Hello wa");
  return undefined; // No error as the type is void
}
const greetings= greet2(); 
console.log(greetings)// No error as the type is void

//*Bottom Type

let neverHappens: never;
// neverHappens = 42; // Error as the type is never
// neverHappens = "Hello World"; // Error as the type is never
// neverHappens = null; // Error as the type is never
// neverHappens = undefined; // Error as the type is never
const getError = (msg: string): never => {
  throw new Error(msg);
  
}
const x:string = getError("This is an error"); 
//no error cz its bottom type. can be assigned any types
