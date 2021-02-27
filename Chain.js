class Chain {
    constructor(bodyA,pointB){

        var option ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB
        this.chain= Constraint.create(option)
        World.add(world,this.chain)
    }
    attach(body){
        this.chain.bodyA=body
    }
    fly(){
    this.chain.bodyA=null
    }

    display(){
    if (this.chain.bodyA) 
        var pointA=this.chain.bodyA.position
        var pointB=pointB
        strokeWeight(3)
        //line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }

