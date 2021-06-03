var four_letter;
var five_letter;
var six_letter;

var letters_for_green;

var input;
var button;

var writer;

var timerValue = 25;
var waitTimer = 45;

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
    
    letters_for_green = [random(four_letter), random(four_letter), random(four_letter), random(four_letter), random(five_letter), random(five_letter), random(five_letter), random(five_letter), random(six_letter), random(six_letter), random(six_letter), random(six_letter)];
    
    writer = createWriter("greenResults.txt");
    
    writer.print("Expected for Green:");
    writer.print(letters_for_green);
    writer.print("");
}

function draw() {
    greenText();
}

function greenText(){
    background(255,255,255);
    fill('green');
    noStroke();
    textSize(21);
    text(letters_for_green[0],width/2,100);
    text(letters_for_green[4],width/2,150);
    text(letters_for_green[8],width/2,200);
    
    text(letters_for_green[1],width/2,250);
    text(letters_for_green[5],width/2,300);
    text(letters_for_green[9],width/2,350);
    
    text(letters_for_green[2],width/2,400);
    text(letters_for_green[6],width/2,450);
    text(letters_for_green[10],width/2,500);
    
    text(letters_for_green[3],width/2,550);
    text(letters_for_green[7],width/2,600);
    text(letters_for_green[11],width/2,650);
    
    if (timerValue < 1){
        drawTimer();
    }
}

function userInputGreen(){
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
    
    
    writer.print("Actual For Green:");
    writer.print(userText);
    
    writer.print("");
    writer.print("End Time");
    writer.print(hour() + ":" + minute());
    
    writer.close();
    window.open('mailto:pradhyumnaag666@gmail.com?subject=Short%20Term%20Memory%20-%20Text%20Colour%20Experiment%20Results&body=Please%20attach%20the%204%20text%20files%20you%20received%20while%20completing%20the%20experiment.%20Thank%20You%20so%20much%20for%20helping%20me%20out!%20%3A)');
    
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
        userInputGreen();
    }
}

function waittimeIt(){
    if(waitTimer >0){
        waitTimer--;
    }
}