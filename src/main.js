//comportamento do menu
const main = document.querySelector(`main`);

import requestPopular from "./popular.js";
import requestNowPlaying from "./now_playing.js";
import requestTopRated from "./top_rated.js";
import requestUpComing from "./upcoming.js";

requestPopular();

export default function cleanMain() {
    main.innerHTML = "";
}

/*export function cleanSelectMenu() {
    var btns = document.querySelectorAll("button");

    btns.forEach(item => {
        item.style.backgroundColor = "black";
    });
}*/

export var btnPopular = document.getElementById(`popular`);
btnPopular.addEventListener('click', requestPopular);

export var btnNowPlaying = document.getElementById(`now_playing`);
btnNowPlaying.addEventListener('click', requestNowPlaying);

export var btnTopRated = document.getElementById(`top_rated`);
btnTopRated.addEventListener('click', requestTopRated);

export var btnUpComing = document.getElementById(`up_coming`);
btnUpComing.addEventListener('click', requestUpComing);