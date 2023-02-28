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

    // function scrollFunction() {
    //     const smallHeadline = document.querySelector('.small-headline')
    //     const body = document.querySelector('body')
    //     const channelTitle = document.querySelector('.channel-title')
    
        // if (document.body.scrollTop > 200) {
        //     console.log('hi')
        //     channelTitle.style.fontSize = "20px";
        //     // channelTitle.classList.add('small-headline')
        // } 
        // }

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