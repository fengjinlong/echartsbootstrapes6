'use strict';

var _ = require('2.js');

var ob1 = { k: 123 };
var ob2 = { o: 567 };
Object.assign(ob1, ob2);
console.log(ob1);

var fun = function fun() {
  return _.a + _.b + _.c;
};
fun();