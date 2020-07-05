let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
// let strict = false;
let on = false;
let win;

const turnCounter = document.querySelector('#turn');
const yellow = document.querySelector('#yellow');
const orange = document.querySelector('#orange');
const red = document.querySelector('#red');
const purple = document.querySelector('#purple');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const onButton = document.querySelector('#on');
const startButton = document.querySelector('#start');

// strictButton.addEventListener('click', (event) => {
// 	if (strictButton.checked == true) {
// 		strict = true;
// 	} else {
// 		strict = false;
// 	}
// });

onButton.addEventListener('click', (event) => {
	if (onButton.checked == true) {
		on = true;
		turnCounter.innerHTML = '-';
	} else {
		on = false;
		turnCounter.innerHTML = '';
		clearColor();
		clearInterval(intervalId);
	}
});

startButton.addEventListener('click', (event) => {
	if (on || win) {
		play();
	}
});

function play() {
	win = false;
	order = [];
	playerOrder = [];
	flash = 0;
	intervalId = 0;
	turn = 1;
	turnCounter.innerHTML = 1;

	good = true;
	for (var i = 0; i < 20; i++) {
		order.push(Math.floor(Math.random() * 4) + 1);
	}
	compTurn = true;

	intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
	on = false;

	if (flash == turn) {
		clearInterval(intervalId);
		compTurn = false;
		clearColor();
		on = true;
	}

	if (compTurn) {
		clearColor();
		setTimeout(() => {
			if (order[flash] == 1) yellowPick();
			if (order[flash] == 2) orangePick();
			if (order[flash] == 3) redPick();
			if (order[flash] == 4) purplePick();
			if (order[flash] == 5) bluePick();
			if (order[flash] == 6) greenPick();
			flash++;
		}, 200);
	}
}

function yellowPick() {
	yellow.style.border = '10px solid yellow';
	yellow.style.background = 'none';
}

function orangePick() {
	orange.style.border = '10px solid orange';
	orange.style.background = 'none';
}

function redPick() {
	red.style.border = '10px solid red';
	red.style.background = 'none';
}

function purplePick() {
	purple.style.border = '10px solid purple';
	purple.style.background = 'none';
}

function bluePick() {
	blue.style.border = '10px solid blue';
	blue.style.background = 'none';
}

function greenPick() {
	green.style.border = '19px solid green';
	green.style.background = 'none';
}

function clearColor() {
	yellow.style.backgroundColor = 'yellow';
	orange.style.backgroundColor = 'orange';
	red.style.backgroundColor = 'red';
	purple.style.backgroundColor = 'purple';
	blue.style.backgroundColor = 'blue';
	green.style.backgroundColor = 'green';
}

function flashColor() {
	yellow.style.border = '10px solid yellow';
	yellow.style.background = 'none';
	orange.style.border = '10pxsolid orange';
	orange.style.background = 'none';
	red.style.border = '10px solid red';
	red.style.background = 'none';
	purple.style.border = '10px solid purple';
	purple.style.background = 'none';
	blue.style.border = '10px solid blue';
	blue.style.background = 'none';
	green.style.border = '10px solid green';
	green.style.background = 'none';
}

yellow.addEventListener('click', (event) => {
	if (on) {
		playerOrder.push(1);
		check();
		yellowPick();
		if (!win) {
			setTimeout(() => {
				clearColor();
			}, 300);
		}
	}
});

orange.addEventListener('click', (event) => {
	if (on) {
		playerOrder.push(2);
		check();
		orangePick();
		if (!win) {
			setTimeout(() => {
				clearColor();
			}, 300);
		}
	}
});

red.addEventListener('click', (event) => {
	if (on) {
		playerOrder.push(3);
		check();
		redPick();
		if (!win) {
			setTimeout(() => {
				clearColor();
			}, 300);
		}
	}
});

blue.addEventListener('click', (event) => {
	if (on) {
		playerOrder.push(4);
		check();
		bluePick();
		if (!win) {
			setTimeout(() => {
				clearColor();
			}, 300);
		}
	}
});
purple.addEventListener('click', (event) => {
	if (on) {
		playerOrder.push(5);
		check();
		purplePick();
		if (!win) {
			setTimeout(() => {
				clearColor();
			}, 300);
		}
	}
});
green.addEventListener('click', (event) => {
	if (on) {
		playerOrder.push(6);
		check();
		greenPick();
		if (!win) {
			setTimeout(() => {
				clearColor();
			}, 300);
		}
	}
});

function check() {
	if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) good = false;

	if (playerOrder.length == 3 && good) {
		winGame();
	}

	if (good == false) {
		flashColor();
		turnCounter.innerHTML = 'NO!';
		setTimeout(() => {
			turnCounter.innerHTML = turn;
			clearColor();
			compTurn = true;
			flash = 0;
			playerOrder = [];
			good = true;
			intervalId = setInterval(gameTurn, 800);
		}, 800);
	}

	if (turn == playerOrder.length && good && !win) {
		turn++;
		playerOrder = [];
		compTurn = true;
		flash = 0;
		intervalId = setInterval(gameTurn, 800);
	}
}

function winGame() {
	flashColor();
	turnCounter.innerHTML = 'WIN!';
	on = false;
	win = true;
}
