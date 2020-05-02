function generateMarkdown(data) {
  return `
# ${data.title}
[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)]
(https://github.com/johnfyoung/google)

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.
  
## Contributing

${data.contributions}

## Tests

${data.test}

## Questions

If you have any questions about the repo, open an issue or contact [${data.name}](undefined) directly.

Email: ${data.email || "no email provided"}

![image](${data.avatar_url || "no image provided"})
`;
}

module.exports = generateMarkdown;
