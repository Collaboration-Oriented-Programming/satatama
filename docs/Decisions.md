# SVGs imported as images
There is no way to edit the fill property when importing from an SVG file. We could use `<svg>` tags but that repetition that you see between the outline and filled files would be duplicated for every square.
∴ We can use a external SVG file with an `<img>` tag, distort it for the edges, and switch images when we need it to be filled or not.