//*Abstraction: evry Employee must define how their pay is calculated
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cant be negative.");
        }
        this._baseSalary = newSalary;
    }
}
// const employee = new Employee("asdasd")// cannot create an instance of an abstract class.
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    calculatePay() {
        return this.baseSalary + 3000;
    }
}
const manager = new Manager("jane", 5000);
const developer = new Developer("zoe", 3000);
console.log(manager.calculatePay());
console.log(developer.calculatePay());
export {};
