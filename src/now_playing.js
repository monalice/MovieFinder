//renderiza filmes no cinema
const main = document.querySelector(`main`);


import cleanMain from "./main.js";

export default function requestNowPlaying() {
    var req = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=00677d2daa69a1cc4505e8c461dd2031`);
    req.then(renderNowPlaying);
}

function renderNowPlaying(response) {
    cleanMain();

    var results = response.data.results;
    results.forEach(element => {
        var img = document.createElement(`img`);
        img.classList.add(`poster`);
        img.setAttribute(`src`, `https://image.tmdb.org/t/p/w300${element.poster_path}`);
        img.setAttribute(`id`, element.id);
        main.appendChild(img);
    });
}