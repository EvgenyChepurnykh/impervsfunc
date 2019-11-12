const values = [1, 2, 3]

const pipeFunctional = function(){
	const pipe = require('mojiscript/core/pipe')
	const run = require('mojiscript/core/run')
	const log = require('mojiscript/console/log')
	const map = require('mojiscript/list/map')
	const dependencies = {
		log
	}
	const state= {
		data : values
	}
	
	
	const main = ({log}) => pipe([
			data => map(x => x * 2)(data),
			data => map(x => x + 100)(data), 
			log
	])
	
	/*
	const t = map(x => x + 1)(values)

	const main = pipe([
		data => map( x=> x + 1)(data),
		data => map( y => y * 10)(data),
		log
	])
	main(values)//.then((result) => console.log(result))
	*/
    run({dependencies, state, main})
}

const pipeImperative = function(){
    for (const x of values) {
		let data = x * 2
		console.log(data)
	}
}


module.exports = {
    PipeFunctional : pipeFunctional,
    PipeImperative : pipeImperative
};