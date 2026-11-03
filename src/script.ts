// let myString: string = "Hello, World!";
// let myNumber: number = 42;
// let myBoolean: boolean = true;
// let myArray: number[] = [1, 2, 3, 4, 5];
// let mySymbol: symbol = Symbol("mySymbol");
// let myBigInt: bigint = 123123n;


//* Type Safe Functions
const addTwo = (a: number, b: number): number => {
  return a + b;
}
console.log(addTwo(1000,20));

// * Array and Tuple and readonly modifiers

const arr: (string | number | boolean)[] = ["Hello", "World", 42, true];
const numArr: number[] = [1, 2, 3, 4, 5];
const tuple: [string, number, boolean] = ["Hello", 42, true];
const readonlyArr: readonly [number, number, number] = [1, 2, 3];

// readonlyArr[0] = 10; // Error: Cannot assign to '0' because it is a read-only property.

//* Optional, Default
const concatName= (firstName: string, lastName?: string): string => {
  if (!lastName) {
    console.log(firstName);
  }
  return firstName +" "+ lastName;
};
const greet = (name: string, greeting: string = "Hello"): void => {
  console.log(`${greeting}, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Hi"); // Output: Hi, Bob!


//* Rest Parameters (...args)
const sum =(...numbers:number[])=>{
  return numbers.reduce((total, sum) => total + sum, 0); // Using reduce to sum up the numbers
};
sum(1, 2, 3, 4, 5); // Output: 15
// Using rest parameters to accept multiple numbers
const logUserAction=(...args:[name:string, age: number ,isActive: boolean])=>{
  const [name, age ] = args;
console.log(`User ${name} is ${age} years old.`);// Output: User Alice is 30 years old.
};
logUserAction("Alice", 30,false); // Output: User Alice is 30 years old.

//*Object type, type alias, interface

// Type alias for user object
type TUser = { 
  name: string; 
  age: number;
  isActive: boolean
  action:()=>void;
  badges: string[];
  address: Address;     // Using the Address type alias
}

type Address={    // Type alias for address object
  street: string;
  city: string;
}

// Interface for user object
interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action:()=>void;
  badges: string[];
}


// Using the IUser interface to define the user object
const user:TUser = {

  name: "Alice",
  age: 30,
  isActive: true,
  action:()=>console.log("User action performed"),
  badges: ["admin", "moderator"],
  address: {        // Using the Address type alias to define the address property
    street: "123 Main St",
    city: "Anytown"
  }
};