var Q = require('q');

module.exports = function() {
    this.validators = {};
    this.filters = {};
    this.values = {};
    this.body = null;
};

module.exports.prototype = {
    validate: function(body, cb) {
        cb = cb || function() {};

        this.body = body;

        var deferred = Q.defer();

        this._validate(body, function(haveErrors, errors) {
            if (haveErrors) {
                deferred.reject(errors);
            } else {
                deferred.resolve(this.values);
            }
            cb(haveErrors, errors);
        }.bind(this));


        return deferred.promise;
    },
    _validate: function(body, cb) {
        this.values = {};
        var validatorsNames = Object.keys(this.validators);
        var validatorsCount = validatorsNames.length;
        var index = 0;
        var errors = {};

        if (validatorsCount === 0) {
            cb(false, {});
        }

        validatorsNames.forEach(function(name) {
            if (this.validators[name].length === 0) {
                index++;
                return;
            }
            this._validateArea(this.validators[name], body[name], function(error, message) {
                if (error) {
                    errors[name] = message;
                    finallyAction();
                } else {
                    if (this.filters[name]) {
                        this._filterField(this.filters[name], body[name], function(result) {
                            this.values[name] = result;
                            finallyAction();
                        }.bind(this));
                    } else {
                        this.values[name] = body[name];
                        finallyAction();
                    }

                }

                function finallyAction() {
                    index++;
                    if (validatorsCount === index) {
                        var haveErrors = Object.keys(errors).length > 0;
                        cb(haveErrors, errors);
                    }
                }
            }.bind(this));
        }.bind(this));
    },

    _filterField: function(filters, initialValue, cb) {
        var self = this;
        var index = -1;
        function next(value) {
            index++;
            if (filters.length === index) {
                cb(value);
            } else {
                filters[index](value, next, self.body);
            }
        }

        next(initialValue);
    },

    _validateArea: function(validators, value, stopCb) {
        var stopFlag = false;
        var index = -1;

        function stop(message) {
            if (stopFlag) {
                return;
            }
            stopFlag = true;
            stopCb(!!message, message);
        }
        var self = this;
        function next() {
            if (stopFlag) {
                return;
            }

            index++;
            if (index === validators.length) {
                stopCb(null);
            } else {
                validators[index].apply(self, [value, next, stop]);
            }
        }
        next();
    },
    addValidator: function(name, validator) {
        this.validators[name] = this.validators[name] || [];
        this.validators[name].push(validator);

        return this;
    },
    addFilter: function(name, filter) {
        this.filters[name] = this.filters[name] || [];
        this.filters[name].push(filter);

        return this;
    }
}
