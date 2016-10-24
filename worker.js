// import util script
self.importScripts("import.js");

// receive message
self.onmessage = function (event) {
	// manipulation data
	var greyImage = luminosityGrey(event.data);
	// send data
	self.postMessage(greyImage);
};
