export const generatePage = templateData => {
    // destructure
    let managers = [];
    let engineer = [];
    let intern = [];
    
    // Creates separate arrays for the different types of employees
    templateData.forEach(employee => {
       if (employee.constructor.name === 'Manager') {
            managers.push(employee);
       } else if (employee.constructor.name === 'Engineer') {
            engineer.push(employee);
       } else {
            intern.push(employee);
       }
    });

    console.log(managers);
    console.log(managers);

    // return console.log(`${manager}`)
}

