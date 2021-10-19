const form = document.querySelector('#form');
const searchInput = document.querySelector('#search');
const songsContainer = document.querySelector('#songs-container');
// eslint-disable-next-line no-unused-vars
const prevAndNextContainer = document.querySelector('#prev-and-next-container');

// eslint-disable-next-line no-unused-vars
const apiURL = 'https://api.lyrics.ovh';

const fetchSongs = term => {
	fetch(`${apiURL}/suggest/${term}`).then((response) => response.json()).then(data => {
		console.log(data);
	});
};

form.addEventListener('submit', event => {
	event.preventDefault();

	const searchTerm = searchInput.value.trim();

	if (!searchTerm) {
		songsContainer.innerHTML =
			'<li class="warning-message">Por favor, digite um termo válido</li>';
		return; //se o bloco if for executado ele vai ignorar todo o restante que está abaixo, por isso usamos essa propriedade
	}

	fetchSongs(searchTerm);
});
