var plantX = 250;
var plantY = 250;
var petalW = 25;
var plantH = 200;

function setup() {
	createCanvas(500, 500);
	background(0);
}

function draw() {

	background(0);
	noStroke();
	fill(0, 204, 0);
	rect(plantX,plantY, 10, plantH);


	fill(188, 66, 245);
 

	ellipse(plantX,plantY-50, petalW, [100])
	ellipse(plantX+3,plantY+60, petalW, [100])
	ellipse(plantX+60,plantY, 100, [petalW])
	ellipse(plantX-60,plantY, 100, [petalW])


	strokeWeight(2);
	stroke(51);

	fill(255, 255, 255);
	ellipse(plantX,plantY,50,50);

	strokeWeight(1);
	stroke(51);
	fill(242, 240, 104);
	ellipse(plantX-9,plantY-5,10,10);
	fill(242, 240, 104);
	ellipse(plantX+9,plantY-5,10,10);


	arc(plantX,plantY+5, 20, 20, 0, PI, OPEN);

}

	function mouseMoved(){
		plantH = plantH +1;
		plantY = plantY -1;
	}

	function mouseClicked(){
		plantH = 200;
		plantY = 250;
	}


class Flowers{
	constructor(){
		this.x = 100;
		this.y = 100;
		this.h = 100;
		this.w = 100;
	}

	display(){

		noStroke();
		fill(188, 66, 245);
		ellipse(this.x,this.y-50, this.w, [this.h])
		ellipse(this.x+3,this.y+60, this.w, [this.h])
		ellipse(this.x+60,this.y, this.h, [this.w])
		ellipse(this.x-60,this.y, this.h, [this.w])

	}

}


// function mouseMoved() {
// 	plantX = mouseX
// 	plantY = mouseY

// 	}	