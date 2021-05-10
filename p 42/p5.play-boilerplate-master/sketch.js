var h,min,sec
var ha,min_a,sec_a
function setup() {
  createCanvas(800,400);
 angleMode(DEGREES)

}

function draw() {
  background(255,255,255); 
  translate (200,200) 
  rotate (-90)
  h=hour();
  min=minute();
  sec= second ();
  sec_a= map(sec,0,60,0,360);
min_a= map(min,0,60,0,360)
ha = map(h%12,0,12,0,360);
push()
rotate(sec_a)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop ()

push()
rotate(min_a)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop ()

push()
rotate(ha)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop ()

stroke (255,0,255)
point (0,0)
strokeWeight (10)
noFill ()
stroke (255,0,0)
arc (0,0,300,300,0,sec_a)
stroke (0,255,0)
arc (0,0,300,300,0,min_a)
stroke (0,0,255)
arc (0,0,300,300,0,ha)
  drawSprites();
}