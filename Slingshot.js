class Slingshot{
    constructor(A,B){
     var   cproperties={
            bodyA:  A ,
            pointB:  B ,
            length: 10   ,
            stiffness: 0.4  
        }
    
    //this.pointB=B;
    this.link=Constraint.create(cproperties);
    
    World.add(world,this.link);
    }




fly(){
this.link.bodyA=null;

}




    display(){
if(this.link.bodyA){

        strokeWeight(3);
line (this.link.bodyA.position.x,this.link.bodyA.position.y,this.link.pointB.x,this.link.pointB.y);
    }

  }
}
