const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

function init() {
    inquirer.prompt(questions).then(function(data) {
        const queryURL = `https://api.github.com/users/${data.name}`;
        axios.get(queryURL).then(function(response) {
            data.email = response.data.email;
            data.image = response.data.avatar_url;

            fs.writeFile("README-gen.md", generateMarkdown(data), function(err, data) {
                if (err) {
                    throw err;
                } else {
                    console.log("README generated!");
                }
            });
        });
    });
}

init();
