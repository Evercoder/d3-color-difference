# d3-color-difference

## Installing

## API Reference

<a name="differenceEuclideanRGB" href="differenceEuclideanRGB">#</a> d3.__differenceEuclideanRGB__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [Euclidean distance][euclidean] between the colors _a_ and _b_ in the [RGB][RGB] color space.

<a name="differenceEuclideanLab" href="differenceEuclideanLab">#</a> d3.__differenceEuclideanLab__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [Euclidean distance][euclidean] between the colors _a_ and _b_ in the [Lab][Lab] color space.

<a name="differenceEuclideanHcl" href="differenceEuclideanHcl">#</a> d3.__differenceEuclideanHcl__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [Euclidean distance][euclidean] between the colors _a_ and _b_ in the [HCL][HCL] color space.

<a name="differenceEuclideanHsl" href="differenceEuclideanHsl">#</a> d3.__differenceEuclideanHsl__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [Euclidean distance][euclidean] between the colors _a_ and _b_ in the [HSL][HSL] color space.

<a name="differenceEuclideanCubehelix" href="differenceEuclideanCubehelix">#</a> d3.__differenceEuclideanCubehelix__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [Euclidean distance][euclidean] between the colors _a_ and _b_ in the [Cubehelix][Cubehelix] color space.

<a name="differenceCie76" href="differenceCie76">#</a> d3.__differenceCie76__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/euclidean.js "Source")

Computes the [CIE76][CIE76] ΔE\*<sub>ab</sub> color difference between the colors _a_ and _b_. The computation is done in the [Lab][Lab] color space and it is analogous to [differenceEuclideanLab](#differenceEuclideanLab).

<a name="differenceCie94" href="differenceCie94">#</a> d3.__differenceCie94__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/cie94.js "Source")

Computes the [CIE94][CIE94] ΔE\*<sub>94</sub> color difference between the colors _a_ and _b_. The computation is done in the [Lab][Lab] color space.

<a name="differenceCiede2000" href="differenceCiede2000">#</a> d3.__differenceCiede2000__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/ciede2000.js "Source")

Computes the [CIEDE2000][CIEDE2000] ΔE\*<sub>00</sub> color difference between the colors _a_ and _b_ as implemented by [G. Sharma](http://www2.ece.rochester.edu/~gsharma/ciede2000/). The computation is done in the [Lab][Lab] color space.

<a name="differenceCmc" href="differenceCmc">#</a> d3.__differenceCmc__(_a_, _b_) [<>](https://github.com/danburzo/d3-color-difference/blob/master/src/cmc.js "Source")

Computes the [CMC l:c (1984)][CMC] ΔE\*<sub>CMC</sub> color difference between the colors _a_ and _b_. The computation is done in the [Lab][Lab] color space. 

_Note:_ ΔE\*<sub>CMC</sub> is not considered a metric since it's not symmetrical, i.e. the distance from _a_ to _b_ is not always equal to the distance from _b_ to _a_.

[color-diff]: https://en.wikipedia.org/wiki/Color_difference
[euclidean]: https://en.wikipedia.org/wiki/Color_difference#Euclidean
[CIE76]: https://en.wikipedia.org/wiki/Color_difference#CIE76
[CIE94]: https://en.wikipedia.org/wiki/Color_difference#CIE94
[CIEDE2000]: https://en.wikipedia.org/wiki/Color_difference#CIEDE2000
[CMC]: https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)
[RGB]: https://github.com/d3/d3-color#rgb
[HSL]: https://github.com/d3/d3-color#hsl
[Lab]: https://github.com/d3/d3-color#lab
[HCL]: https://github.com/d3/d3-color#hcl
[Cubehelix]: https://github.com/d3/d3-color#cubehelix