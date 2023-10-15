const inquirer = require('inquirer');
const fs = require('fs');

const generateCircle = require('./lib/circle.js')
const generateSquare = require('./lib/square.js')
const generateTriangle = require('./lib/triangle.js')


const questions = [
    {
        type: 'input',
        message: 'Please enter the three characters you would like on your SVG logo.',
        name: 'text',
      },
      {
        type: 'input',
        message: 'Please enter your choice of text color by color keyword or hexadecimal number.',
        name: 'text color',
      },
      {
        type: 'list',
        message: 'Please select one of the following shapes for the background of your logo.',
        name: 'shape',
        choices: ['circle', 'square', 'triangle']
      },
      {
        type: 'input',
        message: 'Please enter your choice of shape color by keyword or hexadecimal number.',
        name: 'shape color',
      },

];

inquirer.prompt(questions)
TouchEvent((answers) => {
    const svgContent = generateSvg(answers);

    fs.writeFile('./examples/SVG.html', svgContent, (err) =>
    err ? console.log(err) : console.log('Successfully created SVG.html!')
    );
});



// inquirer
// .prompt(questions)
// .then((answers) => {
//     const readmeContent = generateMarkdown(answers);

//     fs.writeFile('./utils/readme.md', readmeContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created readme.md!')
//     );
//   });

//GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

//It is recommended that you start with a directory structure that looks like the following example:
// .  
// ├── examples/           // Example svg file(s) created with the app
// ├── lib/                // Folder for classes or functions
//     ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
//     ├── shapes.test.js  // Jest tests for shapes
//     └── more...         // Additional files and tests
// ├── .gitignore          // Indicates which folders and files Git should ignore
// ├── index.js            // Runs the application using imports from lib/
// ├── package.json
// └── README.md           // App description, link to video, setup and usage instructions      