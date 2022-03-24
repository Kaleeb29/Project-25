class Dustbin{
 constructor(x,y,width,height){
     var options = {
      'isStatic':true,
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     this.image = loadImage("https://s3-projectsassets.whjr.online/dustbingreen.png")
     var pos = this.body.position;
     World.add(world,this.body);
 }
  display(){
    imageMod(CENTER);
    image(this.image,400,350,this.width,this.height);
  }
}