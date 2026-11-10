//*Inheritance: a Manager is an Emplyee with ab additional responsibilities

class Employee{
    constructor(
        public name: string,  
        // protected _baseSalary: number,
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
    describe(): string {
        return `${this.name} earns ${this.baseSalary}`; //return string with backtick
    }
}

class Manager extends Employee{
    // branch: number;
    // constructor(name:string, _baseSalary:number,branch:number,){
    //     super(name, _baseSalary);
    //     this.branch = branch;
    
    // Todo: only use access modifier for the clild element=branch
    constructor(name:string, _baseSalary:number,public branch:number,){ 
        super(name, _baseSalary);
    }
    describeWork():string{
        if(this.branch===1){
            return `${this.name} manages ${this.branch} branch`
        }
        return `${this.name} manages ${this.branch} branches`

    }
    describeManager():string{
        return `${this.name} is a Manager and earns ${this.baseSalary}` // baseSalary comes from  baseSalary() get method.
        // return `${this.name} is a Manager and earns ${this._baseSalary}`//! cant access _basesalary property as its not in parent class, unless its protected property 


    }
}

const emp1 = new Employee("john",5000);
const emp2 = new Employee("Jane",6500);
const manager1 = new Manager("Zayn",7000,1);
const manager2 = new Manager("Zoe",7000,4);


// console.log(emp1.describe())
console.log(manager1.describeWork())
console.log(manager2.describeWork())

console.log(manager1.describeManager())