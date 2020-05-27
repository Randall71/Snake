class Apple { 

    constructor(position){
        this.position = position
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

export default Apple 