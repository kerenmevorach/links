window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.

    
    const smallHeadline = document.querySelector('.small-headline')
    const body = document.querySelector('body')
    const channelTitle = document.querySelector('channel-title')
    
    
    
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
}


function scrollFunction() {
    if (scrollTop > 200) {
        // channelTitle.classList.add('small-headline')
        channelTitle.style.fontSize = "20px"
    } 
    }
    
    scrollFunction()
    window.addEventListener("scroll", scrollFunction);

  
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