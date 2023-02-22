// The Description is returned as Markdown, of course.
let markdownIt = document.createElement('script')
markdownIt.src = 'https://cdnjs.cloudflare.com/ajax/libs/markdown-it/12.3.2/markdown-it.min.js'
document.head.appendChild(markdownIt)



const setBasics = (data) => {
	document.title = data.title

	const channelTitle = document.querySelectorAll('.channel-title')
	const channelDescription = document.querySelectorAll('.channel-description')

	channelTitle.forEach((element) => element.innerHTML = data.title)
	channelDescription.forEach((element) => element.innerHTML = window.markdownit().render(data.metadata.description))

	const renderUser = (user, id) => {
		let containers = document.querySelectorAll(`.${id}`)

		containers.forEach((container) => {
			let template = document.getElementById(id)

			if (!container || !template) return

			template = template.content.cloneNode(true)

			let elements = [
				'fullName',
				'link',
			]

			// This could be a function, with the one below.
			elements = Object.assign({},
				...elements.map(string => ({
					[string]: template.querySelectorAll(`.${string.replace(/[A-Z]/g, "-$&").toLowerCase()}`)
				}))
			)

			elements.link.forEach((element) => user.slug ? element.href = `https://www.are.na/${user.slug}` : element.remove())

			container.appendChild(template)
		})
	}

	renderUser(data.owner, 'channel-owner')

	data.collaborators.forEach((user) => renderUser(user, 'channel-collaborator'))
}



const parseBlocks = (data) => {
	let blocks = [
		'image',
		'link',
		'pdf',
		'text',
		'videoEmbed',
		'videoFile',
	]

	blocks.forEach((type) => {
		let typeClass = type.replace(/[A-Z]/g, "-$&").toLowerCase()
		let typeName = type.split(/[A-Z]/g)[0];
		(typeName == 'pdf') ? typeName = typeName.toUpperCase() : typeName = typeName[0].toUpperCase() + typeName.slice(1)

		let typeContainers = document.querySelectorAll(`.${typeClass}-blocks`)
		let typeTemplate = document.getElementById(`${typeClass}-block`)

		blocks[type] = {
			name: typeName,
			containers: typeContainers,
			template: typeTemplate ? typeTemplate.content : null,
		}
	})

	data.contents.slice().reverse().forEach((block) => {
		switch (block.class) {
			case 'Attachment':
				let attachment = block.attachment.content_type
				if (attachment.includes('audio')) {
					renderBlock(block, blocks.audioFile)
				}
				else if (attachment.includes('pdf')) {
					renderBlock(block, blocks.pdf)
				}
				else if (attachment.includes('video')) {
					renderBlock(block, blocks.videoFile)
				}
				break

			case 'Image':
				renderBlock(block, blocks.image)
				break

			case 'Link':
				renderBlock(block, blocks.link)
				break

			case 'Media':
				let media = block.embed.type
				if (media.includes('rich')) {
					renderBlock(block, blocks.audioEmbed)
				}
				else if (media.includes('video')) {
					renderBlock(block, blocks.videoEmbed)
				}
				break

			case 'Text':
				renderBlock(block, blocks.text)
				break
		}
	})
}


const renderBlock = (block, type) => {
	if (!type.template || !type.containers) return

	type.containers.forEach((container) => {
		let template = type.template.cloneNode(true)
		let elements = [
			'title',
			'image',
			'embed',
			'audio',
			'video',
			'link',
			'linkTitle',
			'content',
			'description',
			'type',
			'timeUpdated',
			'timeCreated',
		]

		elements = Object.assign({},
			...elements.map(string => ({
				[string]: template.querySelectorAll(`.${string.replace(/[A-Z]/g, "-$&").toLowerCase()}`)
			}))
		)

		const srcOrSrcset = (element, size) => element.tagName == 'IMG' ? element.src = block.image[size].url : element.srcset = block.image[size].url

		elements.title.forEach((element) => block.title ? element.innerHTML = block.title : element.remove())
		elements.image.forEach((element) => block.image ? srcOrSrcset(element, 'large') : element.remove())
		elements.embed.forEach((element) => block.embed ? element.innerHTML = block.embed.html : element.remove())
		elements.audio.forEach((element) => block.attachment ? element.src = block.attachment.url : element.remove())
		elements.video.forEach((element) => block.attachment ? element.src = block.attachment.url : element.remove())
		elements.link.forEach((element) => {
			if (block.source) {
				element.href = block.source.url
				elements.linkTitle.forEach((element) => element.innerHTML = block.source.title)
			}
			else if (block.attachment) {
				element.href = block.attachment.url
				elements.linkTitle.forEach((element) => element.innerHTML = block.title)
			}
			else {
				element.remove()
			}
		})
		elements.content.forEach((element) => block.content_html ? element.innerHTML = block.content_html : element.remove())
		elements.description.forEach((element) => block.description_html ? element.innerHTML = block.description_html : element.remove())
		elements.type.forEach((element) => element.innerHTML = type.name)

		container.append(template)
	})
}



const channel = document.getElementById('channel-url').href.split('/').filter(Boolean).pop()

fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
	.then(response => response.json())
	.then(data => {
		setBasics(data)
		parseBlocks(data)
	})

