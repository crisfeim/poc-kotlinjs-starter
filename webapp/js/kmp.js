(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kmp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kmp'.");
    }
    root.kmp = factory(typeof kmp === 'undefined' ? {} : kmp, this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var println = kotlin_kotlin.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function printKotlin(message) {
    println('From Kotlin: ' + message);
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $shared = _.shared || (_.shared = {});
    $shared.printKotlin = printKotlin;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kmp.js.map
