
const sortFunctional = () => {
	const pipe = require('mojiscript/core/pipe')
	const run = require('mojiscript/core/run')
    const log = require('mojiscript/console/log')
    const logF = require('mojiscript/console/logF')
	const sort = require('mojiscript/list/sort')
	const dependencies = {
		log,
		logF
	}
	const state= {
		data : [1, 4, 7, 15, 2, 6]
	}
    
    const compare = x => y => x > y ? 1 : -1
	const main = ({log, logF}) => pipe ([
			logF (x => x.data),
		    ({data}) => sort (compare) (data),
			log
	])
	
    run({dependencies, state, main})
}

const sortImperative = () => {
    let values = [1, 4, 7, 15, 2, 6]
    console.log(values)
    console.log(values.sort((x, y) => x > y ? 1 : -1))
}


module.exports = {
    SortFunctional : sortFunctional,
    SortImperative : sortImperative
};