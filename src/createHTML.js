const createManagerCard = function (manager) {
    return `
     <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <h1>${manager.name}</h1>
              <span class="card-title">Manager</span>
              <p class="id">ID: ${manager.id} </p>
              <p class="email"> Email: ${manager.email}</p>
              <p class="office"> Office Number: ${manager.officeNumber}</p>
            </div>
          </div>
        </div>
      </div>
    `;
}

const createEngineerCard = function (engineer) {
    return `
    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <h1> ${engineer.name}</h1>
              <span class="card-title">Engineer</span>
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: ${engineer.email}</p>
              <p class="GitHub">GitHub: ${engineer.github}</p>
            </div>
          </div>
        </div>
    </div>
    `;
}

const createInternCard = function (intern) {
    return `
    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
             <h1> ${intern.name}</h1}
              <span class="card-title">Intern</span>
              <p class="id">ID: ${intern.id} </p>
              <p class="email"> Email: ${intern.email}</p>
              <p class="school">School: ${intern.school}</p>
            </div>
          </div>
        </div>
    </div>
    `;
}

createHTML = (data) => {
    dataArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const empRole  = employee.grabRole();
        
        if (empRole === 'Manager') {
            const managCard = createManagerCard(employee);

            dataArray.push(managCard);
        }

        if (empRole === 'Engineer') {
            const engCard = createEngineerCard(employee);

            dataArray.push(engCard);
        }

        if (empRole === 'Intern') {
            const intCard = createInternCard(employee);

            dataArray.push(intCard);
        }
    }

    const empCards = dataArray.join('')

    const createTeam = createTeamProfile(empCards);
    return createTeam;
}

const createTeamProfile = function (empCards) {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Viewer</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet"href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/css/ol.css" type="text/css">
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <nav>
        <div class="nav-wrapper blue-grey">
          <a href="#" class="brand-logo blue-grey">Team Profile</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down blue-grey">
          </ul>
        </div>
      </nav>
      <main>
        <div class="container">
            ${empCards}
        </div>
      </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/build/ol.js"
          type="text/javascript"></script>
    <script src="script.js"></script>
</body>
</html>
`;
}

module.exports = createHTML;