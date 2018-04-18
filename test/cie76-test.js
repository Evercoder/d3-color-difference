var tape = require('tape');
var diff = require('../');

tape('differenceCie76 is an alias of differenceEuclideanLab', function(test) {

	test.equal(diff.differenceCie76('red', 'green'), diff.differenceEuclideanLab('red', 'green'));
	test.equal(diff.differenceCie76('blue', 'white'), diff.differenceEuclideanLab('blue', 'white'));
	test.equal(diff.differenceCie76('fuchsia', 'crimson'), diff.differenceEuclideanLab('fuchsia', 'crimson'));

	test.end();
});
