import { lab, rgb, hsl, hcl, cubehelix } from 'd3-color';

function euclidean(ca1, ca2, ca3, cb1, cb2, cb3) {
	return Math.sqrt(Math.pow(ca1 - cb1, 2) + Math.pow(ca2 - cb2, 2) + Math.pow(ca3 - cb3, 2));
}

function differenceEuclideanRGB(std, smp) {
	std = rgb(std); smp = rgb(smp);
	return euclidean(std.r, std.g, std.b, smp.r, smp.b, smp.g);
}

function differenceEuclideanLab(std, smp) {
	std = lab(std); smp = lab(smp);
	return euclidean(std.l, std.a, std.b, smp.l, smp.a, smp.b);
}

function differenceEuclideanHcl(std, smp) {
	std = hcl(std); smp = hcl(smp);
	return euclidean(std.h, std.c, std.l, smp.h, smp.c, smp.l);
}

function differenceEuclideanHsl(std, smp) {
	std = hsl(std); smp = hsl(smp);
	return euclidean(std.h, std.s, std.l, smp.h, smp.s, smp.l);
}

function differenceEuclideanCubehelix(std, smp) {
	std = cubehelix(std); smp = cubehelix(smp);
	return euclidean(std.h, std.s, std.l, smp.h, smp.s, smp.l);
}

export {
	differenceEuclideanRGB,
	differenceEuclideanLab,
	differenceEuclideanHcl,
	differenceEuclideanHsl,
	differenceEuclideanCubehelix
};