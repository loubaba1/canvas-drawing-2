// CAnvas - family watching TV in the living room

// Canvas setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;


//background
ctx.fillStyle = "AntiqueWhite";
ctx.fillRect(0, 0, 500, 500);


// sofa
ctx.fillStyle = "Chocolate";
ctx.fillRect(0, 350, 500, 250);

// the TV
ctx.fillStyle = "Black";
ctx.fillRect(140, 40, 195, 110);

// shelve # 1
ctx.fillStyle = "chocolate";
ctx.fillRect(0, 0, 120, 250);


ctx.fillStyle = "pink";
ctx.fillRect(0, 0, 120, 20);

ctx.fillStyle = "pink";
ctx.fillRect(0, 50, 120, 20);

ctx.fillStyle = "pink";
ctx.fillRect(0, 100, 120, 20);

ctx.fillStyle = "pink";
ctx.fillRect(0, 150, 120, 20);

ctx.fillStyle = "pink";
ctx.fillRect(0, 200, 120, 20);

ctx.fillStyle = "pink";
ctx.fillRect(0, 250, 120, 10);

//shelve # 2
ctx.fillStyle = "chocolate";
ctx.fillRect(380, 0, 500, 250);


ctx.fillStyle = "pink";
ctx.fillRect(380, 0, 500, 20);

ctx.fillStyle = "";
ctx.fillRect(380, 50, 500, 20);

ctx.fillStyle = "";
ctx.fillRect(380, 100, 500, 20);


ctx.fillStyle = "";
ctx.fillRect(380, 150, 500, 20);


ctx.fillStyle = "";
ctx.fillRect(380, 200, 500, 20);


ctx.fillStyle = "";
ctx.fillRect(380, 250, 500, 10);


// the family


ctx.beginPath();
ctx.arc(400, 310, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.arc(95, 310, 40, 0, 2 * Math.PI);
ctx.stroke();



ctx.beginPath();
ctx.arc(200, 320, 30, 0, 2 * Math.PI);
ctx.stroke();



ctx.beginPath();
ctx.arc(295, 320, 30, 0, 2 * Math.PI);
ctx.stroke();


//table
var table = document.getElementById("table")
ctx.drawImage(table, 130, 180, 230, 90);




//text
ctx.fillStyle = "black";
ctx.font = "25px brush script MT";
ctx.fillText("Art by l.K", 0, 25);


// top-left corner (0,0)
// top-right corner (400,0)
// bottom-left corner (0,400)
// bottom-right corner (400,400)
