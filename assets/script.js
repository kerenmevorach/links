let body = document.querySelector('body')

let aboutButton = document.querySelector('#about');
let closeButton = document.querySelector('#close');
let aboutPage = document.querySelector('#about-page');
let viewButtons = document.querySelector('.view-buttons');

let imageGrid = document.querySelector('#image-grid');
let imageCarousel = document.querySelector('#image-carousel');
let gridButton = document.querySelector('#grid-button');
let carouselButton = document.querySelector('#carousel-button');

let imageElement = document.querySelector('#carousel');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');



carouselButton.onclick= function () {
    console.log("carousel")
    body.removeChild(imageGrid);
    
    imageElement.style.display = 'block'
    leftArrow.style.display = 'block'
    rightArrow.style.display = 'block'

    body.appendChild(imageElement);
    body.appendChild(leftArrow);
    body.appendChild(rightArrow);

}

gridButton.onclick= function () {
    console.log("grid")

    imageElement.style.display = 'none'
    body.removeChild(imageElement);

    leftArrow.style.display = 'none'
    body.removeChild(leftArrow);

    rightArrow.style.display = 'none'
    body.removeChild(rightArrow);

    body.appendChild(imageGrid);   
}


let imageArray = ["assets/images/image1.jpeg","assets/images/image2.jpeg", "assets/images/image3.jpeg", "assets/images/image4.jpeg","assets/images/image5.jpeg", "assets/images/image6.jpeg"]

let counter = 1

imageElement.src = imageArray[0];

imageElement.onclick = function() {
    imageElement.src = imageArray[counter];
    counter++;

    if (counter == imageArray.length +1){
        location.reload();
        // counter=0
    }
}






// aboutButton.onclick = function () {
//     console.log("open about")
//     aboutPage.style.display = 'block'
  
// }

// closeButton.onclick = function () {
//     console.log("close about")
//     aboutPage.style.display = 'none'
// }
