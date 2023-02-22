let body = document.querySelector('body')

let aboutButton = document.querySelector('#about');
let closeButton = document.querySelector('#close');
let aboutPage = document.querySelector('#about-page');
let viewButtons = document.querySelector('.view-buttons');

// let imageGrid = document.querySelector('#image-grid');

let gridView = document.querySelector('.grid-view');


let imageCarousel = document.querySelector('#image-carousel');

let gridButton = document.querySelector('#grid-button');
let carouselButton = document.querySelector('#carousel-button');



let imageElement = document.querySelector('#carousel');
let carouselView = document.querySelector('#carousel-view');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');


carouselButton.onclick= function () {
    console.log("carousel")
    body.removeChild(gridView);
    
    // imageElement.style.display = 'flex'
    // leftArrow.style.display = 'flex'
    // rightArrow.style.display = 'flex'

    // body.appendChild(carouselView);
    body.appendChild(leftArrow);
    body.appendChild(rightArrow);

}

gridButton.onclick= function () {
    console.log("grid")

    // imageElement.style.display = 'none'
    // body.removeChild(imageElement);

    // leftArrow.style.display = 'none'
    // body.removeChild(leftArrow);

    // rightArrow.style.display = 'none'
    // body.removeChild(rightArrow);

    body.appendChild(gridView);   
}




// let counter = 1

// imageElement.src = imageArray[0];

// imageElement.onclick = function() {
//     imageElement.src = imageArray[counter];
//     counter++;

//     if (counter == imageArray.length +1){
//         location.reload();
//         // counter=0
//     }
// }

let imageArray = ["assets/images/image1.jpeg","assets/images/image2.jpeg", "assets/images/image3.jpeg", "assets/images/image4.jpeg","assets/images/image5.jpeg", "assets/images/image6.jpeg"]

//possible to get an array of blocks from the html?

function changeImage(){

    let counter = 0
      
      //creating a function for the next button.
      rightArrow.onclick = function() {
        counter++;
        console.log("next")
        console.log(counter)
        
        if (counter <= 5){
            imageElement.src = imageArray[counter];
        } else if (counter > 5){
        counter = 0
        } 
      }

      //creating a function for the previous button.
      leftArrow.onclick = function() {
        console.log("previous")
        counter--;
        console.log("previous")
        console.log(counter)

        if (counter > 0 && counter < 6){
            imageElement.src = imageArray[counter];
        } else if (counter < 0){
          counter = 6
        } 
      }
    };

    changeImage();














// aboutButton.onclick = function () {
//     console.log("open about")
//     aboutPage.style.display = 'block'
  
// }

// closeButton.onclick = function () {
//     console.log("close about")
//     aboutPage.style.display = 'none'
// }
