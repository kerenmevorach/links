window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.

    
    //creates an array 
    const imagesBlocks = document.querySelectorAll('li.image-block')
    const videoBlocks = document.querySelectorAll('li.video-embed-block')

    console.log(imagesBlocks)

    imagesBlocks.forEach((block) => {
        block.querySelector('figure').onclick = () =>{
            block.classList.add('active')
        }
 
        block.querySelector('aside').onclick = () =>{
            block.classList.remove('active')
        }
    })

    videoBlocks.forEach((block) => {
        block.querySelector('figure').onclick = () =>{
            block.classList.add('active')
        }
 
        block.querySelector('aside').onclick = () =>{
            block.classList.remove('active')
        }
    })

        function scrollHeadline() {
            const channelTitle = document.querySelector('.channel-title')
            const aboutButton = document.querySelector('#about')

            if (document.documentElement.scrollTop > 50) {
                console.log('scroll')
                channelTitle.classList.add('small-headline')
                aboutButton.classList.add('small-button')
            } else {
                channelTitle.classList.remove('small-headline')
                aboutButton.classList.remove('small-button')
            }
        }

        window.addEventListener("scroll", scrollHeadline);

        // document.addEventListener("scroll", function(){
        //     console.log('hi')
        //     let clientHeight = document.documentElement.clientHeight;
        //     let imagesBlocksY = imagesBlocks.getBoundingClientRect().y;
        //     let imagesBlocksHeight = imagesBlocks.getBoundingClientRect().height;

        //     if (clientHeight > imagesBlocksY + imagesBlocksHeight) {
        //         block.classList.add('saturated-image')
        //     } 
        // })

        // function scrollColor() {

        //     if (200 < document.documentElement.scrollTop || document.documentElement.scrollTop < 400) {
        //         console.log('color')
        //         imagesBlocks.classList.add('saturated-image')
        //         videoBlocks.classList.add('saturated-image')
        //         // aboutButton.classList.add('small-button')
        //     } else {
        //         imagesBlocks.classList.remove('saturated-image')
        //         videoBlocks.classList.remove('saturated-image')
        //     }
        // }

        // window.addEventListener("scroll", scrollColor);
}



    // if (document.body.scrollTop > 200 || document.body.scrollTop > 80) {


// function scrollFunction() {
//     if (scrollTop > 200) {
//         channelTitle.classList.add('small-headline')
//         channelTitle.style.fontSize = "20px"
//     } 
//     }
    
    // scrollFunction()
    // window.addEventListener("scroll", scrollFunction);

  
    // function scrollToggle(x) {
    //   if (x.matches) { 
    //     console.log('add')
    //     window.addEventListener("scroll", scrollFunction);
    //     largeMobileNav()
    //   } else {
    //     console.log('remove')
    //     window.removeEventListener("scroll",scrollFunction);
    //     desktopNav()
    //   }
    // }
  
  

    // document.body.onscroll = function() {
    //     if (imagesBlocks.getBoundingClientRect().bottom <= window.innerHeight) {
    //         document.body.onscroll = "";
    //         // alert("The tag just came into view");

    //     }
    // }