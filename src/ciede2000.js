import { lab } from 'd3-color';

/*
	CIEDE2000 color difference, original Matlab implementation by Gaurav Sharma
	Based on "The CIEDE2000 Color-Difference Formula: Implementation Notes, Supplementary Test Data, and Mathematical Observations" 
	by Gaurav Sharma, Wencheng Wu, Edul N. Dalal in Color Research and Application, vol. 30. No. 1, pp. 21-30, February 2005.
	http://www2.ece.rochester.edu/~gsharma/ciede2000/
 */

function differenceCiede2000(Kl, Kc, Kh) {

	Kl = Kl !== undefined ? Kl : 1;
	Kc = Kc !== undefined ? Kc : 1;
	Kh = Kh !== undefined ? Kh : 1;

	return function(std, smp) {
		var LabStd = lab(std);
		var LabSmp = lab(smp);

		var lStd = LabStd.l;
		var aStd = LabStd.a;
		var bStd = LabStd.b;
		var cStd = Math.sqrt(aStd * aStd + bStd * bStd);

		var lSmp = LabSmp.l;
		var aSmp = LabSmp.a;
		var bSmp = LabSmp.b;
		var cSmp = Math.sqrt(aSmp * aSmp + bSmp * bSmp);

		var cAvg = (cStd + cSmp) / 2;
		
		var G = 0.5 * (1 - Math.sqrt(Math.pow(cAvg, 7) / (Math.pow(cAvg, 7) + Math.pow(25, 7))));

		var apStd = aStd * (1 + G);
		var apSmp = aSmp * (1 + G);
		
		var cpStd = Math.sqrt(apStd * apStd + bStd * bStd);
		var cpSmp = Math.sqrt(apSmp * apSmp + bSmp * bSmp);
		
		var hpStd = Math.abs(apStd) + Math.abs(bStd) === 0 ? 0 : Math.atan2(bStd, apStd);
			hpStd += (hpStd < 0) * 2 * Math.PI;

		var hpSmp = Math.abs(apSmp) + Math.abs(bSmp) === 0 ? 0 : Math.atan2(bSmp, apSmp);
			hpSmp += (hpSmp < 0) * 2 * Math.PI;

		var dL = lSmp - lStd;
		var dC = cpSmp - cpStd;
		
		var dhp = cpStd * cpSmp === 0 ? 0 : hpSmp - hpStd;
			dhp -= (dhp > Math.PI) * 2 * Math.PI;
			dhp += (dhp < -Math.PI) * 2 * Math.PI;

		var dH = 2 * Math.sqrt(cpStd * cpSmp) * Math.sin(dhp / 2);

		var Lp = (lStd + lSmp) / 2;
		var Cp = (cpStd + cpSmp) / 2;

		var hp;
		if (cpStd * cpSmp === 0) {
			hp = hpStd + hpSmp;
		} else {
			hp = (hpStd + hpSmp) / 2;
			hp -= (Math.abs(hpStd - hpSmp) > Math.PI) * Math.PI;
			hp += (hp < 0) * 2 * Math.PI;
		}

		var Lpm50 = Math.pow(Lp - 50, 2);
		var T = 1 - 
				0.17 * Math.cos(hp - Math.PI / 6) + 
				0.24 * Math.cos(2 * hp) + 
				0.32 * Math.cos(3 * hp + Math.PI / 30) -
				0.20 * Math.cos(4 * hp - 63 * Math.PI / 180);
		
		var Sl = 1 + (0.015 * Lpm50) / Math.sqrt(20 + Lpm50);
		var Sc = 1 + 0.045 * Cp;
		var Sh = 1 + 0.015 * Cp * T;
		
		var deltaTheta = 30 * Math.PI / 180 * Math.exp(-1 * Math.pow((180 / Math.PI * hp - 275)/25, 2));
		var Rc = 2 * Math.sqrt(
			Math.pow(Cp, 7) / (Math.pow(Cp, 7) + Math.pow(25, 7))
		);

		var Rt = -1 * Math.sin(2 * deltaTheta) * Rc;

		return Math.sqrt(
			Math.pow(dL / (Kl * Sl), 2) + 
			Math.pow(dC / (Kc * Sc), 2) + 
			Math.pow(dH / (Kh * Sh), 2) + 
			Rt * dC / (Kc * Sc) * dH / (Kh * Sh)
		);
	};
}

export default differenceCiede2000();