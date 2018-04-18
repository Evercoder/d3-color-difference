var tape = require('tape');
var diff = require('../');
var { lab, hcl, cubehelix, hsl } = require('d3-color');

tape('differenceEuclideanRGB', function(test) {

	test.equal(diff.differenceEuclideanRGB('#ff0000', '#00ff00'), 360.62445840513925);
	test.equal(diff.differenceEuclideanRGB('#ff0000', '#0000ff'), 360.62445840513925);
	test.equal(diff.differenceEuclideanRGB('#00ff00', '#0000ff'), 360.62445840513925);

	test.end();
});

tape('differenceEuclideanLab', function(test) {

	test.equal(diff.differenceEuclideanLab(lab(100,0,0), lab(0,0,100)), 141.4213562373095);
	test.equal(diff.differenceEuclideanLab(lab(100,0,0), lab(0,100,0)), 141.4213562373095);
	test.equal(diff.differenceEuclideanLab(lab(0,100,0), lab(100,0,0)), 141.4213562373095);

	test.end();
});

tape('differenceEuclideanHcl', function(test) {

	test.equal(diff.differenceEuclideanHcl(hcl(100,0,0), hcl(0,0,100)), 141.4213562373095);
	test.equal(diff.differenceEuclideanHcl(hcl(100,0,0), hcl(0,100,0)), 141.4213562373095);
	test.equal(diff.differenceEuclideanHcl(hcl(0,100,0), hcl(100,0,0)), 141.4213562373095);

	test.end();
});

tape('differenceEuclideanHsl', function(test) {

	test.equal(diff.differenceEuclideanHsl(hsl(100,0,0), hsl(0,0,100)), 141.4213562373095);
	test.equal(diff.differenceEuclideanHsl(hsl(100,0,0), hsl(0,100,0)), 141.4213562373095);
	test.equal(diff.differenceEuclideanHsl(hsl(0,100,0), hsl(100,0,0)), 141.4213562373095);

	test.end();
});

tape('differenceEuclideanCubehelix', function(test) {

	test.equal(diff.differenceEuclideanCubehelix(cubehelix(100,0,0), cubehelix(0,0,100)), 141.4213562373095);
	test.equal(diff.differenceEuclideanCubehelix(cubehelix(100,0,0), cubehelix(0,100,0)), 141.4213562373095);
	test.equal(diff.differenceEuclideanCubehelix(cubehelix(0,100,0), cubehelix(100,0,0)), 141.4213562373095);

	test.end();
});