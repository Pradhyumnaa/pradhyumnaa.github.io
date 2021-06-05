var four_letter;
var five_letter;
var six_letter;

var letters_for_red;

var input;
var button;

var writer;

var timerValue = 20;
var waitTimer = 35;

function preload() {
    four_letter = loadStrings('4_letter_words.txt');
    five_letter = loadStrings('5_letter_words.txt');
    six_letter = loadStrings('6_letter_words.txt');
}

function setup() {
	createCanvas(windowWidth,windowHeight);
    noFill();
	stroke(0);
	strokeWeight(2);
    
    setInterval(timeIt, 1000);
    
    setInterval(waittimeIt,1000);
    
    letters_for_red = [random(four_letter), random(four_letter), random(four_letter), random(four_letter), random(five_letter), random(five_letter), random(five_letter), random(five_letter), random(six_letter), random(six_letter), random(six_letter), random(six_letter)];
    
    writer = createWriter("redResults.txt");
    
    writer.print("Expected for Red:");
    writer.print(letters_for_red);
    writer.print("");
}

function draw() {
    redText();
}

function redText(){
    background(255,255,255);
    fill('red');
    noStroke();
    textSize(21);
    text(letters_for_red[0],width/2,100);
    text(letters_for_red[4],width/2,150);
    text(letters_for_red[8],width/2,200);
    
    text(letters_for_red[1],width/2,250);
    text(letters_for_red[5],width/2,300);
    text(letters_for_red[9],width/2,350);
    
    text(letters_for_red[2],width/2,400);
    text(letters_for_red[6],width/2,450);
    text(letters_for_red[10],width/2,500);
    
    if (timerValue < 1){
        drawTimer();
    }
}

function userInputRed(){
    background(255,255,255);
    input = createInput();
    input.position(width/2 -250 ,height/2 -250);
    input.size(500,500);
    button = createButton('Submit');
    button.position(input.x + input.width/2 - 20, 65);
    
    button.mousePressed(buttonClicked);
    
    noLoop();
}

function buttonClicked(){
    var userText = input.value();
    writer.print("Start Time");
    writer.print(hour() + ":" + minute());
    writer.print("");
    
    
    writer.print("Actual For Red:");
    writer.print(userText);
    
    writer.print("");
    writer.print("End Time");
    writer.print(hour() + ":" + minute());
    
    writer.close();
    window.open('mailto:pradhyumnaag666@gmail.com?subject=Short%20Term%20Memory%20-%20Text%20Colour%20Experiment%20Results&body=Please%20attach%20the%204%20text%20files%20you%20received%20while%20completing%20the%20experiment.%20Thank%20You%20so%20much%20for%20helping%20me%20out!%20%3A)');
    
    window.open('https://pradhyumnaa.github.io/cognitiveIndex', "_self");
    
}

function timeIt() {
    if (timerValue > 0) {
        timerValue--;
    }
}

function drawTimer(){
    background(255,255,255);
    text(waitTimer,width/2,height/2);
    //setInterval(waittimeIt,1000);
    
    if(waitTimer<1){
        userInputRed();
    }
}

function waittimeIt(){
    if(waitTimer >0){
        waitTimer--;
    }
}