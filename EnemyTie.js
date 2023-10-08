class EnemyTie{
    constructor(canvas,x,y,health,enemyBulletController){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.health = health;
        this.enemyBulletController = enemyBulletController;

        this.width = 40;
        this.height = 40;
        this.image = new Image();
        this.image.src = "img/tie-fighter.jpeg";
        
    }

    draw(ctx){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        this.fireBullet();
    }


    fireBullet(){
        const velocity = -5;
        const delay = 20;
        this.enemyBulletController.shoot(this.x + 20,this.y,velocity,delay)
        
    }

    countDamage(damage){
        this.health -= damage;
    }
}