//* Polymorphism: different Employee respond differently to the same method call

class Employee{
    constructor(
        public name: string,  
        private _baseSalary: number,
    ){}

    get baseSalary():number{
        return this._baseSalary;
    }
    get bonusSalary():number{
        return this._baseSalary+1000;
    }
    set baseSalary(newSalary:number){
        if (newSalary<0){
            throw new Error("salary can not be negative")
        }else{

            this._baseSalary=newSalary;
        }
    }
    calculatePay(taxRate:number,):number {
        return this.baseSalary-this.baseSalary*taxRate;
    }
}
class Manager extends Employee{
    calculatePay(taxrate:number):number{
        // super reuses Employee's tax logic, then adds the manager bonus
        return super.calculatePay(taxrate)+3000;
    }
}
class Developer extends Employee{

    
}

const employee = new Employee("john",4000);
const manager = new Manager("jane",5000);

console.log(employee.calculatePay(0.1));// 3600
console.log(manager.calculatePay(0.1));// 4500 + 3000 = 7500