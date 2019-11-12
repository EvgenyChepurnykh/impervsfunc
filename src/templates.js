
const templateFunctional = function(){
    const $ = require('mojiscript/string/template')
    const pipe = require('mojiscript/core/pipe')
    const log = require('mojiscript/console/log')
    const run = require('mojiscript/core/run')
    const state = { data1 : "Test data 1", data2 : "Test data 2"}
    const templateData = $ `First part of data ${'data1'} and then second part of data ${'data2'}`
    const main = pipe ([
        templateData,
        log
    ])
    run({state, main})
}

const templateImperative = function() {
    const state = { data1 : "Test data 1", data2 : "Test data 2"}
    let templatedData = `First part of data ${state.data1} and then second part of data ${state.data2}`
    console.log(templatedData)
}


module.exports = {
    TemplateFunctional : templateFunctional,
    TemplateImperative : templateImperative
};