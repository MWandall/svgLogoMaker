const Shape = require("./shape.js");

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    // this.shape = "circle";
    // this.shapeColor = shapeColor;
  }
  generateCircle() {
return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
  }
}

module.exports = Circle;

// const Circle = `<svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

// <circle cx="25" cy="75" r="20" fill="blue" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>`

// r
// The radius of the circle.

// cx
// The x position of the center of the circle.

// cy
// The y position of the center of the circle.
