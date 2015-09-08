var striptags = require('striptags');

module.exports = function() {
    return function(value, nextFilter) {
        value = value || '';
        var newValue = null;

        if (typeof value === 'object') {
            newValue = value;
            for (var name in value) {
                newValue[name] = striptags(newValue[name])
            }
        } else {
            newValue = striptags(value);
        }

        nextFilter(newValue);
    }
};