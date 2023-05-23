var spielfeld = document.getElementById("spielfeld");
var ball = document.getElementById("ball");


var spieler1 = document.getElementById("spieler1");
var spieler2 = document.getElementById("spieler2");
var position1 = 160;
var position2 = 160;


var geschwindigkeitX = 3;
var geschwindigkeitY = 3;

ball.style.left = "290px";
ball.style.top = "190px";

var paused = true;

function bewegeSpieler() {
	if (position1 < 0) {
		position1 = 0;
	}
	if (position1 > 320) {
		position1 = 320;
	}
	if (position2 < 0) {
		position2 = 0;
	}
	if (position2 > 320) {
		position2 = 320;
	}
	spieler1.style.top = position1 + "px";
	spieler2.style.top = position2 + "px";
}


function bewegeBall() {
	if (paused){
        return;
    }
	ball.style.left = parseInt(ball.style.left) + geschwindigkeitX + "px";
	ball.style.top = parseInt(ball.style.top) + geschwindigkeitY + "px";
	
	if (parseInt(ball.style.left) < 0 || parseInt(ball.style.left) > 580) {
		geschwindigkeitX = -geschwindigkeitX;
	}
	if (parseInt(ball.style.top) < 0 || parseInt(ball.style.top) > 380) {
		geschwindigkeitY = -geschwindigkeitY;
	}

	
	if (parseInt(ball.style.left) < 30 && parseInt(ball.style.top) >= position1 && parseInt(ball.style.top)<= position1 + 80) {
        geschwindigkeitX = -geschwindigkeitX;
        }
        if (parseInt(ball.style.left) > 550 && parseInt(ball.style.top) >= position2 && parseInt(ball.style.top) <= position2 + 80) {
        geschwindigkeitX = -geschwindigkeitX;
        }
if (parseInt(ball.style.left) > 580) {
	alert("Spieler 1 hat einen Punkt!");
	reset();
}


if (parseInt(ball.style.left) < 0) {
	alert("Spieler 2 hat einen Punkt!");
	reset();
}

}


function reset() {
position1 = 160;
position2 = 160;
ball.style.left = "290px";
ball.style.top = "190px";
geschwindigkeitX = 3;
geschwindigkeitY = 3;
}

document.addEventListener("keydown", function(event) {
    if (event.code == "Space") {
        paused = false;
    }
});

document.addEventListener("keydown", function(event) {
if (event.key == "w") {
position1 -= 10;
bewegeSpieler();
}
if (event.key == "s") {
position1 += 10;
bewegeSpieler();
}
if (event.key == "ArrowUp") {
position2 -= 10;
bewegeSpieler();
}
if (event.key == "ArrowDown") {
position2 += 10;
bewegeSpieler();
}
});


setInterval(function() {
bewegeBall();
}, 20);