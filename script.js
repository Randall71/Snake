var snake 
var apple 
var snakeGame 

class SnakeGame {
    
    constructor(canvasWidth, canvasHeight, blockSize, delay){
        this.canvas = document.createElement('canvas');
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.canvas.style.border = "30px solid gray";
        this.canvas.style.margin = "50px auto";
        this.canvas.style.display = "block";
        this.canvas.style.backgroundColor = "#ddd";
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d')
        this.blockSize = blockSize
        this.delay = delay
        this.widthInBlocks = canvasWidth / blockSize
        this.heightInBlocks = canvasHeight / blockSize
        this.score 
        this.timeout
    }
    

    init(snake, apple) {
        this.snake = snake
        this.apple = apple
        this.score = 0
        clearTimeout(this.timeout)
        this.refreshCanvas();
    }
    refreshCanvas() {
        this.snake.advance() 
        if (this.checkCollision()) {
            this.gameOver()
            
        } else {
            if (this.snake.isEatingApple(this.apple)){
                this.score++
                this.snake.ateApple = true 
                do {
                    this.apple.SetNewPosition(this.widthInBlocks, this.heightInBlocks)
                }while(this.apple.isOnSnake(this.snake))

            }
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawScore()
            this.snake.draw(this.ctx, this.blockSize)
            this.apple.draw(this.ctx, this.blockSize)
            this.timeout = setTimeout(this.refreshCanvas.bind(this), this.delay)

        }
       
    } 
    checkCollision() {
        var wallCollision = false 
        var snakeCollision = false 
        var head = this.snake.body[0] 
        var rest = this.snake.body.slice(1)
        var snakeX = head[0]
        var snakeY = head[1]
        var minX = 0
        var minY = 0
        var maxX = this.widthInBlocks - 1
        var maxY = this.heightInBlocks - 1
        var isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX
        var isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY
        
        if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls) {
            wallCollision = true
        }

        for (var i = 0; i < rest.length; i++){
            if (snakeX === rest[i][0] && snakeY === rest[i][1]) {
                snakeCollision = true
            }
        }
        return wallCollision || snakeCollision
    }

    gameOver() {
        this.ctx.save()
        this.ctx.font = "bold 70px sans-serif"
        this.ctx.fillStyle = "#000"
        this.ctx.textAlign = "center"
        this.ctx.textBaseline = "middle"
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 5
        var centreX = this.canvas.width / 2
        var centreY = this.canvas.height / 2
        this.ctx.strokeText('Game Over', centreX, centreY - 180)
        this.ctx.fillText('Game Over', centreX, centreY - 180)
        this.ctx.font = "bold 30px sans-serif"
        this.ctx.strokeText('Appuyer sur la touche espace pour rejouer', centreX, centreY - 120)
        this.ctx.fillText('Appuyer sur la touche espace pour rejouer',centreX, centreY - 120)
        this.ctx.restore()
    }

    drawScore() {
        this.ctx.save()
        this.ctx.font = "bold 200px sans-serif"
        this.ctx.fillStyle = "gray"
        this.ctx.textAlign = "center"
        this.ctx.textBaseline = "middle"
        var centreX = this.canvas.width / 2
        var centreY = this.canvas.height / 2
        this.ctx.fillText(this .score.toString(), centreX, centreY)
        this.ctx.restore()
    }

}

window.onload = function () {

    snakeGame = new SnakeGame(900, 600, 30, 100)
    snake = new Snake([[6, 4], [5, 4], [4, 4],[3,4],[2,4]], "right");
    apple = new Apple([10, 10])
    snakeGame.init(snake,apple)
}

document.onkeydown = function handleKeyDown(e) {
    var key = e.keyCode
    var newDirection 
    
    switch (key) {
        case 37: //left
            newDirection = "left"
            break; 
        case 38: //up
            newDirection = "up"
            break;
        case 39: //right
            newDirection = "right"
            break; 
        case 40: //down
        newDirection = "down"
            break; 
        case 32:
            snake = new Snake([[6, 4], [5, 4], [4, 4],[3,4],[2,4]], "right");
            apple = new Apple([10, 10])
            snakeGame.init(snake,apple)
            return; 
        default:
            return;
        
    }
    snakeGame.snake.setDirection(newDirection)
}




class Snake{
    
    constructor(body, direction){
        this.body = body;
        this.direction = direction;
        this.ateApple = false
    }
 
    draw(ctx, blockSize) {
        ctx.save()
        ctx.fillStyle = "orange";
        for (var i = 0; i < this.body.length; i++) {
            var x = this.body[i][0] * blockSize
            var y = this.body[i][1] * blockSize
            ctx.fillRect(x , y , blockSize , blockSize)
        }
        ctx.restore()
    };

    advance(){
        var nextPosition = this.body[0].slice()

        switch (this.direction) {
            case "left":
                nextPosition[0] -= 1;
                break;
            case "right":
                nextPosition[0] += 1;
                break;
            case "down":
                nextPosition[1] += 1;
                break;
            case "up":
                nextPosition[1] -= 1;
                break;
            default:
                throw("Direction non valide")
        }
        this.body.unshift(nextPosition)
        if (!this.ateApple) {
            this.body.pop()
        } else {
            this.ateApple = false 
        }
        // console.log(nextPosition)
        
    };

    setDirection(newDirection){
        var allowedDirection 
        switch (this.direction) {
            case "left":
            case "right":
                allowedDirection = ["up", "down"]
                break;
            case "down":
            case "up":
                allowedDirection = ["left", "right"]
                break;
             default:
               throw("Direction non valide")
        }
        if (allowedDirection.indexOf(newDirection) > -1) {
            this.direction = newDirection
        }
    }

    isEatingApple(appleToEat){
        var head = this.body[0]
        if (head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1]) {
            return true 
        } else {
            return false 
        }
    }
}

class Apple{

    constructor(position){
        this.position = position
    }

    draw(ctx,blockSize) {
        ctx.save()
        ctx.fillStyle = "#33cc23"
        ctx.beginPath()
        var radius = blockSize / 2
        var x = this.position[0] * blockSize + radius
        var y = this.position[1] * blockSize + radius
        ctx.arc(x, y, radius, 0, Math.PI * 2, true)
        ctx.fill()
        ctx.restore()
    }

    SetNewPosition(widthInBlocks,heightInBlocks) {
        var newX = Math.round(Math.random() * (widthInBlocks - 1))
        var newY = Math.round(Math.random() * (heightInBlocks - 1))
        this.position = [newX, newY]
    }
    
    isOnSnake(snakeToCheck) {
        var isOnSnake = false 
        for (var i = 0; i < snakeToCheck.body.length; i++){
            if (this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1]) {
                isOnSnake = true 
            }
        }
        return isOnSnake
    }
}


      
