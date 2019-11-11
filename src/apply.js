
const values = [1, 2, 3]

const applyFunctional = function(){
    const apply = require('mojiscript/list/ap')
    const appliedArray = apply ([x => Math.pow(x, 2), x => 2 * x]) (values)
    return appliedArray
}

const applyImperative = function(){
    let appliedArray = new Array();
    for (const x of values){
        appliedArray.push(Math.pow(x, 2))
    }
    for (const x of values) {
        appliedArray.push(2*x)
    }
    return appliedArray
}


module.exports = {
    ApplyFunctional : applyFunctional,
    ApplyImperative : applyImperative
};