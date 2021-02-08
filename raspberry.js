let time = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255);
}

function draw(){
  background(255, 180, 180);
  for(let i = 0; i < 360; i+=1){
    let x = cos(radians(i)) * 200 + width / 2;
    let y = sin(radians(i)) * 400 + height / 2;
    let w = sin(radians(time+i )) * 800;
    w = abs(w);

    let col = map(i,0, 100, 0, 255);
    fill(col,col,col, 150);

    noStroke();
    fill(col, 30, 50);
    ellipse(x, y, w, w);
  }
  time++;
}