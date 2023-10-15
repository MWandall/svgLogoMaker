const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="blue" />');