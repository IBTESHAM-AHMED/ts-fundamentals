//* "typeof" operator is used to get the type of a variable or an expression.
//  It returns a string that represents the type of the operand.
let x = 42;
console.log(typeof x); // Output: "number"
export {};
//* Type Guarding is a technique used to narrow down the type of a variable or
// an expression based on certain conditions. It allows us to perform different 
// operations based on thetype of the variable or expression,
// and it helps to avoid runtime errors by ensuring that
// we are working with the correct type.
//* Truthiness is a concept in programming that refers to the evaluation of a value
// as either true or false in a boolean context. In TypeScript, truthiness is used 
// to determine whether a value is considered "truthy" or "falsy" when used in 
// conditional statements or boolean expressions. A truthy value is any value that 
// evaluates to true, while a falsy value is any value that evaluates to false.
// The following values are considered falsy in TypeScript: false, 0, "", null,
//  undefined, and NaN. All other values are considered truthy.
//* Equality narrowing is a technique used to narrow down the type of a variable or
// an expression based on equality comparisons. It allows us to perform different 
// operations based on the value of the variable or expression, and it helps to 
// avoid runtime errors by ensuring that we are working with the correct type. 
// For example, if we have a variable that can be either a string or a number, 
// we can use an equality comparison to check if the variable is equal to a 
// specific string value. If it is, we can safely assume that the variable is of 
// type string and perform string-specific operations on it. If it is not equal 
// to that string value, we can assume that the variable is of type number and 
// perform number-specific operations on it.
//* "in" operator is used to check if a property exists in an object. It returns 
// a boolean value indicating whether the specified property is present in the 
// object or not. The syntax for using the "in" operator is as follows:
//*"instanceof" operator is used to check if an object is an instance of a 
// particular class or constructor function. It returns a boolean value indicating 
// whether the object is an instance of the specified class or constructor function. 
// The syntax for using the "instanceof" operator is as follows:
//* Discriminated Unions are a powerful feature in TypeScript that allows us to create 
// a union of types that share a common property, known as the discriminant. 
// The discriminant is used to differentiate between the different types in the union, 
// and it allows us to perform type narrowing based on the value of the discriminant property. 
// This technique is particularly useful when working with complex data structures, 
// such as objects or arrays, where we need to handle different types of data in a type-safe manner. 
// By using discriminated unions, we can ensure that our code is more robust and less prone to 
// runtime errors, while also making it easier to read and maintain.
