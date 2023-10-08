class Enemy{
    constructor(canvas,x,y,color){
        this.canvas = canvas;
        this.color = color;
        this.x = x;
        this.y = y;

        this.width = 20;
        this.height = 20;
        this.speed = 5;
        this.health = 2;
    }

    draw(ctx){
        /*color of square*/
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);

        /*color of text inside the enemy square*/
        ctx.fillStyle = "white";
        ctx.fillText(this.health, this.x+(this.width/3.5),this.y+(this.width/1.5));
        ctx.font = "bold 15px serif";
    }
    countDamage(damage){
        this.health -= damage;
    }
}