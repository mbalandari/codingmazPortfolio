
const h1 = document.querySelector("h1");

window.addEventListener("scroll", function () {
    const pixels = window.scrollY;

    const fontSize = (pixels * .2 + 12) / 16;

    h1.style.fontSize = fontSize + "rem";
})