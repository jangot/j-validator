module.exports = function() {
    var separator = ',';
    return function(value, nextFilter) {
        var result = value.replace(/ /g, '').split(separator);

        nextFilter(result);
    }
};