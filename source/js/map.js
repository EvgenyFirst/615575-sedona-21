'use strict';

// если скрипт загрузился корректно, то будет интерактивная карта вместо изображения

var removeMapPicNoJsOne = document.querySelector(".map__empty");
var removeMapPicNoJsTwo = document.querySelector(".map__marker-empty");
var removeBottomNoJs = document.querySelector(".bottom");

removeMapPicNoJsOne.classList.remove("map__pic-no-js");
removeMapPicNoJsTwo.classList.remove("map__marker-no-js");
removeBottomNoJs.classList.remove("bottom-no-js");

removeMapPicNoJsOne.classList.add("map__hidden");
removeMapPicNoJsTwo.classList.add("map__hidden");

var removeMapFrameNoJs = document.querySelector(".map__frame-empty");
removeMapFrameNoJs.classList.remove("map__frame-no-js");
