

function setup() {
    var canvas = createCanvas(200, 200);
    canvas.parent('p5canvas');
  } 
  
  function draw(){
    background(255,182,193);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
      translate(p5.Vector.fromAngle(180, 0));
  
    if (mouseIsPressed === true) {
      torus(40, 20);
  } else {
      torus(40, 15);
  }
  }
  
  
  