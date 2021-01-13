import { getShowElement } from './show-element.js';

const input = document.querySelector('#search-input');

function renderShows(shows = []) {
	document.querySelector('.shows-list').innerHTML = shows.map(getShowElement).join("")
}

function search(text) {
	return fetch(`http://api.tvmaze.com/search/shows?q=${text}`)
		.then(response => response.json())
}

search('big bang')
	.then(shows => renderShows(shows))

document.querySelector('#search')
	.addEventListener('submit', (event) => {
		event.preventDefault();

		search(input.value).then(shows => renderShows(shows))
	})
