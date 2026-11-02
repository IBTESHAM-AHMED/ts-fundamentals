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