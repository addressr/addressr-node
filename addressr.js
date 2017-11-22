const requestPromise = require('request-promise');

function Addressr(options) {

    var auth = 'Basic ' + new Buffer(options.key + ':' + options.secret).toString('base64');

    /**
     * Resolves a virtual address to a street address.
     * 
     * @param {string} virtualAddress The virtual address to resolve.
     * @return {Promise}
     */
    function resolveAddress(virtualAddress, callback) {

        var options = {
            uri: 'https://api.addressr.co/v1/addresses/' + virtualAddress,
            headers: {
                'Authorization': auth
            }
        };

        return requestPromise(options)
        .then(function(address) {
            if(!callback) return address;
            return callback(address);
        })
        .catch(function(err) {
            if(!callback) return err;
            return callback(err);
        });
    }

    return {
        resolveAddress: resolveAddress
    }
}

module.exports = function (options) {
    return new Addressr(options);
}