var four_letter;
var five_letter;
var six_letter;

var letters_for_blue;

var input;
var button;

var writer;

var timerValue = 15;

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
    
    letters_for_blue = [random(four_letter), random(four_letter), random(four_letter), random(four_letter), random(five_letter), random(five_letter), random(five_letter), random(five_letter), random(six_letter), random(six_letter), random(six_letter), random(six_letter)];
    
    writer = createWriter("blueResults.txt");
    
    writer.print("Expected for Blue:");
    writer.print(letters_for_blue);
}

function draw() {
    blueText();
}

function blueText(){
    background(255,255,255);
    fill('blue');
    noStroke();
    textSize(21);
    text(letters_for_blue[0],width/2,100);
    text(letters_for_blue[4],width/2,150);
    text(letters_for_blue[8],width/2,200);
    
    text(letters_for_blue[1],width/2,250);
    text(letters_for_blue[5],width/2,300);
    text(letters_for_blue[9],width/2,350);
    
    text(letters_for_blue[2],width/2,400);
    text(letters_for_blue[6],width/2,450);
    text(letters_for_blue[10],width/2,500);
    
    text(letters_for_blue[3],width/2,550);
    text(letters_for_blue[7],width/2,600);
    text(letters_for_blue[11],width/2,650);
    
    if (timerValue < 1){
        userInputBlue();
    }
}

function userInputBlue(){
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
    
    writer.print("Actual For Blue:");
    writer.print(userText);
    writer.close();
    window.open('green.html', "_self");
    
}

function timeIt() {
    if (timerValue > 0) {
        timerValue--;
    }
}