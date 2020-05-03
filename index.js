// Everything needed for code functionality is imported here.
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

// Prompt the questions listed
function init() {
    inquirer.prompt(questions).then(function(data) {

        // Because the data isn't easily accessible, we want to grab the 
        // email and image URLs from the GitHub API
        const queryURL = `https://api.github.com/users/${data.name}`;
        axios.get(queryURL).then(function(response) {
            data.email = response.data.email;
            data.image = response.data.avatar_url;
            data.url = queryURL;

            // Write the README.md file
            fs.writeFile("README-gen.md", generateMarkdown(data), function(err) {
                if(err) {
                    throw err;
                } else {
                    console.log("README.md successfully generated!")
                }
            });
        });
    });
}

init();
