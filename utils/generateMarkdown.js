function generateMarkdown(data) {
  return `
# ${data.title}
[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://github.com/${data.name})

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Technologies](#technologies)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

${data.installation}

## Usage

${data.usage}

## Technologies

${data.technologies}

## License

This project is licensed under the ${data.license} license.
  
## Contributing

${data.contributions}

## Tests

${data.test}

## Questions

If you have any questions about the repo, open an issue or contact [${data.name}](${data.url}) directly.

Email: ${data.email || "no email provided"}

![image](${data.image || "no image provided"})
`;
}

module.exports = generateMarkdown;
