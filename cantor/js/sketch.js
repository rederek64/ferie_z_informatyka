function setup() {
  createCanvas(400, 400);
  background(220);
  cantor(50,100,300);
}

function cantor(x, y, len){
  line(x,y, x+len, y);
  y += 20;
  len /= 3;
  
  if(len > 1){
    cantor(x,y,len);
    cantor(x+len*2,y,len);
  }
}