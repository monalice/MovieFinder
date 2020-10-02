//renderiza filmes no cinema
const main = document.querySelector(`main`);
var resultsNowPlaying;

import cleanMain from "./main.js";

export default function requestNowPlaying() {
    var req = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=02366f3fcbdce2d3677f4fb7857e9f52`);
    req.then(renderNowPlaying);
}

function renderNowPlaying(response) {
    cleanMain();

    resultsNowPlaying = response.data.results;
    resultsNowPlaying.forEach(createImgNowPlaying);
}

function createImgNowPlaying(element) {
    var img = document.createElement(`img`);
    img.classList.add(`poster`);
    img.setAttribute(`src`, `https://image.tmdb.org/t/p/w300${element.poster_path}`);
    img.setAttribute(`id`, element.id);
    img.addEventListener(`click`, () => selectMovieNowPlaying(element.id));

    main.appendChild(img);
}

function selectMovieNowPlaying(item) {
    var movie = {};
    resultsNowPlaying.forEach(element => {
        if(item == element.id) {
            movie.title = element.title;
            movie.vote = element.vote_average;
            movie.overview = element.overview;
            movie.poster = element.poster_path;
        }
    });

    renderMovieNowPlaying(movie);
}

function renderMovieNowPlaying(movie) {
    cleanMain();
    menu.style.display = "none";
    
    var section = document.createElement("section");
    section.setAttribute("id", "oneMovie");
    section.innerHTML += `
    <div class="container">
        <img src="https://image.tmdb.org/t/p/w300${movie.poster}">
        <div>
            <div class="title">
                <span>${movie.title}</span>
                <span>${movie.vote}</span>
            </div>
            <div class="overview">${movie.overview}</div>
        </div>
    </div>`;

    main.appendChild(section);

}