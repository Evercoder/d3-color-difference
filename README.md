# d3-color-difference

[![Greenkeeper badge](https://badges.greenkeeper.io/danburzo/d3-color-difference.svg)](https://greenkeeper.io/)

See this [Observable notebook](https://beta.observablehq.com/@danburzo/color-difference-formulas-with-d3-color-difference) for a demonstration.

## Installing

```bash
$ npm install d3-color-difference
```

## API Reference

### Euclidean Distances

<a name="differenceEuclideanRGB" href="#differenceEuclideanRGB">#</a> d3.__differenceEuclideanRGB__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [Euclidean distance][euclidean] between the colors _a_ and _b_ in the [RGB][RGB] color space.

<a name="differenceEuclideanLab" href="#differenceEuclideanLab">#</a> d3.__differenceEuclideanLab__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [Euclidean distance][euclidean] between the colors _a_ and _b_ in the [Lab][Lab] color space.

<a name="differenceEuclideanHcl" href="#differenceEuclideanHcl">#</a> d3.__differenceEuclideanHcl__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [Euclidean distance][euclidean] between the colors _a_ and _b_ in the [HCL][HCL] color space.

<a name="differenceEuclideanHsl" href="#differenceEuclideanHsl">#</a> d3.__differenceEuclideanHsl__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [Euclidean distance][euclidean] between the colors _a_ and _b_ in the [HSL][HSL] color space.

<a name="differenceEuclideanCubehelix" href="#differenceEuclideanCubehelix">#</a> d3.__differenceEuclideanCubehelix__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [Euclidean distance][euclidean] between the colors _a_ and _b_ in the [Cubehelix][Cubehelix] color space.

### CIE Delta-E 

<a name="differenceCie76" href="#differenceCie76">#</a> d3.__differenceCie76__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [CIE76][CIE76] ΔE\*<sub>ab</sub> color difference between the colors _a_ and _b_. The computation is done in the [Lab][Lab] color space and it is analogous to [differenceEuclideanLab](#differenceEuclideanLab).

<a name="differenceCie94" href="#differenceCie94">#</a> d3.__differenceCie94__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/cie94.js "Source")

Computes the [CIE94][CIE94] ΔE\*<sub>94</sub> color difference between the colors _a_ and _b_. The computation is done in the [Lab][Lab] color space, with the default weights _kL = 1_, _K1 = 0.045_, and _K2 = 0.015_.

<a name="differenceCie94Weighted" href="#differenceCie94Weighted">#</a> d3.__differenceCie94Weighted__(_kL_, _K1_, _K2_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/cie94.js "Source")

Returns a [CIE94][CIE94] difference function with custom weighting parameters.

<a name="differenceCiede2000" href="#differenceCiede2000">#</a> d3.__differenceCiede2000__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/ciede2000.js "Source")

Computes the [CIEDE2000][CIEDE2000] ΔE\*<sub>00</sub> color difference between the colors _a_ and _b_ as implemented by [G. Sharma](http://www2.ece.rochester.edu/~gsharma/ciede2000/). The computation is done in the [Lab][Lab] color space, with the default weights _kL = kC = kH = 1_.

<a name="differenceCiede2000Weighted" href="#differenceCiede2000Weighted">#</a> d3.__differenceCiede2000Weighted__(_kL_, _kC_, _kH_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/ciede2000.js "Source")

Returns a [CIEDE2000][CIEDE2000] difference function with custom weighting parameters.

<a name="differenceCmc" href="#differenceCmc">#</a> d3.__differenceCmc__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/cmc.js "Source")

Computes the [CMC l:c (1984)][CMC] ΔE\*<sub>CMC</sub> color difference between the colors _a_ and _b_. The computation is done in the [Lab][Lab] color space with the default weights _l = c = 1_.

_Note:_ ΔE\*<sub>CMC</sub> is not considered a metric since it's not symmetrical, i.e. the distance from _a_ to _b_ is not always equal to the distance from _b_ to _a_.

<a name="differenceCmcWeighted" href="#differenceCmcWeighted">#</a> d3.__differenceCmcWeighted__(_l_, _c_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/cmc.js "Source")

Returns a [CMC l:c (1984)][CMC] difference function with custom weighting parameters.

<a name="differenceDin99o" href="#differenceDin99o">#</a> d3.__differenceDin99o__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/din99o.js "Source")

Computes the [DIN99o][DIN99oDE] ΔE\*<sub>99o</sub> color difference between the colors _a_ and _b_. The computation is done in the [DIN99o][DIN99o] color space with the default weights _kCH = kE = 1_.

<a name="differenceDin99oWeighted" href="#differenceDin99oWeighted">#</a> d3.__differenceDin99oWeighted__(_kCH_, _kE_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/din99o.js "Source")

Returns a [DIN99o][DIN99oDE] difference function with custom weighting parameters.

### Opacity

<a name="differenceWithOpacity" href="#differenceWithOpacity">#</a> d3.__differenceWithOpacity__(_differenceFunction_, _a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/withOpacity.js "Source")

The difference functions don't take the colors' alpha channel into account when computing distances. This method allows you to factor the colors' opacities into the distance.

[color-diff]: https://en.wikipedia.org/wiki/Color_difference
[euclidean]: https://en.wikipedia.org/wiki/Color_difference#Euclidean
[CIE76]: https://en.wikipedia.org/wiki/Color_difference#CIE76
[CIE94]: https://en.wikipedia.org/wiki/Color_difference#CIE94
[CIEDE2000]: https://en.wikipedia.org/wiki/Color_difference#CIEDE2000
[CMC]: https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)
[DIN99o]: https://de.wikipedia.org/wiki/DIN99-Farbraum
[DIN99oDE]: https://de.wikipedia.org/wiki/DIN99-Farbraum#Farbabstandsformel
[RGB]: https://github.com/d3/d3-color#rgb
[HSL]: https://github.com/d3/d3-color#hsl
[Lab]: https://github.com/d3/d3-color#lab
[HCL]: https://github.com/d3/d3-color#hcl
[Cubehelix]: https://github.com/d3/d3-color#cubehelix