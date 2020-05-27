class Snake {
    
    constructor(body, direction){
        this.body = body;
        this.direction = direction;
        this.ateApple = false
    }

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

export default Snake 