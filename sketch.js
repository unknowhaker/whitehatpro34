//Create variables here
let dog,dogImg, happyDogImg, database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300);
  dog.addImage(dogImg);
  dog.scale = 0.35;

  var foodStockRef=database.ref('food');
  foodStockRef.on("value",readStock);
}


function draw() {  

  
  //add styles here
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  stroke(3)
  fill("black");
  textSize(15);
  if (foodS!==undefined){
    text("Food remaining: " +foodS,200,50);
  }
  
}
function writeStock(x){
  if (x<=0) {
    x=0;
  } else {
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}
function readStock(data){
  foodS=data.val();
}
