var tape = require('tape');
var diff = require('../');

tape('', function(test) {

	test.equal(diff.differenceCie94('red', 'green'), 48.848456144752525);

	test.end();
});
