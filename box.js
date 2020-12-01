class box{
    constructor(x,y,wi,hg){
        var obj_opt={isStatic:true}
        this.w=wi;
        this.h=hg;
        this.b = createSprite(x,y,wi,hg);//Sprite we need for the package sprite to collide this sprite
        this.obj=Bodies.rectangle(x,y,wi,hg,obj_opt); //HERE IT WAS CAPTIAL B for Matter.Bodies (you assigned Matter.Bodies to Bodies variable )
        World.add(world,this.obj); // Corrected the syntax it should be like Matter.World.add(world,this.obj), you have
        // already assigned Matter.World to World variable.
    }
    display(){
        rectMode(CENTER);
        fill("brown")
        //rect(this.obj.position.x,this.obj.position.y,this.w,this.h); // Not a rectangle it shoud be sprite so that sprite can hit another sprite,
        // If it is rect then its a shape and package sprite could pass through it.
        this.b.x = this.obj.position.x;
        this.b.y = this.obj.position.y;
    }
}