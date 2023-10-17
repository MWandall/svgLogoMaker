const Shape = require("./shape.js");

class Square extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = "square";
    this.shapeColor = shapeColor;
  }
  generateSquare() {
    return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
     
     
     <rect x="10" y="10" width="200" height="200" fill="${shapeColor}" />
     
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
     
     </svg>`;
  }
}

module.exports = Square;


// const Square = '<rect x="10" y="10" width="30" height="30" fill="blue" />'

// x
// The x position of the top left corner of the rectangle.

// y
// The y position of the top left corner of the rectangle.

// width
// The width of the rectangle.

// height
// The height of the rectangle.

// rx
// The x radius of the corners of the rectangle.

// ry
// The y radius of the corners of the rectangle.