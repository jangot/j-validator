module.exports = function(message) {
    return function(value, next, stop) {
        if(value) {
            next();
        } else {
            stop(message);
        }
    }
};