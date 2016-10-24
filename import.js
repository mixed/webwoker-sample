
function luminosityGrey(image) {
	// Boilerplate.
	var masterLength = image.data.length | 0;

	var dirtyX = 0;
	var dirtyY = 0;
	var dirtyW = 800 | 0;
	var dirtyH = 216 | 0;
 
	// Actual manipulation code.

	var grey = 0;
	var gamma = 1.0;

	for (var i = 0; i < masterLength; i += 4){
		grey = (Math.pow(image.data[i], gamma) * 0.2126) +		// R channel
			   (Math.pow(image.data[i + 1], gamma) * 0.7152) + // G channel
			   (Math.pow(image.data[i + 2], gamma) * 0.0722);	// B channel

		image.data[i] = grey;
		image.data[i + 1] = grey;
		image.data[i + 2] = grey;
		image.data[i + 3] = 255;
	}

	return image;
}
