# Addressr Node.js Library
The Addressr Node library provides access to the Addressr API.

## Documentation

See [instructions on using the API](https://www.addressr.co/using-the-api)

## Installation

Install the package with:

    npm install addressr --save

## Usage

Configure the package with your key and secret.

``` js
var options = {
    key: 'key...',
    secret: 'secret...'
};
const addressr = require('addressr')(options);
```

Resolve an address with a promise:

``` js
addressr.resolveAddress('virtual-address')
.then(function(address) {
    address; // the address object
});
```

Resolve an address with a callback:

``` js
addressr.resolveAddress('virtual-address', function(address) {
    address; // the address object
});
```