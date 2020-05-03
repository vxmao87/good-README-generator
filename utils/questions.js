// All questions are printed here.
const questions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "title",
        message: "Please give your project a title: "
    },
    {
        type: "input",
        name: "description",
        message: "Please briefly describe your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Briefly describe how your project is installed: "
    },
    {
        type: "input",
        name: "usage",
        message: "Describe the usage for your project: "
    },
    {
        type: "checkbox",
        name: "technologies",
        message: "List the technologies you've used: ",
        choices: [
            "JavaScript",
            "CSS",
            "HTML", 
            "jQuery",
            "Bootstrap",
            "AJAX",
            "Axios"
        ]
    },
    {
        type: "list",
        name: "license",
        message: "Select which of the licenses you want for your project: ",
        choices: [
            "MIT",
            "GNU AGPLv3",
            "GNU GPLv3",
            "Mozilla",
            "Apache",
            "Boost Software",
            "None"
        ]
    },
    {
        type: "input",
        name: "contributions",
        message: "Please describe your criteria for contributions: "
    },
    {
        type: "input",
        name: "tests",
        message: "Please describe instructions for conducting tests: "
    },
];

module.exports = questions;