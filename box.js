class Box{ 
    constructor(x,y) { 
        var options ={ restitution:0.4, friction:0} 
        this.body = Bodies.rectangle(x,y,30,50,options); 
        this.width= 30; 
        this.height = 50;
        this.visiblility=255; 
        World.add(world,this.body); 
    } 
    
    display() { 
        var pos = this.body.position; 
        var angle = this.body.angle;
        
        if(this.body.speed<3){
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill("red");
            rectMode(CENTER);  
            rect(0,0,this.width,this.height);
            pop();
        } 
        else{
            World.remove(world,this.body);
            push();
            this.visiblility= this.visiblility-5;
            fill(2550,0,0,this.visiblility);
            rect(pos.x,pos.y,30,50);
            pop();
        }
    }
}