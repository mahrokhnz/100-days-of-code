class Shape {
  fillColor = "red";

  get hasFill() {
    return this.fillColor !== null;
  }

  setFill(color) {
    this.fillColor = color;

    return this;
  }

  applyStyles(ctx) {
    if (this.hasFill) {
      ctx.fillStyle = this.fillColor;
    }
  }

  draw(ctx) {
    this.applyStyles(ctx);

    if (this.hasFill) {
      ctx.fill();
    }
  }
}

export default Shape;
