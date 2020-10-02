//Renderiza lista de filmes populares
const main = document.querySelector(`main`);
var resultsPopular;

import cleanMain from "./main.js";

export default function requestPopular() {
    var req = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=02366f3fcbdce2d3677f4fb7857e9f52`);
    req.then(renderPopular);
}

function renderPopular(response) {
    cleanMain();
    resultsPopular = response.data.results;

    resultsPopular.forEach(createImgPopular);
}

function createImgPopular(element) {
    var img = document.createElement(`img`);
    img.classList.add(`poster`);
    img.setAttribute(`src`, `https://image.tmdb.org/t/p/w300${element.poster_path}`);
    img.setAttribute(`id`, element.id);
    img.addEventListener(`click`, () => selectMoviePopular(element.id));

    main.appendChild(img);
}

function selectMoviePopular(item) {
    var movie = {};
    resultsPopular.forEach(element => {
        if(item == element.id) {
            movie.title = element.title;
            movie.vote = element.vote_average;
            movie.overview = element.overview;
            movie.poster = element.poster_path;
        }
    });

    renderMoviePopular(movie);
}

function renderMoviePopular(movie) {
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


/* //n ta pegando bem...
    cleanSelectMenu();
    btnPopular.style.backgroundColor = "green";
*/