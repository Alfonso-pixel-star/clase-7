
class Canon{

    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.canon_img = loadImage("./assets/canon.png");
        this.canon_base = loadImage("./assets/cannonBase.png");
    }


    display(){
        if (keyIsDown(RIGHT_ARROW)){
            this.angle -= 1;
        }

        if (keyIsDown(LEFT_ARROW)){
            this.angle += 1;
        }

        push();
        translate(0, 0);
        rotate(15);
        //rectMode(CENTER);
        //rect(this.x, this.y, this.width, this.height);
        imageMode(CENTER);
        image(this.canon_img, this.x, this.y, this.width, this.height);
        pop();

        push();
        //rect(170, 125, 200, 200);
        imageMode(CENTER);
        image(this.canon_base, 170, 125, 200, 200);
        pop();
        noFill();
    }

}