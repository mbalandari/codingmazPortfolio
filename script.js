
const h1 = document.querySelector("h1");

window.addEventListener("scroll", function () {
    const pixels = window.scrollY;

    const fontWeight = pixels * .4 + 100;
    const fontWidth = pixels * .1 + 100;

    h1.style.fontVariationSettings = `"wght" ${fontWeight}, "wdth" ${fontWidth}`
})