const differenceCmc = (l = 1, c = 1) => {
	let lab = converter('lab');
	return (std, smp) => {

		let LabStd = lab(std);
		let LabSmp = lab(smp);

		let lStd = LabStd.l;
		let aStd = LabStd.a;
		let bStd = LabStd.b;
		let cStd = Math.sqrt(aStd * aStd + bStd * bStd);
		let hStd = Math.atan2(bStd, aStd);
			hStd = hStd + 2 * Math.PI * (hStd < 0);

		let lSmp = LabSmp.l;
		let aSmp = LabSmp.a;
		let bSmp = LabSmp.b;
		let cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);

		let dL2 = Math.pow(lStd - lSmp, 2);
		let dC2 = Math.pow(cStd - cSmp, 2);
		let dH2 = Math.pow(aStd - aSmp, 2) + Math.pow(bStd - bSmp, 2) - dC2;

		let F = Math.sqrt(Math.pow(cStd, 4) / (Math.pow(cStd, 4) + 1900));
		let T = hStd >= (164 / 180 * Math.PI) && 
				hStd <= (345 / 180 * Math.PI) ?
					0.56 + Math.abs(0.2 * Math.cos(hStd + 168 / 180 * Math.PI)) 
					: 0.36 + Math.abs(0.4 * Math.cos(hStd + 35 / 180 * Math.PI));

		let Sl = lStd < 16 ? 0.511 : ((0.040975 * lStd) / (1 + 0.01765 * lStd));
		let Sc = 0.0638 * cStd / (1 + 0.0131 * cStd) + 0.638;
		let Sh = Sc * (F * T + 1 - F);

		return Math.sqrt(
			dL2 / Math.pow(l * Sl, 2),
			dC2 / Math.pow(c * Sc, 2),
			dH2 / Math.pow(Sh, 2)
		);
	};
};