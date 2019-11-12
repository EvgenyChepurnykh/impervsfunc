const values = [1, 2, 3]

const conditionsFunctional = function(){
    const logF = require('mojiscript/console/logF')
    const cond = require('mojiscript/logic/cond')
    const pipe = require('mojiscript/core/pipe')
    const run = require('mojiscript/core/run')
    
    const briefData = cond ([
        [0, 'Mr.'],
        [1, 'Mrs.'],
        [2, 'Ms.']
    ])
    const state = 1
    const dependencies = {
        logF
    }
    const main= ({logF}) => pipe ([
        briefData,
        logF (brief => `Sinserely yours ${brief} Atkinson`)
    ])
    run({dependencies, state, main})
}

const conditionsImperative = function() {
    const state = 1
    let str =''
    switch(state){
        case 0 : str = 'Mr.'
            break;
        case 1 : str = 'Mrs.'
            break;
        case 2 : str = 'Ms.'
            break
        default :
            alert("Can't handled")
    }
    console.log(`Sinserely yours ${str} Atkinson`)
}


module.exports = {
    ConditionsFunctional : conditionsFunctional,
    ConditionsImperative : conditionsImperative
}
