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
    ### ${data.email}`;
    
    console.log(layout);
    return layout;
    }