class Box  {
  constructor(x, y, width, height){
    var options={
      restitution:0.1,
     
      friction:0.3,
      density:1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
   this.width=width;
   this.height=height;
   this.Visiblity = 255;
   World.add(world,this.body)
  }

 

  display(){
      if(this.body.speed < 3){
      push ()
      translate(this.body.position.x,this.body.position.y)
      rotate (this.body.angle)
      rectMode(CENTER);
      rect (0,0,this.width,this.height)
      pop ()
       }else {
         World.remove(world, this.body);
        push();
        this.body.position.y = ground.body.y - 15 
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
        console.log(this.Visiblity)


      }
     
    }

};
