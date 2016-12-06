function sieveOfEratosthenes (n){
    n = parseInt(n, 10);

    // when less than 1
    if (n <= 1) {
        return [];
    }

    var array, sqrt = n * n, primeNumbers = [], n = n + 1;

    // initial create array
    array = Array(n).fill(true);

    for (var i = 2; i <= sqrt; i++) {
        if (array[i]) {
            // remove multiple
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (var i = 2; i < n; i++) {
        // find prime numbers
        if (array[i]) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

// received message
self.onmessage = function(event) {
    // get Prime Numbers
    var primeNumbers = sieveOfEratosthenes(event.data);
    // send data
    self.postMessage(primeNumbers);
};