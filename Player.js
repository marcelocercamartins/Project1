    class Player {
    rightPressed = false;
    leftPressed = false;
    shootPressed = false;


    constructor(canvas,velocity,bulletController){
    this.canvas = canvas;
    this.velocity = velocity;
    this.bulletController = bulletController; 
    this.x = (this.canvas.width / 2) - 25; /* to insert the player in the middle of the canvas */
    this.y = this.canvas.height - 50; 
    this.width = 50; /* test if its mandatory */
    this.height = 48;
    this.image = new Image();
    this.image.src = "img/nave.jpeg";
    this.health = 1;

    

    document.addEventListener("keydown",this.keydown);
    document.addEventListener("keyup",this.keyup);
    }
    
    draw(ctx){
        /*if(this.shootPressed){
         this.bulletController.shoot(this.x + this.width/2,this.y,1,10);
        }*/
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        this.move();         
        this.limitsWalls();
        this.shoot();
        
    }

    shoot(){
        if(this.shootPressed){
            const bulletX = this.x + this.width/2;
            const bulletY = this.y;
            const velocity = 5;
            const delay = 10;
            
            this.bulletController.shoot(bulletX, bulletY, velocity, delay);
            
        }
    }

    move(){
        if(this.rightPressed){
            this.x += this.velocity;
        }else if(this.leftPressed){
            this.x -= this.velocity;
        }
    }

    limitsWalls(){
        if(this.x < 0){
            this.x = 0;
        }
        if(this.x > (this.canvas.width - this.width)){
            this.x = this.canvas.width - this.width;

        }

    }

    countDamage(damage){
        this.health -= damage;
    }

    keydown =event => {
        if(event.code === "ArrowRight"){
            this.rightPressed = true;
        }
        if(event.code === "ArrowLeft"){
            this.leftPressed = true;
        }
        if(event.code === "Space"){
            this.shootPressed = true;
        }
    }

    keyup =event => {
        if (event.code ==="ArrowRight"){
            this.rightPressed = false;
        }
        if(event.code === "ArrowLeft"){
            this.leftPressed = false;
        }
        if(event.code === "Space"){
            this.shootPressed = false;
        }
    }
}