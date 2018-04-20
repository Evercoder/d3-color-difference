var tape = require('tape');
var diff = require('../');

tape('', function(test) {

	test.equal(diff.differenceDin99o('red', 'green'), 68.61703579396708);

	test.end();
});
