//dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { Triangle, Square, Circle } = require("./shapes/shapes.js");
//questions array
const questions = [
  {
    type: "input",
    name: "text",
    message: "What text should appear in the image? (Max 3 Characters)",
  },
  {
    type: "input",
    name: "textColor",
    message: "What Color Should the text be? (Keyword or Hexadecimal)",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like to use?",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What color should the shape be? (Keyword or Hexadecimal)",
  },
];
//function to create the svg image
function writeToFile(fileName, data) {
  let svgImg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>`;
  svgImg += `${data.shape}`;
  let userShape;
  if (data.shape === "Square") {
    userShape = new Square();
    svgImg += `<rect x="73" y="40" width="160" height="160" fill="${data.shapeColor}"/>`;
  } else if (data.shape === "Triangle") {
    userShape = new Triangle();
    svgImg += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`;
  } else if (data.shape === "Circle") {
    userShape = new Circle();
    svgImg += `<circle cx="150" cy="115" r="80" fill="${data.shapeColor}"/>`;
  }
// input data for the text segments
  svgImg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text></g></svg>`;
//function to create file
  fs.writeFile(`./sample/${fileName}`, svgImg, (err) => {
    err ? console.log(err) : console.log(`New Image: ${data.text}.svg`);
  });
}
//function to limit text character count
function init() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.text.length > 3) {
      console.log("3 character limit");
    } else {
      writeToFile(`${answers.text}.svg`, answers);
    }
  });
}
// calling previous function
init();
