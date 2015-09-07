module.exports = function(message) {
    var RE = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return function(value, next, stop) {
        if(RE.test(value)) {
            next();
        } else {
            stop(message);
        }
    }
};