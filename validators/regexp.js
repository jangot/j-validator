module.exports = function(regexp, message) {
    return function(value, next, stop) {
        if(regexp.test(value)) {
            next();
        } else {
            stop(message);
        }
    }
};
