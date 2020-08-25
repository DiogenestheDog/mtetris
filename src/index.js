window.addEventListener('DOMContentLoaded', ev => {
    var c = document.getElementById("board");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
});