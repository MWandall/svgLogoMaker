const Square = require("../lib/square");


describe ('square shape and shape color', () => {
    it('should generate a blue square', () => {
        const expectedOutput = 
       `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="10" width="200" height="200" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">TXT</text>
</svg>`;
        const square = new Square("TXT", "red", "blue");
        const currentOutput = square.generateSquare();
        expect(currentOutput).toContain(expectedOutput)
    })
})

