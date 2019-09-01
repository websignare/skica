x=50;
var y=0;
var canvasHeight=0;
var squareHeight=40;
var rightEdgeReached=false;
function setup() {
	canvasHeight=windowHeight/2;
	y=canvasHeight/2-squareHeight/2;
	createCanvas(windowWidth, canvasHeight);

}
function draw() {
	background(14,20,21);

	stroke(255);
	strokeWeight(1);
	line(0,canvasHeight/2,x,y+squareHeight/2);

	noStroke();
	fill(0,random(150,255),0);
	rect(x,y,squareHeight,squareHeight);

	console.log(windowWidth)
	console.log((x-squareHeight)<windowWidth)

	if(x<(windowWidth-squareHeight) && !rightEdgeReached){
		x = x + random(-5,10);
	} else {
		rightEdgeReached=true;
	}
	if(x<0){
		rightEdgeReached=false;
	}
	if(rightEdgeReached){
		x = x - random(10);
	}

	

}