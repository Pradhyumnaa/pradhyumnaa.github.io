var four_letter;
var five_letter;
var six_letter;

var letters_for_music1;

var input;

var writer;

var timerValue = 20;

var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7;

var whichSong;

function preload() {
    four_letter = loadStrings('4_letter_words.txt');
    five_letter = loadStrings('5_letter_words.txt');
    six_letter = loadStrings('6_letter_words.txt');
    
    song1 = loadSound('Lento.mp3');
    song2 = loadSound('Larghetto.mp3');
    song3 = loadSound('AndanteModerato.mp3');
    song4 = loadSound('Andante.mp3');
    song5 = loadSound('Allegretto.mp3');
    song6 = loadSound('Allegro-Vivace.mp3');
    song7 = loadSound('Presto.mp3');
}

function setup() {
	createCanvas(windowWidth,windowHeight);
    noFill();
	stroke(0);
	strokeWeight(2);
    
    letters_for_music1 = [random(four_letter), random(four_letter), random(four_letter), random(four_letter), random(five_letter), random(five_letter), random(five_letter), random(five_letter), random(six_letter), random(six_letter), random(six_letter), random(six_letter)];
    
    writer = createWriter("musicResults.txt");
    
    writer.print("Expected:");
    writer.print(letters_for_music1);
}

function draw() {
    createStartButton1();
    createStartButton2();
    createStartButton3();
    createStartButton4();
    createStartButton5();
    createStartButton6();
    createStartButton7();
}

function music1Text(){
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    
    whichSong = 1;
    
    song1.play();
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
    
    writer.write("Lento (40–60 BPM)");
    writer.write("");
    
}

function music2Text(){
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    
    whichSong = 2;
    
    song2.play();
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
    
    writer.write("Larghetto (60-66 BPM)");
    writer.write("");
    
    
    
}

function music3Text(){
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    
    whichSong = 3;
    
    song3.play();
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
    
    writer.write("Andante Moderato (108–120 BPM)");
    writer.write("");
    
}

function music4Text(){
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    
    whichSong = 4;
    
    song4.play();
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
    
    writer.write("Andante (76–108 BPM)");
    writer.write("");
    
}

function music5Text(){
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    
    whichSong = 5;
    
    song5.play();
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
    
    writer.write("Allegretto (98–109 BPM)");
    writer.write("");
    
}

function music6Text(){
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    
    whichSong = 6;
    
    song6.play();
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
    
    writer.write("Allegro-Vivace (120–176 BPM)");
    writer.write("");
    
}

function music7Text(){
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    
    whichSong = 7;
    
    song7.play();
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
    
    writer.write("Presto (168–200 BPM)");
    writer.write("");
    
}

function createStartButton1(){
    noStroke();
    fill(0,0,0);
    textSize(20);
    var introText = text("In this experiment, I aim to find out what type of Piano Tempo aids in Short Term Memory. When you click a tempo, you will be taken to a page with 12 randomly generated words. Your aim is to try and remember as much as you can within 15 seconds. Once the timer is up, you will be taken to a prompt where you will type in as many words as you remember. When you click submit, you will receive the results. Good Luck!!", width/2 - 600, 300,500,500);
    
    button1 = createButton('Lento');
    button1.position(width/2,height/2 - 150);
    button1.mousePressed(music1Text);
    noLoop();
    
}

function createStartButton2(){
    noStroke();
    fill(0,0,0);
    textSize(20);

    
    button2 = createButton('Larghetto');
    button2.position(width/2,height/2 - 100);
    button2.mousePressed(music2Text);
    noLoop();
    
}

function createStartButton3(){
    noStroke();
    fill(0,0,0);
    textSize(20);
    
    button3 = createButton('Andante-Moderato');
    button3.position(width/2,height/2 - 50);
    button3.mousePressed(music3Text);
    noLoop();
    
}

function createStartButton4(){
    noStroke();
    fill(0,0,0);
    textSize(20);
    
    
    button4 = createButton('Andante');
    button4.position(width/2,height/2);
    button4.mousePressed(music4Text);
    noLoop();
    
}

function createStartButton5(){
    noStroke();
    fill(0,0,0);
    textSize(20);
    
    
    button5 = createButton('Allegretto');
    button5.position(width/2,height/2+50);
    button5.mousePressed(music5Text);
    noLoop();
    
}

function createStartButton6(){
    noStroke();
    fill(0,0,0);
    textSize(20);
   
    
    button6 = createButton('Allegro-Vivace');
    button6.position(width/2,height/2 +100);
    button6.mousePressed(music6Text);
    noLoop();
    
}

function createStartButton7(){
    noStroke();
    fill(0,0,0);
    textSize(20);
    
    button7 = createButton('Presto');
    button7.position(width/2,height/2 + 150);
    button7.mousePressed(music7Text);
    noLoop();
    
}

function userInputMusic(){
    if(whichSong == 1){
        song1.stop();
    } else if (whichSong == 2){
        song2.stop();
    } else if (whichSong == 3){
        song3.stop();
    } else if (whichSong == 4){
        song4.stop();
    } else if (whichSong == 5){
        song5.stop();
    } else if (whichSong == 6){
        song6.stop();
    } else {
        song7.stop();
    }
    
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
    
    writer.print("Actual For Music:");
    writer.print(userText);
    writer.close();
}

function timeIt() {
    timerValue--;
    
    if(timerValue < 0 && timerValue > -30){
        //Write timer value
        //song.setLoop(true);
        var x = timerValue * -1;
        background(255,255,255);
        text(x,width/2,height/2);
    }
    
    if (timerValue == -30){
        userInputMusic();
    }
}