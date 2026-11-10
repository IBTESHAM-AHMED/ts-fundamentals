//* Polymorphism: different Employee respond differently to the same method call
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
    get bonusSalary() {
        return this._baseSalary + 1000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("salary can not be negative");
        }
        else {
            this._baseSalary = newSalary;
        }
    }
    calculatePay(taxRate) {
        return this.baseSalary - this.baseSalary * taxRate;
    }
}
class Manager extends Employee {
    calculatePay(taxrate) {
        // super reuses Employee's tax logic, then adds the manager bonus
        return super.calculatePay(taxrate) + 3000;
    }
}
class Developer extends Employee {
    type;
    constructor(name, baseSalary, type) {
        super(name, baseSalary);
        this.type = type;
    }
}
const employee = new Employee("john", 4000);
const manager = new Manager("jane", 5000);
const developer = new Developer("zoe", 3000, "Frontend");
console.log(employee.calculatePay(0.1)); // 3600
console.log(manager.calculatePay(0.1)); // 4500 + 3000 = 7500
console.log(developer); //Developer {name: 'zoe', _baseSalary: 3000, type: 'Frontend'}
export {};
