import SnakeGame from './SnakeGame'
import Snake from './Snake'
import Apple from './Apple'
// import Drawing from './Drawing'



var snake 
var apple 
var snakeGame 


    snakeGame = new SnakeGame(900, 600, 30, 100)
    snake = new Snake([[6, 4], [5, 4], [4, 4],[3,4],[2,4]], "right");
    apple = new Apple([10, 10])
    snakeGame.init(snake,apple)


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





