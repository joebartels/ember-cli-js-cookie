/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-js-cookie',

  included: function(app) {
    this._super.included.apply(this, arguments);

    var jsCookiePath = path.join(app.bowerDirectory, 'js-cookie');
    this.app.import(path.join(jsCookiePath, 'src',  'js.cookie.js'));
  }
};
