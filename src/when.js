var when = require("mojiscript/logic/when")

const isNotNull = obj => obj != null
const toUpperCase = when (isNotNull) (string => string.toUpperCase ())

const name = 'joel'
const upperName = toUpperCase (name)
console.log(upperName)