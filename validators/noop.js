module.exports = function() {
    return function(value, next, stop) {
        next();
    }
};
