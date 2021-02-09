var angle;
function setup() {
    createCanvas(1920, 1080);
    resetSketch();
    
}

function resetSketch() {
    initializeFields();
    background(color(0xc7, 0x89, 0x04));
    noStroke();
    fill(color(0xff, 0xf5, 0xd9));
}

function initializeFields() {
    angle = 0;
}

function draw() {
    // Draw only when mouse is pressed
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
    if (mouseIsPressed == true) {
        angle += 1;
        var val = tan(radians(angle)) * 1000;
        for (var a = 0; a < 1000; a += 40) {
            var xoff = cos(radians(a)) * val;
            var yoff = sin(radians(a)) * val;
            fill(color(0xff, 0xe7, 0xa1));
            arc(mouseX + xoff, mouseY + yoff, val, val, PI + xoff, TWO_PI + xoff);
        }
    }
}

// Call the variableEllipse() method and send it the
// parameters for the current mouse position
// and the previous mouse position
// The simple method variableEllipse() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly
function variableEllipse(x, y, px, py) {
    var speed = abs(x - px) + abs(y - py);
    stroke(150, speed, 0);
    strokeWeight(1.5);
    arc(x, y, speed, speed, PI + x, TWO_PI + x);
}

// press any key to restart sketch
function keyPressed() {
    resetSketch();
}