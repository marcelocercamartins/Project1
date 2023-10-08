class BulletController{
    bullets = [];
    timeBullet = 0; 
      
    constructor(canvas,soundEnabled){
        this.canvas = canvas;
        this.soundEnabled = soundEnabled;

        this.shootSound = new Audio("sounds/gun-shot.wav");
        this.shootSound.volume = 0.3;

    }
    shoot(x,y,velocity,delay){

        if(this.timeBullet <= 0) {
            const bullet = new Bullet(this.canvas,x,y,velocity);
            this.bullets.push(bullet);
            this.timeBullet = delay;
            if(this.soundEnabled){
                this.shootSound.currentTime = 0;
                this.shootSound.play();
            }
        }
        this.timeBullet--;
    } 

    draw(ctx){
        this.bullets.forEach((bullet)=> {
            if(this.isBulletoffScreen(bullet)){
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index,1);
            }
        bullet.draw(ctx);
        });
    }

    collideWith(enemy){
        return this.bullets.some((bullet)=>{
            if (bullet.collideWith(enemy)){
                this.bullets.splice(this.bullets.indexOf(bullet),1);
                return true;
            }
            return false;
        });
    }

    isBulletoffScreen(bullet) {
        return bullet.y <= -bullet.height;
    }


}