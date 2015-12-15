var c = document.getElementById('my_canvas');
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150,150,100,0,Math.PI*2,false);

ctx.strokeStyle = "rgb(0,161,208)";
ctx.lineWidth = 16;
// 1er carré :
ctx.fillStyle = "rgb(0,161,208)";
ctx.fillRect(125,87.5,48,48);
// 2ème carré :
ctx.fillStyle = "rgb(53,99,186)";
ctx.fillRect(125,162.5,48,48);
ctx.stroke();
ctx.closePath();
