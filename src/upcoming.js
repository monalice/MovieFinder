const main = document.querySelector(`main`);
var resultsUpComing;

import cleanMain, { btnUpComing, cleanSelectMenu } from "./main.js";

export default function requestUpComing() {
    var req = axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=02366f3fcbdce2d3677f4fb7857e9f52&language=pt-br&page=1`);
    req.then(renderUpComing);
    cleanSelectMenu();
    btnUpComing.classList.add("select");
}

function renderUpComing(response) {
    cleanMain();
    resultsUpComing = response.data.results;

    resultsUpComing.forEach(createImgUpComing);
}

function createImgUpComing(element) {
    var img = document.createElement(`img`);
    img.classList.add(`poster`);
    img.setAttribute(`src`, `https://image.tmdb.org/t/p/w300${element.poster_path}`);
    img.setAttribute(`id`, element.id);
    img.addEventListener(`click`, () => selectMovieUpComing(element.id));

    main.appendChild(img);
}

function selectMovieUpComing(item) {
    var movie = {};
    resultsUpComing.forEach(element => {
        if(item == element.id) {
            movie.title = element.title;
            movie.vote = element.vote_average;
            movie.overview = element.overview;
            movie.poster = element.poster_path;
        }
    });

    renderMovieUpComing(movie);
}

function renderMovieUpComing(movie) {
    cleanMain();
    menu.style.display = "none";
    
    var section = document.createElement("section");
    section.setAttribute("id", "oneMovie");
    section.innerHTML +=`
    <div class="container">
        <img src="https://image.tmdb.org/t/p/w300${movie.poster}">
        <div>
            <div class="title">
                <span id="title-yellow">${movie.title}</span>
                <span id="vote">${movie.vote}</span>
            </div>
            <div class="overview">${movie.overview}</div>
        </div>
    </div>`;

    main.appendChild(section);
}