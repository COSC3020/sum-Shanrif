const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSum =
    jsc.forall("array nat", function(arr) {
        // Got rid of the stringify because why are we comparing strings when we need to compare numbers?
        return sum(arr) == arr.reduce(function(a, b) { return a + b; }, 0);
    });

jsc.assert(testSum);