const Shape = require("./shape.js");

class Triangle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = "triangle";
    this.shapeColor = shapeColor;
  }
  generateTriangle() {
    return `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
     
     
     <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
     
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
     
     </svg>`;
  }
}

module.exports = Triangle;

// const Triangle = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
// points
// A list of points, each number separated by a space, comma, EOL, or a line feed character with additional whitespace permitted. Each point must contain two numbers: an x coordinate and a y coordinate. So, the list (0,0), (1,1), and (2,2) could be written as 0, 0 1, 1 2, 2. The drawing then closes the path, so a final straight line would be drawn from (2,2) to (0,0).