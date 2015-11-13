/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-js-cookie',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/js-cookie/src/js.cookie.js');
  }
};
