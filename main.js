const reducer = require("./src/reduce")
const applier = require("./src/apply")
const worklow = require("./src/workflow")
const sort = require("./src/sort")
const template = require("./src/templates")
const clone = require("./src/clones")
const conditions = require("./src/conditions")
//const logical = require("./src/when")
//console.log('Reducer functional = ', reducer.ReducerFunctional())
//console.log('Reducer imperative = ', reducer.ReducerImperative())
//console.log("Applier functional = ", applier.ApplyFunctional())
//console.log("Applier imperative = ", applier.ApplyImperative())
//console.log("Pipe functional = ")
//worklow.PipeFunctional()
//console.log("Pipe imperative = " )
//worklow.PipeImperative()
//console.log("Sort imperative")
//sort.SortImperative()
//console.log('Sort functional')
//sort.SortFunctional()
//console.log("Template literals imperative =")
//template.TemplateImperative()
//console.log("Template literals functional")
//template.TemplateFunctional()
//console.log('Clone imperative = ', clone.ClonesImperative())
//console.log('Clone functional = ', clone.ClonesFunctional())
console.log("Conditions imperative =")
conditions.ConditionsImperative();
console.log("Conditions functional")
conditions.ConditionsFunctional();





