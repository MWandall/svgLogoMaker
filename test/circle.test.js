const Circle = require('../lib/circle');

const shape = new Circle();
shapeColor("blue");
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="blue" />');