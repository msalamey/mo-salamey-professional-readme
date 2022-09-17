// TODO: Include packages needed for this application
const inquirer = require("inquirer"); 
const fs = require("fs"); 
const axios = require("axios"); 
const generate = require("./utils/generateMarkdown"); 

// TODO: Create an array of questions for user input
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
        name: "licence",
        message: "Please select your project licence/badge.",   
        choices: ["Permissive", "Copyleft", "Dual", "Public Domain", "Open Source", "Unlicensed"]
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
        name: "repo",
        message: "What is your repo link?"
   },
];

inquirer
.prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubData = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            }; 

// TODO: Create a function to write README file
            fs.writeFile("README.md", generate(data,githubData), function(err) { 
            if (err) {
            throw err
            }; 
            console.log("New README file created successfully.");
            }); 
        }); 
    }); 

// TODO: Create a function to initialize app
function init() {
}
// Function call to initialize app
init(); 