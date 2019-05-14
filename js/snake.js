const snake = {
    canvas_size: {
        w: 640,
        h: 480
    },
    game_over: false,
    snake: {
        units: 5,
        speed: 1,
        pos: {
            x: 0,
            y: 30,
        },
        draw: function (x, y, canvas) {

            canvas.rect(x, y, this.units, this.units);
            canvas.clearRect(0, 0, snake.canvas_size.w, snake.canvas_size.h);
            canvas.stroke();

        }
    },
    game_canvas: null,
    playground: null,
    init: function (canvas_id_name) {
        this.game_canvas = document.getElementById(canvas_id_name);
        this.playground = this.game_canvas.getContext("2d");
    },
    draw: function () {
        this.snake.draw(0, 0, this.playground);
    },
    play: function () {
        while (!this.game_over) {
            this.snake.pos.x += this.snake.units;
            this.snake.draw(this.snake.pos.x, this.snake.pos.y, this.playground);
            setTimeout(() => {
                console.log("OK");
            }, 2000);
        }

    }
};