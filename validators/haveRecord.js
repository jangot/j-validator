module.exports = function(service, field, message) {
    return function(value, next, stop) {
        service.haveRecord(field, value, function(err, result) {
            if(err || result) {
                stop(message);
            } else {
                next();
            }
        });
    }
};