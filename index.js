var color = require('./functions.js')

if (process.argv[2]=='hex') {
	console.log(color.hexToRgb(process.argv[3]));
} else if (process.argv[2]=='rgb') {
	console.log(color.rgbToHex(process.argv[3],process.argv[4],process.argv[5]));
}