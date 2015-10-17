
module.exports = function() {
    return function(value, nextFilter) {
        var result = value.replace(/\s+/g, ' ');
        nextFilter(result);
    }
};
