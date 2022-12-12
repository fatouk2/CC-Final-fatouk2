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
	lunchroom = loadImage('lunchroom.webp');
	JBedroom = loadImage('JBedroom.jpeg'); //jades bedroom
	SBedroom = loadImage('SBedroom.jpeg'); // sashas bedroom
	MBedroom = loadImage('MBedroom.jpeg');// Minis bedroom
	field = loadImage('soccer field.webp');
}

function setup() {
	createCanvas(800,800);
	startScene();
	for(i = 0; i < 30; i++){
		studentArray.push(new firstYears(i));
	}
	for(i = 0; i < 5; i++){
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
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(17);
			text('Today is Jades first day of highschool and shes supper excited to finally be a highschooler', 100,150);
			Jade(350,400);
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
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(17);
			text('Today is Sasha first day of highschool and shes supper excited to finally be a highschooler', 100,150);
			Sasha(350,400);
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
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(17);
			text('Today is Mini first day of highschool and shes supper excited to finally be a highschooler', 100,150);
			Mini(350,400);
		}
	}
	if(scenes == 2){
		if (select1 == true) { // code for when jade is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(lunchroom,100,100, 800, 800);
				for(j=0;j<5;j++){
  studentArray[j].show(); // this is the array for the students
}
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(15);
			text('Jades first day of school was a success and she was able to met some really awesome people', 100,150);
			Jade(350,400);
		}
		if (select2 == true) { // code for when sasha is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(lunchroom,100,100, 800, 800);
				for(j=0;j<5;j++){
  studentArray[j].show(); // this is the array for the students
}
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(15);
			text('Sashas first day of school was a success and she was able to met some really awesome people', 100,150);
			Sasha(350,400);
		}
		if (select3 == true) { // code for when mini is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(lunchroom,100,100, 800, 800);
		for(j=0;j<5;j++){
  studentArray[j].show(); // this is the array for the students
}
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(15);
			text('Minis first day of school was a success and she was able to met some really awesome people', 100,150);
			Mini(350,400);
		}
		
	}
	if(scenes == 3){
		if (select1 == true) { // code for when jade is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(JBedroom,100,100, 800, 800);
				
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(13);
			// thought bubble
			circle(500,440,10);
			circle(520,430,20);
			circle(540,410,30);
			circle(670,350,230);
			fill(0);
			textSize(12);
			text('if I do well hopefully I can get into NYU!!', 570,350);
			fill(255);
			textSize(15)
			text('After Jades First Day she thought to herself of the endless possibilites of highschool', 100,150);
			Jade(350,400);
		}
		if (select2 == true) { // code for when sasha is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(SBedroom,100,100, 800, 800);
			
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(15);
			// thought bubble
			circle(500,440,10);
			circle(520,430,20);
			circle(540,410,30);
			circle(670,350,230);
			fill(0);
			textSize(12);
			text('if I do well hopefully I can get into NYU!!', 570,350);
			fill(255);
			textSize(15)
			text('After Sasha First Day she thought to herself of the endless possibilites of highschool', 100,150);
			Sasha(350,400);
		}
		if (select3 == true) { // code for when mini is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(MBedroom,100,100, 800, 800);
				
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(15);
			// thought bubble
			circle(500,440,10);
			circle(520,430,20);
			circle(540,410,30);
			circle(670,350,230);
			fill(0);
			textSize(12);
			text('if I do well hopefully I can get into NYU!!', 570,350);
			fill(255);
			textSize(15)
			text('After Minis First Day she thought to herself of the endless possibilites of highschool', 100,150);
			Mini(350,400);
		}
		
	}
	if(scenes == 4){
		
	if (select1 == true) { // code for when jade is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(field,100,100, 800, 800);
				Mini(550,200);
			Sasha(650,200);
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(13);
			text('Jade always had a passion for soccer. During recess she found herself getting lost in the game', 100,150);
			Jade(x,500);
			x+=3;
			fill(255);
			circle(x+300,700,50);
			x+=3;
		}
		if (select2 == true) { // code for when sasha is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(field,100,100, 800, 800);
			Jade(550,200);
			Mini(650,200);
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(15);
			text('Sasha always had a passion for soccer. During recess she found herself getting lost in the game', 100,150);
			Sasha(x,500);
			x+=3;
			fill(255);
			circle(x+300,700,50);
			x+=3;
		}
		if (select3 == true) { // code for when mini is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(field,100,100, 800, 800);		
			Jade(550,200);
			Sasha(650,200);
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(15);
			text('Mini always had a passion for soccer. During recess she found herself getting lost in the game', 100,150);
			Mini(x,500);
			x+=3;
			fill(255);
			circle(x+300,700,50);
			x+=3;
		}
	
	}
	if(scenes == 5){
			if (select1 == true) { // code for when jade is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(field,100,100, 800, 800);
				
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(13);
			text('After Jades First Day she thought to herself of the endless possibilites of highschool', 100,150);
			Jade(350,400);
		}
		if (select2 == true) { // code for when sasha is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(field,100,100, 800, 800);
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(15);
			text('After Sasha First Day she thought to herself of the endless possibilites of highschool', 100,150);
			Sasha(350,400);
			Coach(500,400);
		}
		if (select3 == true) { // code for when mini is selected
			select1button.hide();
			select2button.hide();
			select3button.hide();
			clear();
			image(field,100,100, 800, 800);
				
			fill(0,0,0,50);
			rect(100,100,700,100,30);
			fill(255);
			textSize(15);
			text('After Minis First Day she thought to herself of the endless possibilites of highschool', 100,150);
			Mini(350,400);
		}
		
		
	}
	
	
}

