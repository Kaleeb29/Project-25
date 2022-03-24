class Paper{
    constructor(x,y){
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x,y,70,options);
      this.image = loadImage("https://s3-projectsassets.whjr.online/paper.png");
      World.add(world,this.body);
    }
    display(){
    imageMod(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,70);
    Pop();
    }
    
}