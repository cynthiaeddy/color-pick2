let order;
let playerOrder;
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let win;
let cardId;
let card;
let on = false;
let cardClicked = false;

const turnCounter = document.querySelector('#turn');
const startButton = document.querySelector('#start');
const cards = document.querySelectorAll('.circle');

/////////////// navbar toggle //////////////////////////

(function() {
	const hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		}
	};
	hamburger.navToggle.addEventListener('click', function(e) {
		hamburger.doToggle(e);
	});
	hamburger.nav.addEventListener('click', function(e) {
		hamburger.doToggle(e);
	});
})();

/////////////////////// game //////////////////////////////////

startButton.addEventListener('click', (event) => {
	if (startButton) {
		on = true;
	} else {
		on = false;
		clearColor();
		clearInterval(intervalId);
	}
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
	for (var i = 0; i < 10; i++) {
		order.push(Math.floor(Math.random() * 6) + 1);
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
		// cards.forEach((card) => {
		// 	card.removeEventListener('click', (e) => {});
		// });

		setTimeout(() => {
			colorPick(cards[order[flash] - 1]);
			flash++;
		}, 200);
	}
}

function clearColor() {
	for (i = 0; i < cards.length; i++) {
		let color = cards[i].id;
		cards[i].style.background = color;
	}
}

function flashColor() {
	for (i = 0; i < cards.length; i++) {
		let color = cards[i].id;
		cards[i].style.border = `10px solid ${color}`;
		cards[i].style.background = 'none';
	}
}

function colorPick(card) {
	card.style.border = `10px solid ${card.id}`;
	card.style.background = 'none';
}

cards.forEach((card) => {
	card.addEventListener('click', (e) => {
		// card.addEventListener('click', (e) => {
		cardClicked = true;

		// console.log('card is here', card);
		if (on) {
			// console.log('hello', 'card', card);
			cardId = +card.dataset.id;
			playerOrder.push(cardId);
			check();
			colorPick(card);
			if (!win) {
				setTimeout(() => {
					clearColor();
				}, 300);
			}
		}
	});
});

function check() {
	count = 0;
	console.log(compTurn, cardClicked);
	// let timer = !compTurn;
	let timer = cardClicked;
	if (timer) {
		count++;
		timer = window.setTimeout(notClicked, 5000);
		console.log(count);
		// if (card.addEventListener) {
		// 	clicked();
		// if (timer && card.addEventListener) {
		// 	clicked();
		// }
	}
	function notClicked() {
		console.log(count, '151');
		if (count === 1) {
			console.log('hi');
			// if (!card.addEventListener) {
			// clicked();
			flashColor();
			good == false;
			// turnCounter.innerHTML = 'try again';
			count++;
			console.log(count, '159', 'good', good);
		}
		if (count > 1) {
			console.log(count, '162');
			clicked();
			count = 0;
			console.log(count, '165', 'good', good);
			// setTimeout(() => {
			// 	turnCounter.innerHTML = turn;
			// 	clearColor();x

			// 	compTurn = true;
			// 	flash = 0;
			// 	playerOrder = [];
			// 	good = true;
			// 	intervalId = setInterval(gameTurn, 800);
			// }, 800);
		}
		// good == false;
	}
	// }
	// }
	// if (card.addEventListener) {
	// 	clicked();
	// 	console.log('cleared');
	// 	// setTimeout(() => {
	// 	// 	turnCounter.innerHTML = turn;
	// 	// 	clearColor();

	// 	// 	compTurn = true;
	// 	// 	flash = 0;
	// 	// 	playerOrder = [];
	// 	// 	good = true;
	// 	// 	intervalId = setInterval(gameTurn, 800);
	// 	// }, 800);
	// }
	// }
	function clicked() {
		clearTimeout(timer);
		console.log('howdy');
	}
	// }

	// if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) good = false;
	if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) good = false;
	if (playerOrder.length == 10 && good) {
		winGame();
	}

	if (good == false) {
		flashColor();
		turnCounter.innerHTML = 'try again';
		clicked();
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
	// }

	if (turn == playerOrder.length && good && !win) {
		turn++;
		playerOrder = [];
		compTurn = true;
		flash = 0;
		turnCounter.innerHTML = turn;
		intervalId = setInterval(gameTurn, 800);
	}
}

function winGame() {
	flashColor();
	turnCounter.innerHTML = 'you win!';
	on = false;
	win = true;
}
