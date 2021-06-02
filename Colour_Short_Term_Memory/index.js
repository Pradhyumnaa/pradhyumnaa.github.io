var button;

function setup() {
	createCanvas(windowWidth,windowHeight);
    noFill();
	stroke(0);
	strokeWeight(2);
}

function draw() {
    createStartButton();
    
}

function redText(){
    window.open('red.html', "_self");
}

function createStartButton(){
    noStroke();
    fill(0,0,0);
    textSize(20);
    var introText = text("In this experiment, I aim to find out what text colour aids in Short Term Memory. When you click start, you will be taken to a page with 12 randomly generated words. Your aim is to try and remember as much as you can within 15 seconds. Once the timer is up, you will be taken to a prompt where you will type in as many words as you remember. When you click submit, you will receive the results and will be taken to the next colour. Good Luck!!", width/2 - 600, 300,500,500);
    button2 = createButton('Start');
    button2.position(width/2,height/2);
    button2.mousePressed(redText);
    noLoop();
}