const generateTeam = (team) => {
  for (let i = 0; i < team.length; i++) {
    const role = team[i].getRole();
    const employee = team[i];
    if (role == "Manager") {
      generateManager(employee);
    } else if (role == "Engineer") {
      generateEngineer(employee);
    } else if (role == "Intern") {
      generateIntern(employee);
    }
  }
};

module.exports = (team) => {
  console.log(team);
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                  <h1 class="text-center text-white">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="row team-area col-12 d-flex justify-content-center">
                  ${team.map((employee) => {
                    const role = employee.getRole();
                    if (role == "Manager") {
                      return `
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-title">${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email:${employee.email}</li>
            <li class="list-group-item">Office number: ${
              employee.officeNumber
            }</li>
        </ul>
    </div>
</div>   `;
                    } else if (role == "Engineer") {
                      return `
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${employee.name}</h2>
        <h3 class="card-title">${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email:${employee.email}</li>
            <li class="list-group-item">GitHub:${employee.getGithub()}</li>
        </ul>
    </div>
</div>  `;
                    } else if (role == "Intern") {
                      return `
                        <div class="card employee-card">
                        <div class="card-header bg-primary text-white">
                            <h2 class="card-title">${employee.name}</h2>
                            <h3 class="card-title">${employee.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${
                                  employee.id
                                }</li>
                                <li class="list-group-item">Email: ${
                                  employee.email
                                }</li>
                                <li class="list-group-item">School: ${employee.getSchool()}</li>
                            </ul>
                        </div>
                    </div>   `;
                    }
                  })}
              </div>
          </div>
      </div>
  </body>
  </html> `;
};
