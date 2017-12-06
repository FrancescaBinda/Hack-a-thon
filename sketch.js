var myImg;
var myImg2;
var myImg3;
var regali;
var coloreBack;
var snow = [];

  var colorList = ['#FFF9CA',
  '#525041',
 
];
function preload() { 
myImg = loadImage("./assets/bracciosx.png");
myImg2 = loadImage("./assets/bracciodx.png");
myImg3 = loadImage("./assets/albero.png");
}


function setup() {

	createCanvas(windowWidth, windowHeight);

	mic = new p5.AudioIn();
	mic.start();
      noStroke();
 
  regali = new Regali();
}

function draw() {
    	//background("#081C5B");
    var volume = mic.getLevel();
    var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      
    //background(valore1,valore2,valore3);
    background(8,map(volume,0,1,20,50),map(volume,0,1,70,100));
    image(myImg3, 0, height/3, width, height);

    image(myImg, width*2/3, -50, 100, 200);
    image(myImg2, width/4,-50, 100, 200);
	fill(color(colorHex));
    ellipse(width/2+width/100,height/3+height/5,width/50);

	push();

	translate(width / 2, height / 2);
	pop();
regali.show();


if(volume>0){
    regali.up();
    regali.update();
}

fill("#4F080D");    
    rect(width/2-100, height*2/3, 200,height/3 );
 fill("#8E5809");
    rect(width/2-150, height*2/3, 300, 30);   
    
    	var newSnowflakes = {
			posx: random(0,windowWidth),
			posy: random(0,windowHeight),
			size: random(0,10),
			snowColor: random(100, 255)
		};
		snow.push(newSnowflakes);
//	} 

	for (i = 0; i < snow.length; i++) {
		var currentObj = snow[i];
		snowflakes(currentObj.posx, currentObj.posy, currentObj.size, currentObj.snowColor);
		currentObj.posy += 2;
        if(volume>0.1){
           currentObj.posy += 5; 
        }
	}
    
    
    
    
}


function Regali() {
  this.y = height*2/3
  this.x = width/2;

  this.gravity = -0.1;
  this.lift = 5;
  this.velocity = 0;
  this.show = function() {
  
   fill("#8C0C15");
    rect(this.x, this.y, 30, 30);
    fill(255);
    rect(this.x+15, this.y, 5, 30);
    rect(this.x, this.y+15, 30, 5);
    
     fill("#076630");
    rect(this.x+20, this.y-70, 50, 50);
    fill(255);
    rect(this.x+45, this.y-70, 5, 50);
    rect(this.x+20, this.y-45, 50, 5);
    
 //   Pacchetto 1 
     fill("#DDB962");
    rect(this.x-50, this.y-40, 40, 40);
    fill(255);
    rect(this.x-30, this.y-40, 5, 40);
    rect(this.x-50, this.y-20, 40, 5);
    
  }
  this.up = function() {

    this.y +=4;
  }
  
   this.update = function() {
       this.x = width/2;
    if (this.y > height) {
      this.y = -80;
      
    }
   
  }

}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function snowflakes(posx, posy, size, snowColor) {
	noStroke();
	fill(255, 255, 255, snowColor);
	ellipse(posx, posy, size, size);
}