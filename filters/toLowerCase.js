module.exports = function() {
    return function(value, nextFilter) {
        var result = value.toLowerCase();

        nextFilter(result);
    }
};