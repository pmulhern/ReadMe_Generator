// Requiring fs since we will be wrting to the ReadMe file
var fs = require("fs");
var genMark = require("./utils/generateMarkdown.js");

console.log(genMark)

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

// Eventually we will need this code to write to the ReadMe file
// fs.writeFile("README.md", <some variable or const>, function(err) {

//     if (err) {
//       return console.log(err);
//     }
  
//     console.log("Success!");
  
//   });