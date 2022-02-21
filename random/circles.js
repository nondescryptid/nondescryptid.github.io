
let radius = 0 
let timer = 100
let nextChange = timer
let radius2 = 0
let grow = true
let grow2 = true
let growAmount = 0

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('circlesCanvas');
}

function draw() {
  noStroke()
  background(248, 240, 227);
  fill(61, 85, 136, 70)
  circle1(1);

  if (millis() > 2000){
    fill(241,80,96, 70)
    circle2(1)
  }
  
  
}

function circle1(growAmount){
  circle(200,200,radius)
  if (radius > 400) {
    grow = false
  }
    if (radius < 0){
    grow = true
    
  }
  if (grow == true) {
    radius += growAmount
  } else {
     radius -= growAmount
  }
}


function circle2(growAmount){
  circle(200,200,radius2)
  if (radius2 > 400) {
    grow2 = false
  }
    if (radius2 < 0){
    grow2 = true
    
  }
  if (grow2 == true) {
    radius2 += growAmount
  } else {
     radius2 -= growAmount
  }
}


// When x millis have elapsed, create a new expanding circle. 
// 