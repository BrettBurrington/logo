import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js';

async function promptUser() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (input) => input.length > 0 && input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):',
    },
  ]);

  return userInput;
}

// Function to generate the SVG logo and save it to a file
function generateLogo(userInput) {
  const { text, textColor, shapeType, shapeColor } = userInput;

  let shape;
  switch (shapeType) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.log('Invalid shape type');
      return;
  }

  shape.setColor(shapeColor);
  const svgContent = shape.render(text, textColor);

  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

// Entry point of the application
async function main() {
  try {
    const userInput = await promptUser();
    generateLogo(userInput);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
