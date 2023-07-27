const { Circle, Triangle, Square } = require('./lib/shapes');

describe('Circle Class', () => {
  test('render() should return the SVG string for the circle with specified color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Triangle Class', () => {
  test('render() should return the SVG string for the triangle with specified color', () => {
    const triangle = new Triangle();
    triangle.setColor('red');
    expect(triangle.render()).toEqual('<polygon points="150,20 50,180 250,180" fill="red" />');
  });
});

describe('Square Class', () => {
  test('render() should return the SVG string for the square with specified color', () => {
    const square = new Square();
    square.setColor('#00ff00');
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="#00ff00" />');
  });
});
