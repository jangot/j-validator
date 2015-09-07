var striptags = require('striptags');

module.exports = function() {
    return function(value, nextFilter) {
        value = value || '';
        var newValue = striptags(value);

        nextFilter(newValue);
    }
};