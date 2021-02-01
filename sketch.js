//Create variables here
let dog,dogImg, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(400,400);
  dog.addImage("dogImg");
  foodStock.database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  

  
  //add styles here
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  stroke(3)
  fill("black");
  textSize(50);
  text("",foodS,250,100);
}
function writeStock(x){
  if (foodStock<=0) {
    foodStock=0;
  } else {
    foodStock=foodStock-1
  }
  database.ref(food).update({
    food:x
  })
}
function readStock(data){
  foodS=data.val();
}