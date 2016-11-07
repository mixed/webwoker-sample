function grayScale(image) {
    var masterLength = image.data.length || 0;
    var grey = 0;

    for (var i = 0; i < masterLength; i += 4) {
        grey = (image.data[i] + // R channel
            image.data[i + 1] + // G channel
            image.data[i + 2]) / 3; // B channel

        image.data[i] = grey;
        image.data[i + 1] = grey;
        image.data[i + 2] = grey;
        image.data[i + 3] = 255;
    }

    return image;
}


// received message
self.onmessage = function(event) {
    // manipulation data
    var greyImage = grayScale(event.data);
    // send data
    self.postMessage(greyImage);
};