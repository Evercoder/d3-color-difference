function differenceWithOpacity(metric, std, smp) {
	let dist = metric(std, smp);
	return Math.sqrt(Math.pow(dist, 2) + Math.pow(std.opacity - smp.opacity, 2));
}

export default differenceWithOpacity;