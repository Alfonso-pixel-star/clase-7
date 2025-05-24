
class CannonBall{

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = 30;

        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
        this.img = loadImage("./assets/cannonball.png");
    }


    display(){
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.img, pos.x, pos.y, this.r, this.r);
        pop();

    }

}