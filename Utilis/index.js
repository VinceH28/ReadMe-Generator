//Packages Needed for App
const inquirer = require('inquirer');
const fs = require('fs');

const util = require('util');
const asyncWrite = util.promisify(fs.writeFile);

//Funtion to run app (info = data from prompts)
const generateMD = (info) => {
    let licenseChoice = '';
switch (info.license){
    case "IBM":
        licenseChoice = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    break;
    case "MIT":
        licenseChoice = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    break;
    case "Mozilla":
        licenseChoice = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    break;
    case "Open Data Commons":
        licenseChoice = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
    break;
    case "None":
        licenseChoice = " "
    break;
}

//readMe layout
const layout = `
# ${info.title} ${licenseChoice}
### ${info.description}
## Table of Contents:
    [Installation] (#installation)
    [Usage] (#usage)
    [License] (#license)
    [Contributing] (#contributing)
    [Tests] (#tests)
    [Questions] (#questions)
    
    ## Installation
    ### ${info.installation}
    
    ## Usage
    ## ${info.usage}
    ###[Deployed Link] (${info.deployed})
    
    ## License
    ### ${info.license}
    
    ## Contributing
            1.
                * ${info.contribtionName1}
                * [Contributor 1 Profile] (${info.contributorGitHub1})
            2.
                * ${info.contribtionName2}
                *[Contributor 1 Profile] (${info.contributorGitHub2})
    
    ## Tests
    ### [Tests] (${info.tests})
    
    ## Questions
    ### ${info.username}
    ### [Github] (${info.proflie} 'Github Profile')
    ### ${info.email}`;
    
    console.log(layout);
    return layout;
    }

    // Inquirer Prompts
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project? ',
                name: 'title',
            },
            {
                type: 'input',
                message: ' Please type a brief description of your project: ',
                name: 'description',

            },
            {
                type: 'input',
                message: ' Let users know how to install your project: ',
                name: 'installation',
            },
            {
                type: 'input',
                message: ' Provide instructions and examples for use: ',
                name: 'usage',
            },
            {
                type: 'input',
                message: '  Please provide a link to your deployed application. ',
                name: 'deployed',
            },
            {
                type: 'input',
                message: ' Add the link to your tests. ',
                name: 'tests',
            },
            {
                type: 'input',
                message: ' Who contributed to the development of application? Full Name: ',
                name: 'contribution-mame1',
            },
            {
                type: 'input',
                message: ' Contributors GitHub Profile',
                name: 'contribution-GH1',
            },
            {
                type: 'input',
                message: ' Who contributed to the development of the appplication? Full Name:',
                name: 'contribution-mame2',
            },
            {
                type: 'input',
                message: ' Contributors GitHub Profile',
                name: 'contribution-GH2',
            },
            {
                type: 'input',
                message: ' Describe the guidelines for contributing to the rep: ',
                name: 'contributing',
            },
            {
                type: 'input',
                message: ' What is your GitHub username?  ',
                name: 'github',
            },
            {
                type: 'input',
                message: ' What is your Github profile?',
                name: 'profile',
            },
            {
                type: 'input',
                message: ' Choose a license for the project: ',
                name: ' license',
                choices: ['Apache', 'GNU', 'MIT']
            },
            {
                type: 'input',
                message: ' What is your email address? ',
                name: 'email',
            },
 
        ])
        .then((info) => {
            //New file title
        const newfileName = `${info.title}.md`;
            //Used in asyncWrite
        const details = generateMD(info)

            asyncWrite(newfileName, (details), (err) =>
                err ? console.log(err) : console.log (' All Done!' )
            )
        })