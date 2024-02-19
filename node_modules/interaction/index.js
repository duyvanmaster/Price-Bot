var _ = require('underscore');
var herit = require('herit');

module.exports = herit({
  constructor: function (options) { _.extend(this, options); }
});
