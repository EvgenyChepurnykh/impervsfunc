const reducer = require("./src/reduce")
const applier = require("./src/apply")
const worklow = require("./src/workflow")
//const logical = require("./src/when")
//console.log('Reducer functional = ', reducer.ReducerFunctional())
//console.log('Reducer imperative = ', reducer.ReducerImperative())
//console.log("Applier functional = ", applier.ApplyFunctional())
//console.log("Applier imperative = ", applier.ApplyImperative())
console.log("Pipe imperative = " )
worklow.PipeImperative()
console.log("Pipe functional = ")
worklow.PipeFunctional()




