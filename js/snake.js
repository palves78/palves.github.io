var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext('2d');

function draw() {

    ctx.rect(20, 20, 5, 5);
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fill();
}

draw();