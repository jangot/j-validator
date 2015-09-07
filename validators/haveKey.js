module.exports = function(message, list) {
    return function(value, next, stop) {
        if(list[value]) {
            next();
        } else {
            stop(message);
        }
    }
};