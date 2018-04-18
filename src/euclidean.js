const differenceEuclidean = (mode = 'rgb') => {
	let channels = getModeDefinition(mode).channels;
	let conv = converter(mode);
	return (std, smp) => {
		let ConvStd = conv(std);
		let ConvSmp = conv(smp);
		return Math.sqrt(
			channels.reduce(
				(delta, k) => 
					// ignore alpha channel in computing the euclidean distance
					delta + (k === 'alpha' ? 0 : Math.pow(ConvStd[k] - ConvSmp[k], 2)), 
					0
				)
		);
	}
};