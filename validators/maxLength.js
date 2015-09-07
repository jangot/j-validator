module.exports = function(length, message) {
    return function(value, next, stop) {
        if(value.length < length) {
            next();
        } else {
            stop(message);
        }
    }
};