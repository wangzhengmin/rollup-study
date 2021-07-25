(function () {
  'use strict';

  var add = function add(a, b) {
    return a + b;
  };

  var promise = function promise() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('hello word');
        resolve();
      }, 100);
    });
  };

  promise();
  console.log(add(1, 3));

}());
