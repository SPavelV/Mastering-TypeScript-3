"use strict";
// Generics
// ========
var Concatenator = /** @class */ (function () {
    function Concatenator() {
    }
    Concatenator.prototype.concatenateArray = function (inputArray) {
        var returnString = "";
        for (var index = 0; index < inputArray.length; index++) {
            if (index > 0)
                returnString += ",";
            returnString += [index].toString();
        }
        return returnString;
    };
    return Concatenator;
}());
var stringConcat = new Concatenator();
var numberConcat = new Concatenator();
var stringArray = ["first", "second", "third"];
var numberArray = [1, 2, 3];
var stringResult = stringConcat.concatenateArray(stringArray);
var numberResult = numberConcat.concatenateArray(numberArray);
// const stringResult2 = stringConcat.concatenateArray(numberArray);
// const numberResult2 = numberConcat.concatenateArray(stringArray);
var MyClass = /** @class */ (function () {
    function MyClass(arg1) {
        this._name = arg1 + "_MyClass";
    }
    MyClass.prototype.toString = function () {
        return this._name;
    };
    return MyClass;
}());
var myArray = [
    new MyClass(1),
    new MyClass(2),
    new MyClass(3)
];
var myArrayConcatenator = new Concatenator();
var myArrayResult = myArrayConcatenator.concatenateArray(myArray);
