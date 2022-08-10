// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//Resposta 1 
const employee = {
    code: 10,
    name: "John"
};

const employee2: { code: number, name: string} = {
    code: 10,
    name: 'John'
};

interface employee {
    code: number,
    name: string
};

const employeeObj = {} as employee;
employeeObj.code = 10,
employeeObj.name = 'John'

const employeeObj2: employee = {
    code: 10,
    name: 'John'
};