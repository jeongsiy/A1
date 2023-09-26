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

function showPatients(){
  let str = "<h1>hospital.Name</h1>";

  for (let i = 0; i < hospital.length; i++){
    str += "<h2>" + hospital[i].fullName + ", " + hospital[i].dateOfBirth + "</h2>";
    str += "<ul>";
    for (let j = 0; j < hospital[i].symtoms.length; j++){
      str += "<li>" + hospital[i].symtoms[j] + "</li>";
    }

    str += "</ul>";
  }

  return str;
};

console.log(showPatients());


function getPatient(randomPatientIndex){
  return hospital[randomPatientIndex].id
}

const randomPatientIndex = Math.floor(Math.random()*hospital.length);

console.log(getPatient(randomPatientIndex));