var tape = require('tape');
var diff = require('../');

tape('', function(test) {

	test.equal(diff.differenceCmc('red', 'green'), 7.054710682003843);

	test.end();
});
