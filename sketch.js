var back;
var cat, catimg, catimg2, catani;
var mouse, mouseimg, mouseimg2;
function preload() {
    back = loadImage("images/garden.png");
    catimg = loadImage("images/tomOne.png");

    catani = loadAnimation("images/tomTwo.png", "images/tomThree.png");
    catimg2 = loadImage("images/tomFour.png");
    
    mouseimg = loadImage("images/jerryTwo.png");
    mouseimg2 = loadImage("images/jerryOne.png");

    
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(900, 300, 30, 30);
    cat.addImage(catimg);
    cat.scale = .2;

    mouse = createSprite(300, 300, 10, 10);
    mouse.addImage(mouseimg);
    mouse.scale = .1;

    

}

function draw() {
    background("white");
   
    
    keyPress();
    if (keyPress()){
        cat.addAnimation("cat", catani);


}
    

    drawSprites();
}


function keyPress(){
    if (keyCode === "LEFT_ARROW"){
        cat.velocityX = -3;
        
        
        
    }
  


}
