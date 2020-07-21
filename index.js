// Requiring fs since we will be writing to the ReadMe file
let fs = require("fs");
// Require the inquirer package for prompts
let inquirer = require("inquirer");
// Not sure yet.  This was provided by instructor
let genMark = require("./utils/generateMarkdown.js");

console.log(genMark)

const readMeHeaders = ["## Description",
"## Table of Contents",
"## Installation",
"## Usage",
"## License",
"## Contributing",
"## Tests",
"## Questions",
]



// array of questions for user.  Used Questions from instructor example.
// 0
const questions = ["What is your GitHub username?",
// 1
"What is your email address?",
// 2
"What is your project's name?",
// 3
"Please write a short description of your project.",
// 4
"What kind of license should your project have?",
// 5
"what command should be run to install dependencies?",
// 6
"What command should be run to run tests?",
// 7
"What does the user need to know about using the repo?",
// 8
"What does the user need to know about contributing to the repo?",
];

inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "username"
        },
        {
            type: "input",
            message: questions[1],
            name: "email"
        },
        {
            type: "input",
            message: questions[2],
            name: "projectName"
        },
        {
            type: "input",
            message: questions[3],
            name: "projectDesc"
        },
        // Change to list and add syntax with new license variables
        {
            type: "input",
            message: questions[4],
            name: "license"
        },
        {
            type: "input",
            message: questions[5],
            name: "dependencies"
        },
        {
            type: "input",
            message: questions[6],
            name: "command"
        },
        {
            type: "input",
            message: questions[7],
            name: "userIntel"
        },
        {
            type: "input",
            message: questions[8],
            name: "userContrib"
        }
        // {
        //     type: "checkbox",
        //     message: "What is your preferred method of communciation?",
        //     name: "communication",
        //     choices: [ "Phone", "Email"]
        // }
    ])

.then(function (data) {

    var fileName = "README.md";

    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function(err) {
    
        if (err) {
        return console.log(err);
        }
    
        console.log("Success!");
    
    });
    });

// function to write README file
// .then(function writeToFile(fileName, data) {

//     var fileName = "README.md";

//     fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function(err) {
  
//       if (err) {
//         return console.log(err);
//       }
  
//       console.log("Success!");
  
//     });
//   });

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();




