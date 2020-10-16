import JBlock from './tiny_j_block.png';
import './game.css';

window.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const ctx = board.getContext('2d');
    
    const GAME_WIDTH = board.width;
    const GAME_HEIGHT = board.height;
    const CELL_WIDTH = board.width / 10;
    // const DROP_SPEED = 
    function Block(x, y, url, sheetX, sheetY, ctx) {
        this.x = x || 0;
        this.y = y || 0;
        // hardcoding jblock for now
        this.image = new Image(48, 72);
        this.image.src = JBlock;
        this.ctx = ctx;
    }

    Block.prototype.lowerPiece = function() {
        //console.log(this);
        if (this.y < GAME_HEIGHT - 72) {
            this.y++;
        }
    }



    const jPiece = new Block(0, 0, JBlock, 200, 400, ctx);

    jPiece.image.onload = () => {
        ctx.drawImage(jPiece.image, 0, 0);
    }

    function eraseBoard() {
        this.clearRect(0, 0, board.width, board.height);
    }

    const keyTracker = {
        left: false,
        right: false
    };

    window.addEventListener("keydown", function (e) {
        if (e.key === "a" && jPiece.x > 0) jPiece.x -= CELL_WIDTH;//keyTracker.left = true;
        if (e.key === "d" && jPiece.x < GAME_WIDTH - 48) jPiece.x += CELL_WIDTH;//keyTracker.right = true;
        if (e.key === "s") keyTracker.down = true;
    });

    // window.addEventListener("keyup", function(e) {
    //     if (e.key === "a") keyTracker.left = false;
    //     if (e.key === "d") keyTracker.right = false;
    //     if (e.key === "s") keyTracker.down = false;
    // });



    const wipeGame = eraseBoard.bind(ctx);
    // game tick
    function render(timestamp) {
        wipeGame();
        jPiece.lowerPiece();
        console.log(keyTracker.left);
        // if (keyTracker.left && jPiece.x > 0) jPiece.x -= 4;
        // if (keyTracker.right && jPiece.x < GAME_WIDTH - 48) jPiece.x -= CELL_WIDTH;
        if (keyTracker.down && jPiece.y < GAME_HEIGHT - 72) jPiece.x += CELL_WIDTH;
        ctx.drawImage(jPiece.image, jPiece.x, jPiece.y);
        window.requestAnimationFrame(function(timestamp) {
            render(timestamp);
        });
    }
    requestAnimationFrame(function(timestamp) {
        render(timestamp);
    });
    
});