export const generatePage = employees => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="style.css">
     <title>Team Profile Viewer</title>
</head>
<body>
     <header>
          <h1>My Team</h1>
     </header>

     <main>
          ${generateCards(employees)}
     </main>
</body>
</html>`;   
}

const generateCards = employees => {
     let cardsHtml = '';

     // generating a card per employee
     employees.forEach(employee => {
          let info;
          let infoDesc;
          
          // determine role of employee
          // info is dependant on role:
          // Managers -> Office Number
          // Engineer -> Github
          // Intern -> School
          if (employee.getRole() === 'Manager') {
               info = 'Office Number';
               infoDesc = employee.officeNo;
          } else if (employee.getRole() === 'Engineer') {
               info = 'Github';
               infoDesc = `<a href="https://github.com/${employee.github}" target="_blank"><span>${employee.github}</span></a>`;
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
                    <p>Employee ID: </br><span>${employee.id}</span></p>
                    <p>Email: </br><a href="to: ${employee.email}"><span>${employee.email}</span></a></p>
                    <p>${info}: </br><span>${infoDesc}</span></p>
               </div>
          </div>`;  
     });

     return cardsHtml;
}

