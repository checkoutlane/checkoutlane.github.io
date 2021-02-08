// adapted from Shape Bend by Michael Pinn https://www.openprocessing.org/sketch/166967 

var bendAmount;

function setup() {
    initializeFields();
    createCanvas(windowWidth, windowHeight);
    fill(255, 100);
    noStroke();
}

function draw() {
    background(245, 181, 7);
    for (var i = 0; i < 360; i++) {
        var x = width / 2 + sin(radians(i)) * 300;
        var y = height / 2 + cos(radians(i)) * 300;
        /* Gives the circle a liquid appearence. */
        var d = map(dist(mouseX, mouseY, x, y), -150, 150, -bendAmount / 2 + 3, bendAmount);
        push();
        translate(x, y);
        /* Rotate to face the mouse coords. */
        var angle = atan2(mouseX - x, mouseY - y);
        rotate(radians(900) - angle);
        /* By pushing the ellipse by "-bendAmount", the program rotates it on that coord, giving the split effect. */
        ellipse(-bendAmount, 0, d, d);
        pop();
    }
}

function initializeFields() {
    bendAmount = 100;
}

