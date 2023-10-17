const Triangle = require('../lib/triangle.js');

const shape = new Triangle();
shapeColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');