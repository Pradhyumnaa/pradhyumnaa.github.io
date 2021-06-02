var four_letter;
var five_letter;
var six_letter;

var letters_for_black;

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
    
    letters_for_black = [random(four_letter), random(four_letter), random(four_letter), random(four_letter), random(five_letter), random(five_letter), random(five_letter), random(five_letter), random(six_letter), random(six_letter), random(six_letter), random(six_letter)];
    
    writer = createWriter("blackResults.txt");
    
    writer.print("Expected for Black:");
    writer.print(letters_for_black);
}

function draw() {
    blackText();
}

function blackText(){
    background(255,255,255);
    fill('black');
    noStroke();
    textSize(21);
    text(letters_for_black[0],width/2,100);
    text(letters_for_black[4],width/2,150);
    text(letters_for_black[8],width/2,200);
    
    text(letters_for_black[1],width/2,250);
    text(letters_for_black[5],width/2,300);
    text(letters_for_black[9],width/2,350);
    
    text(letters_for_black[2],width/2,400);
    text(letters_for_black[6],width/2,450);
    text(letters_for_black[10],width/2,500);
    
    text(letters_for_black[3],width/2,550);
    text(letters_for_black[7],width/2,600);
    text(letters_for_black[11],width/2,650);
    
    if (timerValue < 1){
        userInputBlack();
    }
}

function userInputBlack(){
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
    
    writer.print("Actual For Black:");
    writer.print(userText);
    writer.close();
    window.open('red.html', "_self");
    
}

function timeIt() {
    if (timerValue > 0) {
        timerValue--;
    }
}