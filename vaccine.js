class Vaccine{
    constructor(x,y,r){
       this.body=Bodies.circle(x,y,r);
       World.add(world,this.body);
        this.r=r;
        this.image=loadImage("3.png");
        //this.h=h;
        

    }
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push()
    translate (pos.x,pos.y);
    rotate (angle);
    fill(255);
    imageMode( CENTER);
    image(this.image,0,0,this.r);
    pop();
}
}