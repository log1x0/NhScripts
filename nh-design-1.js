// ==UserScript==
// @name         Userscript NH Style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://newheaven.nl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=newheaven.nl
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setStyle();
})();

function setStyle() {
    // let color1 = "#181818";
    let color1 = "SlateGray";
    let color2 = "LightGray";
    let color3 = "DarkGray";
    document.body.style.backgroundColor = color1;
    document.querySelectorAll(".column1, .column2").forEach(e => { e.style.background = color1 });
    document.querySelectorAll("td").forEach(e => { e.style.color = color2 });
    document.querySelectorAll("a, font").forEach(e => { e.style.color = color3 });
    document.querySelectorAll(".user_class, .vip_class").forEach(e => { e.style.color = color3 });
    document.querySelectorAll(".framecorner, .framebar").forEach(e => { e.style.backgroundImage = "none" });
}
