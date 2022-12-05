let x = 100;
let y = 100;
let select1;
let select2;
let select3;
function preload(){
	
}

function setup() {
	createCanvas(800,800);
	textSize = (50);
	select1 = createButton('Select Jade');
	select1.position(500,100);
	select2 = createButton('Select Sasha');
	select2.position(500,300);
	select3 = createButton('Select Mini');
	select3.position(500,500);
}

function draw() {
	Jade(100,100);
	Sasha(100,300);
	Mini(300,300);
}

function Jade(x,y){
  //rect(160,164,80,100,30);
	 rect(x+60,y+64,80,100,30); //hair
//  circle(200,200,70);
	circle(x+100,y+100,70); //head
  //rect(176,165,50,20);
	 rect(x+76,y+65,50,20); //bangs
 // rect(160,240,80,120,10);
	 rect(x+60,y+140,80,120,10); //body
}

function Sasha(x,y){
	//triangle(200,140,225,175,270,170);
	triangle(x+100,y+40,x+125,y+75,x+170,y+70); // ponytail
  //circle(200,200,70);
	circle(x+100,y+100,70); //head
  //circle(225,175,10);
	circle(x+125,y+75,10); //barrett
 // rect(160,240,80,120,10);
	rect(x+60,y+140,80,120,10); //body
}

function Mini(x,y){
//	circle(200,200,70);//head
	circle(x+100,y+100,70);//head
  //circle(225,175,10);//barrett
	 circle(x+125,y+75,10);//barrett
 // circle(243,175,30); //hair
	 circle(x+143,y+75,30); //hair
  //circle(243,200,30); //hair
	circle(x+143,y+100,30); //hair
  //circle(173,175,10);//barrett
	 circle(x+73,y+75,10);//barrett
//  circle(156,175,30); //hair
	circle(x+56,y+75,30); //hair
 // circle(156,200,30); //hair
	circle(x+56,y+100,30); //hair
//  rect(160,240,80,120,10); //body
	rect(x+60,y+140,80,120,10); //body
}

function Students(){
	circle(x+100,y+100,70);
	rect(x+60,y+140,80,120,10); 
}