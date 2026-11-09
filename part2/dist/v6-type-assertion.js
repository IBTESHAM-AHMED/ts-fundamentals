// TODO:Type Assertion
const someStatus = "approved";
const showStatus = (status) => {
    console.log("Your application is " + status);
};
showStatus(someStatus); // No error as the type is asserted to be Status
export {};
//*non-null assertion operator
//*const assertion
