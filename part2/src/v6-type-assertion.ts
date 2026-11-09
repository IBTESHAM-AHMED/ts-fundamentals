// TODO:Type Assertion

//* "as" syntax

type Status = "pending" | "approved" | "rejected";
const someStatus: string = "approved";

const showStatus = (status:Status) =>{
    console.log("Your application is " + status);
}

showStatus(someStatus as Status); // No error as the type is asserted to be Status
//*non-null assertion operator



//*const assertion


