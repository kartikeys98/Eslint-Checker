const Linter = require("eslint").Linter;
const linter = new Linter();


var linterRules = linter.getRules();
var filePath = './.eslintrc.json';
var esFile = require(filePath);
for(var rule in esFile.rules){
    if(linterRules.get(rule)){
        var lr = linterRules.get(rule);
        if(lr['meta']['deprecated']){
            console.log('rule: `'+rule+'` is deprecated use:'+'`'+
                lr['meta']['docs']['replacedBy']+'` instead');
        }
    }
    else{
        console.log('rule: `'+rule+'` does not exist in latest version.');
    }
}
