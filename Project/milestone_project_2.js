// scripts/main.js
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

searchInput.addEventListener('input', debounce(searchMovies, 300));

function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}

async function searchMovies() {
    resultsContainer.innerHTML = '';

    const query = searchInput.value;
    if (!query) return;

    const apiKey = 'YOUR_OMDB_API_KEY';
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Search) {
            data.Search.forEach((movie) => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie');
                movieElement.innerHTML = `
                    <img src="${movie.Poster}">
                    <h2>${movie.Title}</h2>
                    <p>${movie.Year}</p>
                `;
                resultsContainer.appendChild(movieElement);
            });
        } else {
            resultsContainer.innerHTML = 'No results found.';
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
