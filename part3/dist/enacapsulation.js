//*Encapsulation: protect a state and change it only through methods of the class. 
// It is a way to hide the internal state of an object and only expose a public interface. 
// It is a way to protect the internal state of an object from being modified by external code.
// It is a way to ensure that the internal state of an object is always valid and consistent. 
//* Access Modifiers: public, private, protected
//?public: can be accessed from anywhere
//?private: can only be accessed within the class
//?protected: can be accessed within the class and its subclasses
//?readonly: can be read but not reassigned after it is set
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
}
const emp1 = new Employee("john", 5000);
const emp2 = new Employee("Jane", 6500);
// emp1._baseSalary = 6000; // Error: Property 'baseSalary' is private and only accessible within class 'Employee'.
// emp1.baseSalary=-500;// Runtime Error: salary can not be negative
emp1.baseSalary = 2000;
console.log(emp1.bonusSalary); // 
console.log(emp1.baseSalary);
export {};
