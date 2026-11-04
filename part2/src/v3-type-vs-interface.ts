//* type alias vs interface

//? Type alias is a way to create a new name for an existing type. 
// It can be used to define literals, tuples, primitive types, union types, intersection types, and more. 
// Type aliases are often used to simplify complex types or to create more readable code.

//? Interface is a way to define the shape of an object, including its properties and methods. 
// It can be extended or implemented by other interfaces or classes. 
// Interfaces are often used to define contracts for objects and classes.


type ID=number;

//! interface ID= number;

type Role= "admin" | "user" | "guest";

//! interface Role= "admin" | "user" | "guest";

interface IUser {
  id: ID;
  name: string;
  role: Role;
}

const user: IUser = {
    id:21312, 
    name: "jashim", 
    role: "admin"
}; // Valid assignment

// TODO: interface can be extended or implemented by other interfaces or classes.


interface Animal { 
    species: string;
}

interface Cat  extends Animal{
    breed: string;
}

const cat: Cat={
    breed: "Persian",
    species: "Feline"
}

type Vehicle ={
    brand: string;
    
}

type Car =  Vehicle & {
    model: string,
    year: number
}
const car: Car  ={
    brand: "Toyota",
    model: "Camry",
    year: 2020
}
console.log(car); // Output: { brand: 'Toyota', model: 'Camry', year: 2020 }
 
interface IEmployee{
    name: string;
}
//*merging interfaces with the same name will combine their properties into a single interface.
//!but this cannot be done with type aliases, as they cannot be merged or extended in the same way.
interface IEmployee{
    age: number;
    id: number;
}

const employee: IEmployee = {
    name: "John Doe",
    age: 30,
    id: 1
};
console.log(employee); // Output: { name: 'John Doe', age: 30, id: 1 }