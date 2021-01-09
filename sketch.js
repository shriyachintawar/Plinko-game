const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var divisions =[];
var plinko =[];
var particles =[];
var divisionHeight=250;
function setup() {
  createCanvas(580,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,1700,20);

  //to make divisions
  for(var k=0;k<=innerWidth;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  //to make 4 plinko layer
  for(var j=40;j<width;j=j+50){
      plinko.push(new Plinko(j,75));
  }
  for(var j=15;j<width-10;j=j+50){
    plinko.push(new Plinko(j,175));
 }
 for(var j=40;j<width;j=j+50){
  plinko.push(new Plinko(j,275));
 }
 for(var j=15;j<width;j=j+50){
  plinko.push(new Plinko(j,375));
 }
 

}

function draw() {
  background("black");  
  Engine.update(engine);
 
  ground.display();
 //display division
  for(k=0;k<divisions.length;k++){
    divisions[k].display();
  }
    //display plinko
    for(j=0;j<plinko.length;j++){
      plinko[j].display();
    }

    //particle after 60 frame
    if(frameCount%60===0){
      //x,y,r
      //random(130,400),10,7
      particles .push(new Particle(random(width/2-10,width/2+10),10,7));
     // particles.push(particle);
     
    }

    //display particle
    for(var i=0;i<particles.length;i++){
      particles[i].display();
    }
  
}