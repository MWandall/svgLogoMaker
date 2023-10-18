const Triangle = require("../lib/triangle");


describe ('triangle shape and shape color', () => {
    it('should generate a blue triangle', () => {
        const expectedOutput = 
       `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">TXT</text>
</svg>`;
        const triangle = new Triangle("TXT", "red", "blue");
        const currentOutput = triangle.generateTriangle();
        expect(currentOutput).toContain(expectedOutput)
    })
})

