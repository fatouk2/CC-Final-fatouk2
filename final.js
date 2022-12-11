let x = 100;
let y = 100;
let scenes = 0;
let select1 = false;
let select2 = false;
let select3 = false;
let studentArray = [];
let yes = 0;
let no = 0;
function preload(){
	auditorium = loadImage('auditorium.jpeg');
}

function setup() {
	createCanvas(800,800);
	startScene();
	for(i = 0; i < 30; i++){
		studentArray.push(new firstYears(i));
	}
}

function draw() {
	if(scenes == 0){
		
		characterPick();
	}
	
	if(scenes == 1){
		clear();
	//	image(auditorium,100,100, 800, 800);
		///-----draw jade-----//
		if (select1 == true) { // code for when jade is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(auditorium,100,100, 800, 800);
				for(j=0;j<30;j++){
  studentArray[j].show(); // this is the array for the students
}
			text('Today is Jades first day of highschool and shes supper excited', 500,150);
			Jade(400,400);
		}
		if (select2 == true) { // code for when sasha is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(auditorium,100,100, 800, 800);
				for(j=0;j<30;j++){
  studentArray[j].show(); // this is the array for the students
}
			Sasha(400,400);
		}
		if (select3 == true) { // code for when mini is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(auditorium,100,100, 800, 800);
				for(j=0;j<30;j++){
  studentArray[j].show(); // this is the array for the students
}
			Mini(400,400);
		}
	}
	
	
}

function startScene(){ // the buttons that are used to pick the character you want
	select1button = createButton('Select Jade');
	  select1button.style('font-size', '30px');
		select1button.style('color:blue');
	select1button.style('background-color', '#ffff3f');
		select1button.mousePressed(selectOne);
	select1button.position(500,100);
	select2button = createButton('Select Sasha');
	select2button.mousePressed(selectTwo);
	select2button.position(500,300);
	select3button = createButton('Select Mini');
	select3button.mousePressed(selectThree);
	select3button.position(500,500);
}

function Jade(x,y){
	fill(255);
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
	fill(255);
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
	fill(255);
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

function selectOne(){ // when Jade is picked
	select1 = true;
	select2 = false;
	select3 = false;
}

function selectTwo(){ // when Sasha is picked
	select2 = true;
	select1 = false;
	select3 = false;
}

function selectThree(){ // when Mini is picked
	select3 = true;
	select1 = false;
	select2 = false;
}


function characterPick(){
	clear(); 
	if (select1 == true) {
		Jade(100,100);
	}
	
	if(select2 == true){
	Sasha(100,300);
	}
	if(select3 == true){
	Mini(300,300);
	}
	
}
function Students(x,y){ // code for random students
	circle(x+100,y+100,70);
	rect(x+60,y+140,80,120,10); 
}

class firstYears{ // this is a class I made for the students
	
	constructor(){
		this.x = random(0,800);
		this.y = 400;
	}
	show(){
		fill(52,219,10);
		strokeWeight(3);
		stroke(0);
		Students(this.x,this.y);
	}
	
}

function keyPressed(){ // controls the scenes
	if(keyCode == ENTER){
		scenes += 1;
	}
}