function startScene(){ // the buttons that are used to pick the character you want
	select1button = createButton('Select Jade');
	  select1button.style('font-size', '20px');
		select1button.style('color:purple');
	select1button.style('background-color', '#4DD3FF');
		select1button.mousePressed(selectOne);
	select1button.position(200,100);
	select2button = createButton('Select Sasha');
	select2button.style('font-size', '20px');
		select2button.style('color:blue');
	select2button.style('background-color', '#8F96FF')
	select2button.mousePressed(selectTwo);
	select2button.position(400,100);
	select3button = createButton('Select Mini');
	select3button.style('font-size', '20px');
		select3button.style('color:pink');
	select3button.style('background-color', '#BA3DFF')
	select3button.mousePressed(selectThree);
	select3button.position(600,100);
}

function Jade(x,y){
	noStroke();
	fill(0);
	 rect(x+60,y+64,80,100,30); //hair
	fill(205, 127, 50);
	circle(x+100,y+100,70); //head
	fill(0);
	 rect(x+76,y+65,50,20); //bangs
	fill(254,67,132);
	 rect(x+60,y+140,80,120,10); //body
}

function Sasha(x,y){
	noStroke();
	fill(110, 38, 14);
	triangle(x+100,y+40,x+125,y+75,x+170,y+70); // ponytail
	fill(184, 115, 51);
	circle(x+100,y+100,70); //head
	fill(186,61,255);
	circle(x+125,y+75,10); //barrett
	fill(145,255,203);
	rect(x+60,y+140,80,120,10); //body
}

function Mini(x,y){
	noStroke();
	fill(255,197,142);
	circle(x+100,y+100,70);//head
	fill(65,94,255);
	 circle(x+125,y+75,10);//barrett
	fill(255,151,78);
	 circle(x+143,y+75,30); //hair
	circle(x+143,y+100,30); //hair
	fill(65,94,255);
	 circle(x+73,y+75,10);//barrett
	fill(255,151,78);
	circle(x+56,y+75,30); //hair
	circle(x+56,y+100,30); //hair
	fill(217,158,209);
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
		Jade(350,300);
	}
	
	if(select2 == true){
	Sasha(350,300);
	}
	if(select3 == true){
	Mini(350,300);
	}
	
}
function Students(x,y){ // code for random students
	circle(x+100,y+100,70);
	rect(x+60,y+140,80,120,10); 
}

function Coach(x,y){
	noStroke();
	fill(110, 38, 14);
  circle(x+100,y+90,70);
	fill(255);
	rect(x+60,y+140,80,160,10); 
  fill(0);
  rect(x+61,y+140,20,160,10);
  rect(x+90,y+160,20,140,10);
  rect(x+120,y+140,20,160,10);
	
}

class firstYears{ // this is a class I made for the students
	
	constructor(){
		this.x = random(0,800);
		this.y = 400;
	}
	show(){
		fill(52,219,10);
		strokeWeight(1);
		stroke(0);
		Students(this.x,this.y);
	}
	
}

function keyPressed(){ // controls the scenes
	if(keyCode == ENTER){
		scenes += 1;
	}
}