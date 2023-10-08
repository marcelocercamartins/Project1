class Bullet{
         
    constructor(canvas,x,y,velocity){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        
        this.color = "white";
        this.width = 2;
        this.height = 10;
        this.damage = 1;
    }

    draw(ctx){
        this.y -= this.velocity;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    collideWith(enemy){
        if(
            this.x < enemy.x + enemy.width && /* collision detection*/
            this.x + this.width > enemy.x && 
            this.y < enemy.y + enemy.height && 
            this.y + this.height > enemy.y){
                enemy.countDamage(this.damage);
                return true;
        }
        return false;

    }

}