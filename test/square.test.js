const Square = require('../lib/square.js');

const shape = new Square();
shapeColor("blue");
expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="blue" />');