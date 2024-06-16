const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate the README content
const generateREADME = ({
  title,
  description,
  installation,
  usage,
  contribution,
  tests,
  license,
  github,
  email,
}) =>
  `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contribution}

## Tests
${tests}

## Questions
If you have any questions, please open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}/).
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide the installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide the usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide the contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide the test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.error(err) : console.log('Successfully created README.md!')
    );
  });
