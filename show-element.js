export function getShowElement(show) {
	return `<div class="show-item">
	<h3>${show.show.name}</h3>
	<a class="show-image">
		<img src="${show.show.image?.medium || 'http://static.tvmaze.com/uploads/images/medium_portrait/149/372805.jpg'}">
	</a>
	<a class="favorite" href="#">/3</a>
	<a class="ranks" href="#">${show.show.rating.average}</a>
</div>`
}
