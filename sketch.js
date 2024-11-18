function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(232,221,224); 
  
  ambientLight(150);
  directionalLight(255, 255, 255, 0.5, -1, -0.5);

  rotateX(-PI / 6);
  rotateY(frameCount * 0.01);

  // Material untuk warna kayu
  fill(245,120,157); 
  noStroke();

  // Kaki depan kiri
  push();
  translate(-50, 50, 50);
  box(10, 100, 10); 
  pop();

  // Kaki depan kanan
  push();
  translate(50, 50, 50); 
  box(10, 100, 10);
  pop();

  // Kaki belakang kiri
  push();
  translate(-50, 50, -50); 
  box(10, 100, 10);
  pop();

  // Kaki belakang kanan
  push();
  translate(50, 50, -50); 
  box(10, 100, 10);
  pop();

  // Tempat duduk
  push();
  translate(0, 0, 0);
  box(120, 10, 120);
  pop();

  push();
  translate(0, -50, -50); 
  box(120, 100, 10);
  pop();
}
