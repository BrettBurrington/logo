class Shape {
    constructor() {
      this.color = 'black';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render(text, textColor) {
      throw new Error('The render method must be implemented in child classes.');
    }
  }
  
  class Circle extends Shape {
    render(text, textColor) {
      return `<svg width="300" height="200">
                <circle cx="150" cy="100" r="80" fill="${this.color}" />
                <text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text>
              </svg>`;
    }
  }
  
  class Triangle extends Shape {
    render(text, textColor) {
      return `<svg width="300" height="200">
                <polygon points="150,20 50,180 250,180" fill="${this.color}" />
                <text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text>
              </svg>`;
    }
  }
  
  class Square extends Shape {
    render(text, textColor) {
      return `<svg width="300" height="200">
                <rect x="50" y="50" width="200" height="200" fill="${this.color}" />
                <text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text>
              </svg>`;
    }
  }
  
  export { Circle, Triangle, Square };
  