var diam1=0

function setup() {
	createCanvas(500, 500); //This is the canvas.
	background
}

//This is were the draw function happens on repeat
function draw() {
  background(219,161,161); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,20,20); // center of canvas, 20px dia

}
//this is where the shapes and circles happens 
function draw() {
	background(219,161,161); 
	fill("#add8e6");
	strokeWeight(5);
	ellipse(50,100,diam1,diam1);
// where the mouse is moving	
	fill("#ff0000");
	ellipse(mouseX,mouseY,20,20);
	textSize(20);
	ellipse(20,20);
	textFont("Georgia");
	textAlign(CENTER);
	text("How are you today?",100,70);
}
//  where the variables expand 
function mousePressed() {
	diam1=diam1+5;
	if (diam1>50){
		diam1=0;
	}
	

}