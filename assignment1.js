let hospital = [
    {
        id:"123",
        fullName:"Joseph Stone",
        dateOfBirth:"1987-04-27",
        symtoms:[
            "Fever", "Cough"
        ],
    },
    {
        id:"456",
        fullName:"Malia Ortega",
        dateOfBirth:"1990-03-22",
        symtoms:[
            "Nausea", "Fever"
        ],
    },
    {
        id:"789",
        fullName:"Meadow Ross",
        dateOfBirth:"1999-06-11", 
        symtoms:[
            "Headache", "Sore throat"
        ],
    },
];

function showPatients(hospital) {
    let output = `<h1>hospital.Name</h1>`;
    
    hospital.patients.forEach(patient => {
      output += `<h2>patient.fullName, patient.dateOfBirth</h2>`;
      output += "<ul>";
      patient.symptoms.forEach(symptom => {
        output += `<li>symptom</li>`;
      });
      output += "</ul>";
    });
    
    return output;
  }
   
  showPatients = function () {
    let str = "<h1>hospital.Name</h1>";
   
    for (let i = 0; i < hospital.length; i++) {
      str += "<h2>" + hospital[i].fullName + ", " + hospital[i].dateOfBirth + "</h2>";
      str += "<ul>";
        str += "<li>" + hospital[i].symptoms + "</li>";
        str += "</ul>";
      }
    return str;
};

console.log(showPatients(hospital));



let getPatient = function (patients) {

    let randomIndex = function() {
        const randomIndex = Math.floor(Math.random()*patients.length);
        return randomIndex
    };

    let randomPateintId = randomIndex();
    return randomPateintId;

};

console.log(getPatient());

