export { 
	differenceEuclideanRGB, 
	differenceEuclideanLab, 
	differenceEuclideanHcl, 
	differenceEuclideanHsl, 
	differenceEuclideanCubehelix,
	differenceEuclideanLab as differenceCie76
} from './src/euclidean';
export { default as differenceCie94, differenceCie94Weighted } from './src/cie94';
export { default as differenceCiede2000, differenceCiede2000Weighted } from './src/ciede2000';
export { default as differenceCmc, differenceCmcWeighted } from './src/cmc';
export { default as differenceDin99o, differenceDin99oWeighted } from './src/din99o.js';