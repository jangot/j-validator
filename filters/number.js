module.exports = function() {
    return function(value, nextFilter) {
        var result = parseInt(value);

        nextFilter(result);
    }
};