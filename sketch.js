function setup() {
  canvas = createCanvas(windowWidth - 30, windowHeight - 100);
  canvas.parent("canvas");
  background(255);
  strokeColorPicker = createColorPicker("#F8A488");
  strokeSlider = createSlider(1, 50, 3, 1);
  strokeSlider.id("strokeSliderID");
  strokeSlider.parent("strokeSlider");
  strokeColorPicker.id("strokeColorID");
  strokeColorPicker.parent("strokeColor");
}

function draw() {
  stroke(strokeColorPicker.color());
  strokeWeight(strokeSlider.value());
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth - 30, windowHeight - 100);
  background(255);
}
