function toggleVisibility(element) {
	const child = element.children[0];
	const imagePath = child.src;
	if (imagePath.endsWith('outline.svg')) {
		child.src = child.src.slice(0, -11) + 'filled.svg'
	} else if (imagePath.endsWith('filled.svg')) {
		child.src = child.src.slice(0, -10) + 'outline.svg'
	} else {
		alert("Uh oh, something's went wrong. Please report at https://github.com/Collaboration-Oriented-Programming/satatama/issues")
	}
}