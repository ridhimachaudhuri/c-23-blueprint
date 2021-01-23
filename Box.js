class Box{
    constructor(x,y,w,h){
        var option={
         restitution:1
        }
    this.body = Bodies.rectangle(x,y,w,h,option)
    this.width = w
    this.height = h
    World.add(myWorld,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}