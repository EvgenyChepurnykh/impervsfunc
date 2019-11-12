
const values = [1, 2, 3]

const reducerFunctional = function(){
    const reduce = require('mojiscript/list/reduce')
    const add = x => y => x + y
    const sum = reduce (add) (0)
    return sum (values)
}

const reducerImperative = function() {
    let sum = 0
    for (const x of values) {
        sum = sum + x
    }
    return sum
}


module.exports = {
    ReducerFunctional : reducerFunctional,
    ReducerImperative : reducerImperative
}

