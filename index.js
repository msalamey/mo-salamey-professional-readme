// TODO: Include packages needed for this application - Added packages. 
const inquirer = require("inquirer"); 
const fs = require("fs");  
const generate = require("./utils/generateMarkdown"); 

// TODO: Create an array of questions for user input - Added questions. 
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide the title name of your project."
    }, 
    {    
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    }, 
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions." 
    },  
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage."
    }, 
    {
        type: "list",
        name: "license",
        message: "Please select your project license/badge.",   
        choices: ["ISC", "MIT", "Apache", "IBM", "BSD", "None"]
    }, 
    {
        type: "input",
        name: "contributing",
        message: "Please include any contributing parties."
    }, 
    {
        type: "input",
        name: "test",
        message: "Please provide the project test insturctions."
    },
    {
        type: "input", 
        name: "questions", 
        message: "Any Questions?"    
    },
   {
        type: "input",
        name: "username",
        message: "What is your github user name?"
   }, 
   {
        type: "input",
        name: "email",
        message: "what is your email address?"
   },
];

// TODO: Create a function to write README file - wrote function. 
inquirer.prompt(questions).then((answers) => {            
fs.writeFile("GENERATED_README.md", generate (answers), function(err) { 
                if (err) {
                throw err
                }; 
                console.log("New README file created successfully.");
                }); 
            });

// TODO: Create a function to initialize app - Completed. 
function init() {
}
// Function call to initialize app - confirmed. 
init(); 