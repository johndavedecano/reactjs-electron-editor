const dir = require('node-dir');

/**
 * Iterate folder contents.
 * @param {string} folder
 * @return Promise
 */
const iterator = (folder) => {
	return new Promise((resolve, reject) => {
		const options = {
			recursive: false
		}
		dir.readFiles(folder, options,
			(err, content, next) => {
			    if (err) throw err;
			    next();
			},
			(err, files) => {
			    if (err) throw err;
			    resolve(files);
			    console.log('finished reading files:', files);
			});
	});
}


module.exports = iterator;