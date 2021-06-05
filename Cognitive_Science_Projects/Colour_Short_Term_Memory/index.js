function setup() {
	createCanvas(windowWidth,windowHeight);
    noFill();
	stroke(0);
	strokeWeight(2);
}

function draw() {
    createStartButton();
    
}

function blackText(){
    window.open('black.html', "_self");
}

function redText(){
    window.open('red.html', "_self");
}

function blueText(){
    window.open('blue.html', "_self");
}

function greenText(){
    window.open('green.html', "_self");
}

function createStartButton(){
    noStroke();
    fill(0,0,0);
    textSize(20);
    var introText = text("In this experiment, I aim to find out what text colour aids in Short Term Memory. Click on a colour and you will be taken to a page with 9 words, written in the text colour you chose. You will have 20 seconds to memorise as many words as you can. After the 20 seconds, there is a 15 second down timer where you can try to recall all the words you have seen. Then, you will be taken to a prompt where you will be asked to write as many words as you remember. Good Luck!", width/2 - 600, 300,500,500);
    
    button2 = createButton('Black');
    button2.position(width/2,height/2);
    button2.mousePressed(blackText);
    
    button3 = createButton('Red');
    button3.position(width/2,height/2+50);
    button3.mousePressed(redText);
    
    button4 = createButton('Blue');
    button4.position(width/2,height/2+100);
    button4.mousePressed(blueText);
    
    button5 = createButton('Green');
    button5.position(width/2,height/2-50);
    button5.mousePressed(greenText);
    
    noLoop();
}