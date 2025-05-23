function Color() {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.hex = function () {
  const { r, g, b } = this;
  const hex = (r << 16) | (g << 8) | b;
  return "#" + ("000000" + hex.toString(16)).slice(-6);
};

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new color(40, 255, 60);
const color2 = new Color(0, 0, 0);
