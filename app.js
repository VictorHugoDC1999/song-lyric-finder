const form = document.querySelector('#form');
const searchInput = document.querySelector('#search');
const songsContainer = document.querySelector('#songs-container');
// eslint-disable-next-line no-unused-vars
const prevAndNextContainer = document.querySelector('#prev-and-next-container');

// eslint-disable-next-line no-unused-vars
const apiURL = 'https://api.lyrics.ovh';

const fetchSongs = async (term) => {
	const response = await fetch(`${apiURL}/suggest/${term}`);
	// eslint-disable-next-line no-unused-vars
	const data = await response.json();

};

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const searchTerm = searchInput.value.trim();

	if (!searchTerm) {
		songsContainer.innerHTML =
			'<li class="warning-message">Por favor, digite um termo válido</li>';
		return; //se o bloco if for executado ele vai ignorar todo o restante que está abaixo, por isso usamos essa propriedade
	}

	fetchSongs(searchTerm);
});
