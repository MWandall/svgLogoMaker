const Circle = require("../lib/circle");


describe ('circle shape and shape color', () => {
    it('should generate a blue circle', () => {
        const expectedOutput = 
       `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">TXT</text>
</svg>`;
        const circle = new Circle("TXT", "red", "blue");
        const currentOutput = circle.generateCircle();
        expect(currentOutput).toContain(expectedOutput)
    })
})

// const shape = new Circle("TXT", "red", "blue");
// // shape.shapeColor("blue");
// expect(shape.generateCircle()).toContain(`<svg version="1.1"
// width="300" height="200"
// xmlns="http://www.w3.org/2000/svg">
// <circle cx="150" cy="100" r="100" fill="blue" />
// <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">TXT</text>
// </svg>`);


// Testing suite for the generate Circle method
