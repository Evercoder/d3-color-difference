export { 
	differenceEuclideanRGB, 
	differenceEuclideanLab, 
	differenceEuclideanHcl, 
	differenceEuclideanHsl, 
	differenceEuclideanCubehelix,
	differenceEuclideanLab as differenceCie76
} from './src/euclidean';
export { default as differenceCie94 } from './src/cie94';
export { default as differenceCiede2000 } from './src/ciede2000';
export { default as differenceCmc } from './src/cmc';