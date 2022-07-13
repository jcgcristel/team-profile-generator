export const generatePage = templateData => {
    // destructure
    let managers = [];
    let engineer = [];
    let intern = [];
    
    // Creates separate arrays for the different types of employees
//     templateData.forEach(employee => {
//        if (employee.constructor.name === 'Manager') {
//             managers.push(employee);
//        } else if (employee.constructor.name === 'Engineer') {
//             engineer.push(employee);
//        } else {
//             intern.push(employee);
//        }
//     });

     // console.log(templateData[0].getRole());

    console.log(generateCard(templateData));
    // return console.log(`${manager}`)
}

const generateCard = employees => {
     let cardsHtml;
     employees.forEach(employee => {
          let info, infoDesc;
          
          // determine role
          if (employee.getRole() === 'Manager') {
               info = 'Office Number';
               infoDesc = employee.officeNo;
          } else if (employee.getRole() === 'Engineer') {
               info = 'Github';
               infoDesc = employee.github;
          } else {
               info = 'School';
               infoDesc = employee.school;
          }

          cardsHtml += `
          <div class="card">
               <div class="card-title">
                    <h2>${employee.name}</h2>
                    <p>${employee.getRole()}</p>
               </div>
               <div class="card-body">
                    <p>Name: </br><span>${employee.name}</span></p>
                    <p>Email: </br><span>@gmail.com</span></p>
                    <p>${info}: </br><span>${infoDesc}</span></p>
               </div>
          </div>`;  
     });

     return cardsHtml;
}

