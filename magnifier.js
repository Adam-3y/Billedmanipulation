let img;
let s
let z

//Vi loader vores billede. 
function preload() {
  img = loadImage('Waldo.jpg');
}

//Vi setter vores canvas op og definere vores 2 variable.
function setup() {
  createCanvas(img.width,img.height);
  noStroke();
//s står for size og z står for zoom
  s=20;
  z=4;
}


function draw() {
  background(255)
  image(img, 0, 0);
  //Vi tegner rektangel omkring forstørrelsesvinduet.
  fill(0,0,100);
  if(z>1){
    rect(mouseX-0.5*s*z-3,mouseY-0.5*s*z-3,s*z+6,s*z+6);
  }
    
  for(let i=0; i<s; i+=1) {
    for(let j=0; j<s; j+=1) {
    //Vi finder farven for den pixel vi vil forstørre.
      let c = img.get(mouseX-0.5*s+i, mouseY-0.5*s+j);
      fill(c);
    //Vi tegner de forstørrede pixels.
      rect(mouseX - 0.5*z*s + z*i,mouseY - 0.5*z*s + z*j, z, z);
    }
  }
}

//Vi forstørrer zoom når brugeren klikker med musen.
function mouseClicked(){
    z += 1
    z %= 9
}

function keyPressed(){
    //Forståelse af kode overlades til læseren
    if(keyCode==UP_ARROW){
        s = max(10,(s+4)%40)
    }
    if(keyCode==DOWN_ARROW){
        s = max((30+s-4)%40,s-4)
    }
} 
