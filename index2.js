// Requiring fs since we will be writing to the ReadMe file
let fs = require("fs");
// Require the inquirer package for prompts
let inquirer = require("inquirer");
// Not sure yet.  This was provided by instructor
let genMark = require("./utils/generateMarkdown.js");

console.log(genMark)

// array of questions for user.  Used Questions from instructor example.

const questions = ["What is your GitHub username?",
"What is your email address?",
"What is your project's name?",
"Please write a short description of your project.",
"What kind of license should your project have?",
"what command should be run to install dependencies?",
"What command should be run to run tests?",
"What does the user need to know about using the repo?",
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
            type: "list",
            message: questions[4],
            name: "license",
            choices: [
                "email",
                "phone",
                "telekinesis"
              ]
        },
        {
            type: "input",
            message: questions[5],
            name: "dependencies"
        },
        {
            type: "input",
            message: questions[6],
            name: "tests"
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

    .then(function(response) {

        var fileName = "README.md";
        
        var username = response.username;
        var email = response.email;
        var projectName = response.projectName;
        
        var projectDesc = response.projectDesc;
        var license = response.license;
        var dependencies = response.dependencies;
        
        var tests = response.tests;
        var userIntel = response.userIntel;
        var userContrib = response.userContrib;
        var questions = "If you have any question about the repo, open an issue or contact me directly at " + email +". You can fin more of my work at "  + [username] + "(https://gitbuh.com/" + username + "/)."

        var readMeHeaders = ["# "+ projectName,
        "## Description",
        "## Table of Contents",
        "## Installation",
        "## Usage",
        "## License",
        "## Contributing",
        "## Tests",
        "## Questions",
        ];

        var output = readMeHeaders[0] + "\n\n" +
        readMeHeaders[1] + "\n\n" + projectDesc + "\n\n" +
        readMeHeaders[2] + "\n\n" + "Table of Contents" + "\n\n" +
        readMeHeaders[3] + "\n\n" + dependencies + "\n\n" +
        readMeHeaders[4] + "\n\n" + userIntel + "\n\n" +
        readMeHeaders[5] + "\n\n" + license + "\n\n" +
        readMeHeaders[6] + "\n\n" + userContrib + "\n\n" +
        readMeHeaders[7] + "\n\n" + tests + "\n\n" +
        readMeHeaders[8] + "\n\n" + questions;
 
        fs.writeFile(fileName, output, function(err){
            if (err) {
                return console.log(err);
                }        
        });
    })



// .then(function (data) {

//     var fileName = "README.md";

//     fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function(err) {
    
//         if (err) {
//         return console.log(err);
//         }
    
//         console.log("Success!");
    
//     });
//     });



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




