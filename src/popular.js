//Renderiza lista de filmes populares

function requestPopular() {
    var req = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=00677d2daa69a1cc4505e8c461dd2031`);
    req.then(renderPopular);
}

export default function renderPopular(response) {
    console.log(response);
}