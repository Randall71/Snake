import Drawing from './Drawing'

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
            Drawing.gameOver(this.ctx, this.canvas.width, this.canvas.height)
        } else {
            if (this.snake.isEatingApple(this.apple)){
                this.score++
                this.snake.ateApple = true 
                do {
                    this.apple.SetNewPosition(this.widthInBlocks, this.heightInBlocks)
                }while(this.apple.isOnSnake(this.snake))
            }
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            Drawing.drawScore(this.ctx, this.canvas.width, this.canvas.height, this.score)
            Drawing.drawSnake(this.ctx, this.blockSize, this.snake)
            Drawing.drawApple(this.ctx, this.blockSize , this.apple)
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

}

export default SnakeGame