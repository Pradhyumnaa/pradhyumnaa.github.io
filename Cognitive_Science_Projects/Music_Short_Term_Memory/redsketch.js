var four_letter;
var five_letter;
var six_letter;

var letters_for_music1;

var input;
var button;

var writer;

var timerValue = 3;

var song;

function preload() {
    four_letter = loadStrings('4_letter_words.txt');
    five_letter = loadStrings('5_letter_words.txt');
    six_letter = loadStrings('6_letter_words.txt');
    
    song = loadSound('gamesong.mp3');
}

function setup() {
	createCanvas(windowWidth,windowHeight);
    noFill();
	stroke(0);
	strokeWeight(2);
    
    letters_for_music1 = [random(four_letter), random(four_letter), random(four_letter), random(four_letter), random(five_letter), random(five_letter), random(five_letter), random(five_letter), random(six_letter), random(six_letter), random(six_letter), random(six_letter)];
    
    writer = createWriter("music1Results.txt");
    
    writer.print("Expected for Music 1:");
    writer.print(letters_for_music1);
}

function draw() {
    createStartButton();
}

function music1Text(){
    button2.remove();
    
    song.play();
    setInterval(timeIt, 1000);
    
    background(255,255,255);
    fill('black');
    noStroke();
    textSize(21);
    text(letters_for_music1[0],width/2,100);
    text(letters_for_music1[4],width/2,150);
    text(letters_for_music1[8],width/2,200);
    
    text(letters_for_music1[1],width/2,250);
    text(letters_for_music1[5],width/2,300);
    text(letters_for_music1[9],width/2,350);
    
    text(letters_for_music1[2],width/2,400);
    text(letters_for_music1[6],width/2,450);
    text(letters_for_music1[10],width/2,500);
    
    text(letters_for_music1[3],width/2,550);
    text(letters_for_music1[7],width/2,600);
    text(letters_for_music1[11],width/2,650);
    
}

function userInputMusic1(){
    song.stop();
    
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
    
    writer.print("Actual For Music 1:");
    writer.print(userText);
    writer.close();
    window.open('blue.html', "_self");
    
}

function timeIt() {
    timerValue--;
    
    if (timerValue == 0){
        userInputMusic1();
    }
}

function createStartButton(){
    noStroke();
    fill(0,0,0);
    textSize(20);
    var introText = text("In this experiment, I aim to find out what text colour aids in Short Term Memory. When you click start, you will be taken to a page with 12 randomly generated words. Your aim is to try and remember as much as you can within 15 seconds. Once the timer is up, you will be taken to a prompt where you will type in as many words as you remember. When you click submit, you will receive the results and will be taken to the next colour. Good Luck!!", width/2 - 600, 300,500,500);
    
    button2 = createButton('Start');
    button2.position(width/2,height/2);
    button2.mousePressed(music1Text);
    noLoop();
    
}