function setup() 
{
  createCanvas(600, 400);
}

function draw(n = 6) 
{
  background(220);
  
  DrzewoBinarne(n, 300, 400, 200, PI/2)
  
  noLoop();
}

function DrzewoBinarne(n, x, y, d, alfa)
{
  var x1 = x + d*cos(alfa);
  var y1 = y - d*sin(alfa);
  line(x, y, x1, y1);
  if(n > 0)
  {
    DrzewoBinarne(n-1, x1, y1, d/2, alfa+PI/4);
    DrzewoBinarne(n-1, x1, y1, d/2, alfa-PI/4);
  }
}