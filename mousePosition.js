const draggable = (element) => {
	let dragging = null

	element.addEventListener('mousedown', (e) => {
		var e = window.event || e
		dragging = {
			mouseX: e.clientX,
			mouseY: e.clientY,
			startX: parseInt(element.style.left),
			startY: parseInt(element.style.top)
		}
		if (element.setCapture) element.setCapture()
	})

	element.addEventListener('losecapture', () => {
		dragging = null
	})

	document.addEventListener('mouseup', () => {
		dragging = null
	}, true)

	const dragTarget = element.setCapture ? element : document

	dragTarget.addEventListener('mousemove', (e) => {
		if (!dragging) return

		var e = window.event || e
		const top = dragging.startY + (e.clientY - dragging.mouseY)
		const left = dragging.startX + (e.clientX - dragging.mouseX)

		element.style.top = `${Math.max(0, top)}px`
		element.style.left = `${Math.max(0, left)}px`
	}, true)
}
