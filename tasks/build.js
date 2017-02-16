const exec = require('child_process').exec;
const compilerOptions = require('../tsconfig.json').compilerOptions;


const command = [ 'lerna exec --', 'tsc', '-d' ];
for (let i = 0; i < Object.keys(compilerOptions).length; i += 1) {
	const option = Object.keys(compilerOptions)[i];
	const optionValue = compilerOptions[option];
	
	let flagValue;
	switch (typeof(optionValue)) {
		case 'array': {
			flagValue = optionValue.join(',');
		}
		default: {
			flagValue = optionValue;
		}
	}

	command.push(`--${option} ${flagValue}`)
}

command.push('src/**/*')

console.log(command.join(' '))
