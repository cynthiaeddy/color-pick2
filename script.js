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

let order;
let playerOrder;
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let start = false;
let win;
let cardId;
let cardColor;
let card;
let cardsColor;
let carda;
let cardet;
let count = 0;
let on = false;
let foundCard;
let foundColor;

const turnCounter = document.querySelector('#turn');
const startButton = document.querySelector('#start');
const cards = document.querySelectorAll('.circle');

startButton.addEventListener('click', (event) => {
	onButton();
	if (startButton) {
		start = true;
	}
	if (on || win) {
		play();
	}
});

function onButton() {
	if (startButton) {
		on = true;
	} else {
		on = false;
		clearColor();
		clearInterval(intervalId);
	}
}

function play() {
	win = false;
	order = [];
	playerOrder = [];
	flash = 0;
	intervalId = 0;
	turn = 1;
	turnCounter.innerHTML = 1;
	good = true;
	for (var i = 0; i < 3; i++) {
		order.push(Math.floor(Math.random() * 6) + 1);
	}
	compTurn = true;

	intervalId = setInterval(gameTurn, 800);
	console.log('intervalId line 62', intervalId);
}

function findCard(cardaId) {
	foundCard = order.find((ord) => {
		return cardaId === ord;
	});
	console.log(foundCard);
}

function findColor(cardaColor, carda) {
	// foundColor = order.find((ord) => {
	// 	return cardaColor === ord;
	// });
	return (foundColor = cardaColor), (cardet = carda);
	console.log(cardaColor);
}

function gameTurn() {
	// for (let i = 0; i < cards.length; i++) {
	// 	// cardsColor = i
	// 	for (let j = 0; j < order.length; j++) {
	// 		if (i++ === j) {
	// 			cardsColor = i;
	// 			cardoColor = cards[i];
	// 			console.log(cardsColor, cardoColor);
	// 		}
	// 	}
	// }

	// function buyJewel(jewelId, btn) {
	//   console.log(`div[data-id="${jewelId}"]`)
	//   const foundJewel = jewels.find(function(jewel) {
	//     return jewel.id === jewelId
	// console.log(carda);
	// count++;
	// console.log('count', count, 'order', order);
	// cards.forEach((card) => {
	// 	// console.log('card', card, 'card.id', card.id, 'card.dataset.id', card.dataset.id);
	// 	cardId = +card.dataset.id;
	// 	cardColor = card.dataset.color;
	// 	// console.log(cardId);
	// 	order.forEach(ord => {

	// 	})
	// });
	// console.log(cardsColor);
	start = false;

	if (flash == turn) {
		clearInterval(intervalId);
		compTurn = false;
		clearColor();
		console.log(cardId, 'line 75 intervalId', intervalId);
		start = true;
	}

	// 	if (compTurn) {
	// 		clearColor(cardId);
	// 		setTimeout(() => {
	// 			console.log('cardId line 82', cardId);
	// 			if (order[flash] == cardId) yellowPick();
	// 			if (order[flash] == cardId) orangePick();
	// 			if (order[flash] == cardId) redPick();
	// 			if (order[flash] == cardId) purplePick();
	// 			if (order[flash] == cardId) bluePick();
	// 			if (order[flash] == cardId) greenPick();
	// 			flash++;
	// 		}, 200);
	// 	}
	// }
	if (compTurn) {
		clearColor();
		console.log(
			'cardId',
			cardId,
			'order',
			order,
			'cardet',
			cardet,
			'foundCard',
			foundCard,
			'foundColor',
			foundColor
		);
		// console.log(cardId, 'line 95');
		setTimeout(() => {
			if (order[flash] == foundCard) colorPicker();
			if (order[flash] == 2) orangePick();
			if (order[flash] == 3) redPick();
			if (order[flash] == 4) purplePick();
			if (order[flash] == 5) bluePick();
			if (order[flash] == 6) greenPick();
			flash++;
		}, 200);
	}
	// });
}
function colorPicker() {
	console.log('hit yellow');
	cardet.style.border = `10px solid foundColor`;
	cardet.style.background = 'none';
}

function yellowPick() {
	// console.log('yellow', yellow, card);
	yellow.style.border = '10px solid yellow';
	yellow.style.background = 'none';
}

function orangePick() {
	// console.log('orange', orange, card);
	orange.style.border = '10px solid orange';
	orange.style.background = 'none';
}

function redPick() {
	// console.log('red', red, card);
	red.style.border = '10px solid red';
	red.style.background = 'none';
}

function purplePick() {
	// console.log('purple', purple, card);
	purple.style.border = '10px solid purple';
	purple.style.background = 'none';
}

function bluePick() {
	blue.style.border = '10px solid blue';
	blue.style.background = 'none';
}

function greenPick() {
	green.style.border = '10px solid green';
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

// function clearColor(cardId) {
// 	cardId.style.background = `${cardId}`;
// }

// function flashColor() {
// 	yellow.style.border = '10px solid yellow';
// 	yellow.style.background = 'none';
// }

function colorPick(carda) {
	carda.style.border = `10px solid cardaColor`;
	carda.style.background = 'none';
}

cards.forEach((carda) => {
	carda.addEventListener('click', (e) => {
		if (carda.id === carda.dataset.color) {
			cardaId = +carda.dataset.id;
			cardaColor = carda.dataset.color;
			findCard(cardaId);
			findColor(cardaColor, carda);
		}
		if (start) {
			playerOrder.push(cardaId);
			check();
			colorPick(carda);
			if (!win) {
				setTimeout(() => {
					clearColor();
				}, 300);
			}
		}
	});
});

function check() {
	if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) good = false;

	if (playerOrder.length == 3 && good) {
		winGame();
	}

	if (good == false) {
		flashColor();
		turnCounter.innerHTML = 'try again';
		setTimeout(() => {
			turnCounter.innerHTML = turn;
			clearColor();

			compTurn = true;
			flash = 0;
			playerOrder = [];
			good = true;
			intervalId = setInterval(gameTurn, 800);
		}, 800);
		console.log('intervalId line 220 compTurn', intervalId);
	}

	if (turn == playerOrder.length && good && !win) {
		turn++;
		playerOrder = [];
		compTurn = true;
		flash = 0;
		turnCounter.innerHTML = turn;
		intervalId = setInterval(gameTurn, 800);
	}
	console.log('intervalId line 232 playerTurn', intervalId);
}

function winGame() {
	flashColor();
	turnCounter.innerHTML = 'you win!';
	start = false;
	win = true;
}
