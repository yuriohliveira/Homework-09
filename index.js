const fs = require("fs");
const util = require("util");

const inquirer = require('inquirer');
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);
// const readFileAsync = util.promisify(fs.readFile);
// const appendFileAsync = util.promisify(fs.appendFile);


inquirer.prompt([
  {
    type: "input",
    message: "Please type your GitHub username",
    name: "username",
  },
  {
    type: "input",
    message: "Please type your email",
    name: "email",
  },
  {
    type: "input",
    message: "Please type a title for your project",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a brief description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Please write the proper instructions for installing this application",
    name: "installation",
  },
  {
    type: "input",
    message: "Please write the usage of your application",
    name: "usage",
  },
  {
    type: "list",
    message: "Please select one of these licenses",
    name: "license",
    choices: ["MIT", "APCHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    message: "Enter the usernames of contributers to this project",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please write any tests for your app",
    name: "tests",
  }
]).then(function (data) {
  // console.log(data);


  axios
    .get(`https://api.github.com/users/${data.username}`).then(function (github) {

      const avatar = github.data.avatar_url

      writeFileAsync("newreadme.md", `# ${data.title} \n
      \n## Table of contents\n * [Installation](#Installation)\n * [Usage](#Usage)\n * [Licence](#Licence)\n* [Contributing](#Contributing)\n* [Tests](#Tests)\n * [Contact](#Contact)
      \n## Description\n > ${data.description}
      \n## Installation\n ${data.installation}
      \n## Usage\n ${data.usage}
      \n## License\n ![license](https://img.shields.io/static/v1?label=license&message=${data.license}&color=red) \n
      \n## Contributer\n ${data.contributing}
      \n## Tests\n ${data.tests}
      \n## Contact\n<img src="${avatar}" alt="avatar" style="border-radius: 20px" width="50"/>\n ${data.email}
      `).then(function () {
        console.log("Successfully wrote to newreadme.md");
      }).catch(function (err) {
        console.log(err);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
})
