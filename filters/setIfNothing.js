module.exports = function(defaultValue) {
    return function(value, nextFilter) {
        value = value || defaultValue;

        nextFilter(value);
    }
};