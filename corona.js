class Corona {
    constructor(x, y) {
        var options = {
            restitution: 0.8,
            friction: 0.2,
            isStatic:true
        }
        this.r = 40;
        this.body = Bodies.circle(x, y, 40, options);
        this.image=loadImage("corona.1.png");
        World.add(world, this.body);
        this.Visibility=225;
    }
    
    
  
display(){
 var pos=this.body.position;
 
    push()
    translate(pos.x,pos.y);
  
     
     this.Visibility=this.Visibility-5;
     tint(255,this.Visibility);
     image(this.image,0,0,this.r,this.r);
     pop()
   }

covidspreadingrate(){
  if(this.Visibility<0 || this.Visibility>=-105){
    covidspreadingrate=covidspreadingrate-10;
  }

}
}
