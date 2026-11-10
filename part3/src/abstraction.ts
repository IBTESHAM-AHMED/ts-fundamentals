//*Abstraction: evry Employee must define how their pay is calculated

abstract class Employee{
    constructor(
        public name: string,
        private _baseSalary: number,
    ){}
    get baseSalary():number{
        return this._baseSalary;
    }
    set baseSalary(newSalary:number){
        if (newSalary<0){
            throw new Error("Salary cant be negative.")
        } 
        this._baseSalary=newSalary;

    }
    abstract calculatePay():number;

    
}

// const employee = new Employee("asdasd")// cannot create an instance of an abstract class.
class Manager extends Employee{
    calculatePay(){
        return this.baseSalary+5000;
    }
}
class Developer extends Employee{
    calculatePay(){
        return this.baseSalary+3000;
    }
}
const manager = new Manager("jane",5000);
const developer = new Developer("zoe",3000,)

console.log(manager.calculatePay());
console.log(developer.calculatePay());