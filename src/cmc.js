import { lab } from 'd3-color';

function differenceCmc(l, c) {

	l = l !== undefined ? l : 1;
	c = c !== undefined ? c : 1;

	return function(std, smp) {

		var LabStd = lab(std);
		var LabSmp = lab(smp);

		var lStd = LabStd.l;
		var aStd = LabStd.a;
		var bStd = LabStd.b;
		var cStd = Math.sqrt(aStd * aStd + bStd * bStd);
		var hStd = Math.atan2(bStd, aStd);
			hStd = hStd + 2 * Math.PI * (hStd < 0);

		var lSmp = LabSmp.l;
		var aSmp = LabSmp.a;
		var bSmp = LabSmp.b;
		var cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);

		var dL2 = Math.pow(lStd - lSmp, 2);
		var dC2 = Math.pow(cStd - cSmp, 2);
		var dH2 = Math.pow(aStd - aSmp, 2) + Math.pow(bStd - bSmp, 2) - dC2;

		var F = Math.sqrt(Math.pow(cStd, 4) / (Math.pow(cStd, 4) + 1900));
		var T = hStd >= (164 / 180 * Math.PI) && 
				hStd <= (345 / 180 * Math.PI) ?
					0.56 + Math.abs(0.2 * Math.cos(hStd + 168 / 180 * Math.PI)) 
					: 0.36 + Math.abs(0.4 * Math.cos(hStd + 35 / 180 * Math.PI));

		var Sl = lStd < 16 ? 0.511 : ((0.040975 * lStd) / (1 + 0.01765 * lStd));
		var Sc = 0.0638 * cStd / (1 + 0.0131 * cStd) + 0.638;
		var Sh = Sc * (F * T + 1 - F);

		return Math.sqrt(
			dL2 / Math.pow(l * Sl, 2),
			dC2 / Math.pow(c * Sc, 2),
			dH2 / Math.pow(Sh, 2)
		);
	};
}

export default differenceCmc();