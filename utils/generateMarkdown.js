// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  }
  return `![Github badge](https://img.shields.io/badge/license-${license}-blue)`
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  }
  return `* [License](#license)`
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }
  return `## License

  This project is covered under the ${license} license.
  `
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}
  ${renderLicenseBadge(data.license)}

## DESCRIPTION
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contribution](#contribution)
* [Test](#test)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Test
${data.test}


## Questions

To reach me for any questions contact me at my:

Github: [${data.github}](https://github.com/${data.github})
E-mail:${data.email}

`;
}

module.exports = generateMarkdown;