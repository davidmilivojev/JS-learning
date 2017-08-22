var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(150, 150, 100, 0, 2 * Math.PI);
ctx.stroke();
