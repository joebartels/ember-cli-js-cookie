/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-js-cookie',

  included: function(app) {
    this._super.included.apply(this, arguments);
    this.import('vendor/js.cookie.js');
  },

  treeForVendor: function(vendorTree) {
    var momentTree = new Funnel(path.dirname(require.resolve('js-cookie')), {
      files: ['js.cookie.js'],
    });
    return vendorTree ? new MergeTrees([vendorTree, momentTree]) : momentTree;
  }
};
