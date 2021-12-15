// import { getFromLocalStorage } from './libs/localStorageHelpers.js';
// import createHTML from './libs/createHTML.js';
// import {
// 	getFromLocalStorage,
// 	saveToLocalStorage,
// } from './libs/localHelpers.js';

// (function () {
// 	let cartItem = getFromLocalStorage('cartItem');
// 	let cardContainer = document.querySelector('.cards');

// 	if (!favourites || favourites.length === 0) {
// 		createHTML(cardContainer, [], 'cartItem');
// 	} else {
// 		createHTML(cardContainer, cartItem, 'cartItem');
// 	}
// })();


// let cardContainer = document.querySelector('.card');
// let articles = [];

// (async function () {
// 	try {
// 		const response = await axios.get('https://sem-project-api.herokuapp.com/api/products/' + id);
// 		articles = response.data;

// 		createHTML(cardContainer, articles, 'Articles');

// 		let cart = document.querySelectorAll('.cart');
// 		// return array of elements

// 		cart.forEach((cart) => {
// 			cart.onclick = function () {
// 				cart.classList.toggle('fas');

// 				let article = {
// 					id: cart.dataset.id,
// 					title: cart.dataset.title,
// 					summary: cart.dataset.summary,
// 					author: cart.dataset.author,
// 				};

// 				let favourites = getFromLocalStorage('favourites');

// 				let isInStorage = favourites.find((singleFavourite) => {
// 					return singleFavourite.id === like.dataset.id;
// 				});

// 				if (isInStorage === undefined) {
// 					favourites.push(article);
// 					saveToLocalStorage('favourites', favourites);
// 				} else {
// 					// Ill do some guidance on this later
// 					let removedFavouritesArray = favourites.filter((singleFavourite) => {
// 						return singleFavourite.id !== like.dataset.id;
// 					});

// 					saveToLocalStorage('favourites', removedFavouritesArray);
// 				}
// 			};
// 		});
// 	} catch (error) {
// 		alert(
// 			document.querySelector('.alert'),
// 			'alert-danger',
// 			'Error: ' + error.message
// 		);
// 	}
// })();