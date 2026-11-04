//Literal Types

type Status = "success" ;
const status: Status = "success"; // Valid assignment
// const status2: Status = "error";
// ! Error: Type '"error"' is not assignable to type 'Status'.
console.log(status); // Output: success


//Basic Union Types

type Identity= string | number;
const id1: Identity = "abc123";
const id2: Identity = 123456;// Valid assignments
// const id3: Identity = true; 
// ! Error: Type 'boolean' is not assignable to type 'Identity'.
console.log(id1); // Output: abc123
console.log(id2); // Output: 123456

//Literal Union Types

type role = "admin" | "user" | "guest";
const userRole: role = "guest"; // Valid assignment
console.log(userRole); // Output: guest



//Object Union Types\

type Admin = {id: number,role: "admin", privileges: string[]}

type Member ={id: number, role: "member" | "guest", plans:number[]}

type User = Admin | Member;

const user:User={ id:123123, role:"member",plans:[212,212]}// Valid assignment
console.log(user); // Output: { id: 123123, role: 'member', plans: [ 212, 212 ] }