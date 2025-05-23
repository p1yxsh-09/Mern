function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

hex(255, 100, 125);
rgb(255, 100, 125);

// now if i want an object to convert back n forth to rgb back to hex without havinf to pass in numbers eaach time , for that we can use a factory function
// so this factory function will return an object in which the rgb and hex methods will be stored and it stores the values of r, g, b as values or properties of the object

function createColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.hex = function () {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  color.rgb = function () {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  };
  return color;
}

const firstColor = new createColor(255, 100, 125);

firstColor.hex(); // "#ff647d"
firstColor.rgb(); // "rgb(255, 100, 125)"
