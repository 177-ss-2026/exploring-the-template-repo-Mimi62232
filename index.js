//Personal Information
const firstName = "Stacey";
const lastName = "Sitton";
const age = 43;
const isStudent = true;

//Using template literals
const introduction = `Hello! My name is ${firstName} ${lastName}. I am
 ${age} years old.`;
const studentStatus = `Am I a student? ${isStudent}`;

//Print in console
console.log(introduction);
console.log(studentStatus);

//Add this to the bottom of index.js
const currentYear = 2026;
const birthYear = currentYear - age;
console.log(`I was born ${1982}.`);
