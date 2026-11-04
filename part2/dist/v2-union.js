//Literal Types
const status = "success"; // Valid assignment
// const status2: Status = "error";
// ! Error: Type '"error"' is not assignable to type 'Status'.
console.log(status); // Output: success
const id1 = "abc123";
const id2 = 123456; // Valid assignments
// const id3: Identity = true; 
// ! Error: Type 'boolean' is not assignable to type 'Identity'.
console.log(id1); // Output: abc123
console.log(id2); // Output: 123456
const userRole = "guest"; // Valid assignment
console.log(userRole); // Output: guest
const user = { id: 123123, role: "member", plans: [212, 212] }; // Valid assignment
console.log(user); // Output: { id: 123123, role: 'member', plans: [ 212, 212 ] }
export {};
