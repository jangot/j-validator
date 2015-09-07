module.exports = require('./validator');

module.exports.noop = require('./validators/noop');
module.exports.required = require('./validators/required');
module.exports.regexp = require('./validators/regexp');
module.exports.minLength = require('./validators/minLength');
module.exports.maxLength = require('./validators/maxLength');
module.exports.email = require('./validators/email');
module.exports.haveKey = require('./validators/haveKey');
module.exports.haveRecord = require('./validators/haveRecord');
module.exports.isNumber = require('./validators/isNumber');

module.exports.stripTags = require('./filters/stripTags');
module.exports.md5 = require('./filters/md5');
module.exports.number = require('./filters/number');
module.exports.toLowerCase = require('./filters/toLowerCase');
module.exports.split = require('./filters/split');
module.exports.setIfNothing = require('./filters/setIfNothing');
