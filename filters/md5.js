var crypto = require('crypto');

module.exports = function() {
    return function(value, nextFilter) {
        var md5 = crypto.createHash('md5')
            .update(value)
            .digest('hex');

        nextFilter(md5);
    }
};