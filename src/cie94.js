import { lab } from 'd3-color';

function differenceCie94(kL, K1, K2) {

	kL = kL !== undefined ? kL : 1;
	K1 = K1 !== undefined ? K1 : 0.045;
	K2 = K2 !== undefined ? K2 : 0.015;

	return function(std, smp) {
		var LabStd = lab(std);
		var LabSmp = lab(smp);

		// Extract Lab values, and compute Chroma
		var lStd = LabStd.l;
		var aStd = LabStd.a;
		var bStd = LabStd.b;
		var cStd = Math.sqrt(aStd * aStd + bStd * bStd);

		var lSmp = LabSmp.l;
		var aSmp = LabSmp.a;
		var bSmp = LabSmp.b;
		var cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);

		var dL2 = Math.pow(lStd - lSmp, 2);
		var dC2 = Math.pow(cStd - cSmp, 2);
		var dH2 = Math.pow(aStd - aSmp, 2) + Math.pow(bStd - bSmp, 2) - dC2;

		return Math.sqrt(
			dL2 / Math.pow(kL, 2) + 
			dC2 / Math.pow(1 + K1 * cStd, 2) +
			dH2 / Math.pow(1 + K2 * cStd, 2)
		);
	}
}

export default differenceCie94;