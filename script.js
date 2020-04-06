window.onload = function () {

    var canvas
    var ctx
    var delay = 100
    var xCoord = 0;
    var yCoord = 0

    init()
    // console.log('test')

    function init() {
        
        canvas = document.createElement('canvas');
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "3px solid yellow";
        this.document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        refreshCanvas();
 
    }

    function refreshCanvas() {
        
        xCoord += 2 
        yCoord += 2
        ctx.fillStyle = "Yellow";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(xCoord, yCoord, 100, 50)
        setTimeout(refreshCanvas, delay)
    }


}