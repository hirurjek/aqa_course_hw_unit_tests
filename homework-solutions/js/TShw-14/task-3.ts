/*
Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов у которых есть как минимум поле salary: number, и возвращается среднее арифметическое зарплат всех переданных объектов
*/
type WithSalary = { salary: number };

function getAvgSalary<T extends WithSalary>(...employees: T[]): number {
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    return employees.length ? totalSalary / employees.length : 0;
}


const avgSalary = getAvgSalary(
    { name: "Alice", salary: 100 },
    { name: "Bob", salary: 200 },
    { name: "Charlie", salary: 300 }
);

console.log(avgSalary); 