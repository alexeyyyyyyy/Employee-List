const employees = [
    {name: 'John', position: 'Manager', salary: 5000},
    {name: 'Alice', position: 'Developer', salary: 4000},
    {name: 'Bob', position: 'Designer', salary: 3500}
];
const employeeSalary = [];

for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    employeeSalary.push(employee.salary);

}
console.log(`Зарплаты сотрудников :${employeeSalary}`)

updatedSalaries = employees.map(employee => {
    if (employee.position === 'Developer') {
        return employee.salary + (employee.salary / 10);
    } else {
        return employee.salary;
    }
});
console.log(`Обновленные зарплаты с учетом бонусов: ${updatedSalaries}`);


const employeesPosition = [
    {name: 'John', position: 'Manager'},
    {name: 'Alice', position: 'Developer'},
    {name: 'Bob', position: 'Designer'}
];
employeesPosition.forEach(person =>{
    console.log(`Имя рабочего:${person.name}`, `||| Должность рабочего:${person.position}`);
})
