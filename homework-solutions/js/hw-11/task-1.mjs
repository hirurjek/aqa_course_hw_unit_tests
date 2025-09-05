class Employee {
  #salary;
  
  constructor(firstName,lastName, profession, salary) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof profession !== 'string' || typeof salary !== 'number' ) {
      throw new Error('Invalid input');
    }
    this._firstName = firstName;
    this.#salary = salary;
    this._profession = profession;
    this._lastName = lastName;

  }
  get firstName() {
    return this._firstName;
  }
  set firstName(newName) {
    if (typeof newName !== 'string') { 
      throw new Error('Invalid input');
    }
    this._firstName = newName;
  }
  get salary() {
    return this.#salary;
  }
  set salary(newSalary) {
    if (typeof newSalary !== 'number' || newSalary < 0) {
      throw new Error('Invalid input');
    }
    this.#salary = newSalary;
  }
  get profession() {
    return this._profession;
  }
  set profession(newProffesion) {
    if (typeof newProffesion !== 'string') {
      throw new Error('Invalid input');
    }
    this._profession = newProffesion;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(newLastname) {
    if (typeof newLastname !== 'string') {
      throw new Error('Invalid input');
    }
    this._lastName = newLastname;
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}



class Company {
  #employees = [];
  constructor (title, phone, address, employees = []) {
   
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }
  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }
  get employees() {
    return this.#employees;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Invalid employee');
    }
    this.#employees.push(employee)
  }
пше 
  getEmployees() {
    return this.#employees;

  
}
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
}}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees());
console.log(company.getInfo());
export { Employee, Company };
