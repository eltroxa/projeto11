var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

path = createSprite (200,200,50,100)
path.addImage("chao",pathImg);
path.x = path.width/2
path.velocityY = -5

function preload(){
pathImg = loadImage("path.png");
//boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
    





//Criando menino que corre 



// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 

}



function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);



 //Reiniciar o fundo
 



 drawSprites();

 }




