module.exports = function(message) {
    return function(value, next, stop) {
        var number = Number(value);
        if(!isNaN(number)) {
            next();
        } else {
            stop(message);
        }
    }
};