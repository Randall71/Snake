class Drawing {

    static drawSnake(ctx , blockSize , snake){
         ctx.save()
         ctx.fillStyle = "orange";
         for (var i = 0; i < snake.body.length; i++) {
             var x = snake.body[i][0] * blockSize
             var y = snake.body[i][1] * blockSize
             ctx.fillRect(x , y , blockSize , blockSize)
         }
         ctx.restore()
     }
 
     static drawApple(ctx , blockSize, apple){
         ctx.save()
         ctx.fillStyle = "#33cc23"
         ctx.beginPath()
         var radius = blockSize / 2
         var x = apple.position[0] * blockSize + radius
         var y = apple.position[1] * blockSize + radius
         ctx.arc(x, y, radius, 0, Math.PI * 2, true)
         ctx.fill()
         ctx.restore()
     }
 
     static drawScore(ctx , canvasWidth , canvasHeight , score){
         ctx.save()
         ctx.font = "bold 200px sans-serif"
         ctx.fillStyle = "gray"
         ctx.textAlign = "center"
         ctx.textBaseline = "middle"
         var centreX = canvasWidth / 2
         var centreY = canvasHeight / 2
         ctx.fillText(score, centreX, centreY)
         ctx.restore()
     }
 
     static gameOver(ctx , canvasWidth , canvasHeight) {
         ctx.save()
         ctx.font = "bold 70px sans-serif"
         ctx.fillStyle = "#000"
         ctx.textAlign = "center"
         ctx.textBaseline = "middle"
         ctx.strokeStyle = "white"
         ctx.lineWidth = 5
         var centreX = canvasWidth / 2
         var centreY = canvasHeight / 2
         ctx.strokeText('Game Over', centreX, centreY - 180)
         ctx.fillText('Game Over', centreX, centreY - 180)
         ctx.font = "bold 30px sans-serif"
         ctx.strokeText('Appuyer sur la touche espace pour rejouer', centreX, centreY - 120)
         ctx.fillText('Appuyer sur la touche espace pour rejouer',centreX, centreY - 120)
         ctx.restore()
     }
 
 }
 
 export default Drawing