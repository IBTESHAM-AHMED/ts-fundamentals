//* type alias vs interface
const user = {
    id: 21312,
    name: "jashim",
    role: "admin"
}; // Valid assignment
const cat = {
    breed: "Persian",
    species: "Feline"
};
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(car); // Output: { brand: 'Toyota', model: 'Camry', year: 2020 }
const employee = {
    name: "John Doe",
    age: 30,
    id: 1
};
console.log(employee); // Output: { name: 'John Doe', age: 30, id: 1 }
export {};
