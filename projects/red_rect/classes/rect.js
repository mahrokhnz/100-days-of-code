import Shape from "./shape";

class Rect extends Shape {
  x;
  y;
  width;
  height;

  constructor(x, y, width, height) {
    super();

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    super.draw(ctx);
  }
}

export default Rect;
