class Employee{
    name: string;
    baseSalary: number;

    constructor(name:string,baseSalary:number){
        this.baseSalary=baseSalary; 
        this.name=name; 
        //this keyword is used to refer to the current instance of the class. It is used to access the properties and methods of the class.
    }
}

const emp1 = new Employee("john",5000);
const emp2 = new Employee("Jane",6500);

console.log(emp1); 
console.log(emp2); 