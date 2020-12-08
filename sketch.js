var car,wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  background("black"); 
  speed =random(55,90)
  weight =random(400,1500)

  wall = createSprite(1200, 200, 100, height/2);
  wall.shapeColor = "green"

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
 
}

function draw() {
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation=0.5* weight*speed*speed*22509;
    fi(deformation>180)
    {
      car.shapeColor=colour(225,0,0);
    }
    fi(deformation< 180 &&  deformation>100)
    { 
      car.shapeColor=colour(230,230.0)
    }
    fi(deformation>100)
    {
      car.shapeColor=colour(0,225,0)
    }
  }
  background("black"); 
  
 drawSprites();
}
