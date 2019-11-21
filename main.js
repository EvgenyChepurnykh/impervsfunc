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
// console.log("Conditions imperative =")
// conditions.ConditionsImperative();
// console.log("Conditions functional")
// conditions.ConditionsFunctional();

const R = require("ramda")
//const result = R.ap([R.multiply(3), R.add(5), R.subtract(1)], [1,2,3])
const transformObject = R.applySpec({
	name : R.prop('name'),
	surname : R.prop('surname'),
	nest : {
		object : R.tap(x => console.log(x))
	}
})({name:'john', surname:'doe'})
// console.dir(transformObject.nest.object)
// console.dir(transformObject)

const f = x => y => x + y
const add10 = f(10) 
console.log(add10(45))

const joinThreeString = (first, second, third) => first + second + third
const curriedJointThreeStrings = R.curry(joinThreeString)
const firstPart = curriedJointThreeStrings("first ")
const result = firstPart("second ", "third")
console.log(result)

const firstPart1 = curriedJointThreeStrings("first ", "second ")
const result1 = firstPart1("third")
console.log(result1)

const uncurriedFunc = R.uncurryN(3, curriedJointThreeStrings)
const result2 = uncurriedFunc("first ", "second ", "third ")
console.log(result2)





