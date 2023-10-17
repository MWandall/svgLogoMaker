const Circle = require("../lib/circle");


describe ('circle shape and shape color', () => {
    it('should generate a blue circle', () => {
        const expectedOutput = 
       `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
        const circle = new Circle("TXT", "red", "blue");
        const currentOutput = circle.generateCircle();
        expect(currentOutput).toContain(expectedOutput)
    })
})