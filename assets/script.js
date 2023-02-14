let aboutButton = document.getElementById('about');
let closeButton = document.getElementById('close')
let aboutPage = document.getElementById('about-page')

aboutButton.onclick = function () {
    console.log("open about")
    aboutPage.style.display = 'block'
}

closeButton.onclick = function () {
    console.log("close about")
    aboutPage.style.display = 'none'
}