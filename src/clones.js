const values = [1, 2, 3]

const clonesFunctional = function(){
    const reduce = require('mojiscript/list/reduce')
    const clone = require('mojiscript/object/clone')
    const clonedArray = clone(values)
    return clonedArray
}

const clonesImperative = function() {
    let clonedArray = [...values]
    return clonedArray
}


module.exports = {
    ClonesFunctional : clonesFunctional,
    ClonesImperative : clonesImperative
}
