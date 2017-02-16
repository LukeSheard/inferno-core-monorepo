const spawn = require('child_process').exec;
const { join } = require('path');
const compilerOptions = require('../tsconfig.json').compilerOptions;


const flags = [ 'lerna exec --concurrency 1 -- tsc', '-d' ];
for (let i = 0; i < Object.keys(compilerOptions).length; i += 1) {
	const option = Object.keys(compilerOptions)[i];
	const optionValue = compilerOptions[option];
	
	let flagValue;
	switch (typeof(optionValue)) {
		case 'array': {
			flagValue = optionValue.join(',');
			break;
		}
		case 'boolean': {
			if (flagValue) {
				flagValue = '';
			} else {
				flagValue = false;
			}
			break;
		}
		default: {
			flagValue = optionValue;
		}
	}

	flags.push(`--${option} ${flagValue}`)
}

flags.push('src/**/*')

const command = flags.join(' ');

spawn(command, (err, stdout, stderr) => {
	// console.log(stdout);

	if (err) {
		throw err;
	}
});
