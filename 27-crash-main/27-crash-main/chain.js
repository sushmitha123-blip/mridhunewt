class chain {
    constructor(bodyA,pointB){
     
     
        var options = {
            bodyA:bodyA,
          
            pointB:pointB
           
            }
            this.pointB=pointB
            this.chain = Constraint.create(options);
            World.add(world,this.chain);
        }
    
    display() 
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;

       
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }