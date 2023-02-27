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
}

