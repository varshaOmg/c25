class BaseClass {

    constructor(x,y,width,height,angle){
     this.width = width;
     this.height = height;
    
        var options = {
        
            restitution : 1.0,
            density : 2.0,
            friction : 1.0
    
        }
    this.image = loadImage('sprites/base.png')
    this.body = Bodies.rectangle(x,y,width,height,options)
    
    World.add(world, this.body)
    
    }
    
    display(){
    
        var pos = this.body.position
        var angle = this.body.angle

    rectMode(CENTER);
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    // fill("white");
    // strokeWeight(5)
    // stroke("green")
    // rect(0,0,this.width,this.height);
    image(this.image,0,0,this.width,this.height);
     pop()
    
    
    }
    
    
    
    }