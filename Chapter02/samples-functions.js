"use strict";
// Functions
// =========
function addNumbers(a, b) {
    return (a + b).toString();
}
var addResult = addNumbers(2, 3);
console.log("addNumbes returned : " + addResult);
// Anonimus functons:
// ==================
var addVar = function (a, b) {
    return a + b;
};
var addVarResult = addVar(2, 3);
console.log("addVarResult:", addVarResult);
// Optional parameters:
// ====================
var concatStrings = function (a, b, c) {
    return a + b + c;
};
var concat3strings = concatStrings("a", "b", "c");
console.log("concat3strings : " + concat3strings);
var concat2strings = concatStrings("a", "b");
console.log("concat2strings : " + concat2strings);
// const concat1string = concatStrings("a");
// Default parameters
// ==================
function concatStringsDefault(a, b, c) {
    if (c === void 0) { c = "c"; }
    return a + b + c;
}
var defaultConcat = concatStringsDefault("a", "b");
console.log("--- defaultConcat = " + defaultConcat);
// rest parameters
// ===============
// function testArguments() {
//   if(arguments.length > 0) {
//     for(let i = 0; i < arguments.length; i++) {
//       console.log("--- arguments[" + i + "] = " + arguments[i]);
//     }
//   }
// }
// testArguments(1, 2, 3);
// testArguments("firstArg");
function testArgumentsTS() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i] = arguments[_i];
    }
    if (argArray.length > 0) {
        for (var i_1 = 0; i_1 < argArray.length; i_1++) {
            console.log("--- argArray[" + i_1 + "] = " + argArray[i_1]);
            // use JavaScript arguments variable
            console.log("--- arguments[" + i_1 + "] = " + arguments[i_1]);
        }
    }
}
testArgumentsTS(9);
testArgumentsTS(1, 2, 3);
function testNormalAndRestArguments(arg1, arg2) {
    var argArray = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        argArray[_i - 2] = arguments[_i];
    }
}
// Function callbacks
// ==================
// js implementation
// const callbackFunction = function(text) {
//   console.log("--- insideFunction", text);
// };
// function doSomethingWhithCallback(initialText: string, callback) {
//   console.log("--- inside doSomthingWithCallback", initialText);
//   if(typeof callback === "function") {
//     callback(initialText);
//   } else {
//     console.log(initialText + " is not a function!");
//   }
// }
// doSomethingWhithCallback("text", callbackFunction);
// ts implementation
function callbackFunction(text) {
    console.log("--- inside callbackFunction = " + text);
}
function doSomethingWithACallback(initialText, callback) {
    console.log("--- inside doSomethingWithCallback = " + initialText);
    callback(initialText);
}
doSomethingWithACallback("myText", callbackFunction);
function add(a, b) {
    return a + b;
}
console.log("--- add(1,1) = " + add(1, 1));
console.log("--- add(\"1\", \"1\") = " + add("1", "1"));
// console.log(`--- add(true, false) = ${add(true, false)}`); 
// error TS2345: Argument of type 'true' is not assignable to
// parameter of type 'number'.
// try catch
// =========
try {
    console.log("--- 1. attempting to parse JSON");
    JSON.parse("abcd=234");
}
catch (error) {
    console.log("2. try catch error : " + error);
}
finally {
    console.log("3. finaly");
}
//# sourceMappingURL=samples-functions.js.map