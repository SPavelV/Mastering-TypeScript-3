"use strict";
function doCalculation(a, b, c) {
    return (a * b) + c;
}
var result = doCalculation(3, 2, 1);
console.log("doCalculation(): ", result);
// const result2 = doCalculation("3", "2", "1");
// console.log("doCalculation(): " + result2); 
// error TS2345: Argument of type '"3"' is not assignable to
// parameter of type 'number'.
var myString;
var myNumber;
var myBoolean;
myString = "1";
myNumber = 1;
myBoolean = true;
// myString = myNumber; // error TS2322: Type 'number' is not assignable to type 'string'.
// myBoolean = myString; // error TS2322:Type 'string' is not assignable to type 'boolean'.
// myNumber = myBoolean; // error TS2322: Type 'boolean' is not assignable to type 'number'.
// Синтаксис сильной типизации, который использует язык TypeScript, означает,
// что мы должны убедиться, что типы в левой части оператора присваивания (=)
// совпадают с типами в правой части оператора.
myString = myNumber.toString();
myBoolean = (myString === "test");
if (myBoolean) {
    myNumber = 1;
}
// inferred types:
var inferredString = "this is a string";
var inferredNumber = 1;
// inferredString = inferredNumber; // type 'number' is not assignable to type 'string'
// Duck typing:
var complexType = { name: "myName", id: 1 };
complexType = { id: 2, name: "another name" };
// complexType = { id: 2 }; // error TS2322: Type '{ id: number }' is not assignable to type '{ name: string; id: number; }'. Property 'name' is missing in type '{ id: number; }'.
// complexType = { name: "extraproperty", id: 2, extraProp: true} 
//error TS2322: Type '{ name: string; id: number; extraProp: boolean; }' is not assignabel to type '{ name: string; id: number; }'.
// Object literal may only specify known properties, and 'extraProp' does not exist in type '{ name: string; id: number; }'.
// Template strings:
var complexObject = {
    id: 2,
    name: 'testObject'
};
console.log("complexObject = " + JSON.stringify(complexObject));
// Arrays
var arrayOfNumbers = [1, 2, 3];
arrayOfNumbers = [3, 4, 5, 6, 7, 8, 9];
console.log("arrayOfNumbers: " + arrayOfNumbers);
// arrayOfNumbers = ["1", "2", "3"];  // Type 'string[]' is not assignable to type 'number[]'
// for
console.log("--- for:");
var arrayOfStrings = ["first", "second", "third"];
for (var i = 0; i < arrayOfStrings.length; i++) {
    console.log("--- arrayOfStrings[" + i + "] = " + arrayOfStrings[i]);
}
// for...in 
console.log("--- for...in:");
for (var itemKey in arrayOfStrings) {
    var itemValue = arrayOfStrings[itemKey];
    console.log("--- arrayOfStrings[" + itemKey + "]\", " + itemValue);
}
// for...of
console.log("--- for...of");
for (var _i = 0, arrayOfStrings_1 = arrayOfStrings; _i < arrayOfStrings_1.length; _i++) {
    var arrayItem = arrayOfStrings_1[_i];
    console.log("a--- rrayItem = " + arrayItem);
}
// enam
console.log("--- enum:");
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));
var openDoor = DoorState.Open;
console.log("--- openDoor is: " + openDoor);
var closedDoor = DoorState["Closed"];
console.log("--- closeDoor is : " + closedDoor);
var DoorStateSecond;
(function (DoorStateSecond) {
    DoorStateSecond[DoorStateSecond["Open"] = 3] = "Open";
    DoorStateSecond[DoorStateSecond["Closed"] = 7] = "Closed";
    DoorStateSecond[DoorStateSecond["Ajar"] = 10] = "Ajar";
})(DoorStateSecond || (DoorStateSecond = {}));
var constDoorOpen = 0 /* Open */;
console.log("--- constDoorOpen is: " + constDoorOpen);
// String Enum: 
console.log("--- String Enum");
var DoorStateString;
(function (DoorStateString) {
    DoorStateString["Open"] = "open";
    DoorStateString["Closed"] = "closed";
    DoorStateString["Ajar"] = "ajar";
})(DoorStateString || (DoorStateString = {}));
var openDoorString = DoorStateString.Open;
console.log("--- openDoorString = " + openDoorString);
// Enum realization:
var DoorStateThird;
(function (DoorStateThird) {
    DoorStateThird[DoorStateThird["Open"] = 0] = "Open";
    DoorStateThird[DoorStateThird["Closed"] = 1] = "Closed";
    DoorStateThird[DoorStateThird["Ajar"] = 2] = "Ajar";
})(DoorStateThird || (DoorStateThird = {}));
// Enum implementation
var ajarDoor = DoorStateThird[2];
console.log("--- ajarDoor is: " + ajarDoor);
var globalString;
setGlobalString();
console.log("--- globalString: " + globalString);
function setGlobalString() {
    globalString = "this has been set";
}
// Dotted property types
var normalObject = {
    id: 1,
    name: "test"
};
var stringObject = {
    "testProperty": 1,
    "anotherProperty": "this is a string"
};
var testProperty = stringObject.testProperty;
console.log("--- testPropertyValue = " + testProperty);
var testStringProperty = stringObject["testProperty"];
console.log("--- \"testPropertyValue\" = " + testStringProperty);
// Numberic Separators
var oneMillion = 1000000;
console.log("--- oneMillon = " + oneMillion);
var limeGreenColor = 65280;
console.log("--- limeGreenColor = " + limeGreenColor);
//# sourceMappingURL=samples-typescript.js.map