const differenceCie94 = (kL = 1, K1 = 0.045, K2 = 0.015) => {
	let lab = converter('lab');
	
	return (std, smp) => {

		let LabStd = lab(std);
		let LabSmp = lab(smp);

		// Extract Lab values, and compute Chroma
		let lStd = LabStd.l;
		let aStd = LabStd.a;
		let bStd = LabStd.b;
		let cStd = Math.sqrt(aStd * aStd + bStd * bStd);

		let lSmp = LabSmp.l;
		let aSmp = LabSmp.a;
		let bSmp = LabSmp.b;
		let cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);

		let dL2 = Math.pow(lStd - lSmp, 2);
		let dC2 = Math.pow(cStd - cSmp, 2);
		let dH2 = Math.pow(aStd - aSmp, 2) + Math.pow(bStd - bSmp, 2) - dC2;

		return Math.sqrt(
			dL2 / Math.pow(kL, 2) + 
			dC2 / Math.pow(1 + K1 * cStd, 2) +
			dH2 / Math.pow(1 + K2 * cStd, 2)
		);
	}
}
