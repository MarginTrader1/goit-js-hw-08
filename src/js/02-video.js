// ипорт плеера
import Player from "@vimeo/player";

// импорт библиотеки лодаш
import throttle from "lodash.throttle";

// получаем ссылку на айфрейм
const iframe = document.querySelector("iframe");

// инициализируем плеер
const player = new Player(iframe);

player.on("play", function() {
    console.log("played the video!");
});

// добавляем время в хранилище
player.on("timeupdate", throttle((data) => {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));

// забираем время из хранилища
const savedTime = localStorage.getItem('videoplayer-current-time');

// время при перезагрузке
player.setCurrentTime(savedTime);







