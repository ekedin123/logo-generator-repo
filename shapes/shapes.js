// this sets shape color
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}
// this defines the triangle class
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}
// this defines the cicle class
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}"/>`;
  }
}
//this defines the square class
class Square extends Shape {
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}"/>`;
  }
}
//ability to export this information to other files
module.exports = { Triangle, Circle, Square };
