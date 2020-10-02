//renderiza fimes com maiores notas
const main = document.querySelector(`main`);
var resultsTopRated;

import cleanMain from "./main.js";

export default function requestTopRated() {
    var req = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=02366f3fcbdce2d3677f4fb7857e9f52`);
    req.then(renderTopRated);
}

function renderTopRated(response) {
    cleanMain();
    resultsTopRated = response.data.results;

    resultsTopRated.forEach(createImgTopRated);
}

function createImgTopRated(element) {
    var img = document.createElement(`img`);
    img.classList.add(`poster`);
    img.setAttribute(`src`, `https://image.tmdb.org/t/p/w300${element.poster_path}`);
    img.setAttribute(`id`, element.id);
    img.addEventListener(`click`, () => selectMovieTopRated(element.id));

    main.appendChild(img);
}

function selectMovieTopRated(item) {
    var movie = {};
    resultsTopRated.forEach(element => {
        if(item == element.id) {
            movie.title = element.title;
            movie.vote = element.vote_average;
            movie.overview = element.overview;
            movie.poster = element.poster_path;
        }
    });

    renderMovieTopRated(movie);
}

function renderMovieTopRated(movie) {
    cleanMain();
    
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