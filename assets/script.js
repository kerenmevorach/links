let body = document.querySelector('body')

let aboutButton = document.querySelector('#about');
let closeButton = document.querySelector('#close');
let aboutPage = document.querySelector('#about-page');

let imageGrid = document.querySelector('#image-grid');
let gridButton = document.querySelector('#grid-button');
let carouselButton = document.querySelector('#carousel-button');

aboutButton.onclick = function () {
    console.log("open about")
    aboutPage.style.display = 'block'
  
}

closeButton.onclick = function () {
    console.log("close about")
    aboutPage.style.display = 'none'
}


carouselButton.onclick= function () {
    console.log("carousel")
    body.removeChild(imageGrid);
}

gridButton.onclick= function () {
    console.log("grid")
    body.appendChild(imageGrid);
}