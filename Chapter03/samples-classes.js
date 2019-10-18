"use strict";
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass has id : " + this.id);
    };
    return SimpleClass;
}());
var mySimpleClass = new SimpleClass();
mySimpleClass.id = 1001;
mySimpleClass.print();
function printClass(a) {
    a.print();
}
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () { console.log('ClassA.print()'); };
    ;
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () { console.log('ClassB.print()'); };
    ;
    return ClassB;
}());
var classA = new ClassA();
var classB = new ClassB();
printClass(classA);
printClass(classB);
// Class constructors
// ==========
var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    return ClassWithConstructor;
}());
var classWithConstructor = new ClassWithConstructor(1, "name");
console.log("classWithConstructor = " + JSON.stringify(classWithConstructor));
var ComplexType = /** @class */ (function () {
    function ComplexType(idArg, nameArg) {
        if (typeof idArg === "number") {
            this.id = idArg;
        }
        this.name = nameArg;
    }
    ComplexType.prototype.print = function () {
        return "id" + this.id + " name:" + this.name;
    };
    ComplexType.prototype.usingTheAnyKeyword = function (arg1) {
        this.id = arg1;
    };
    ComplexType.prototype.usingOptionalParameters = function (optionalArg) {
        if (optionalArg) {
            this.id = optionalArg;
        }
    };
    ComplexType.prototype.usingDefaultParameters = function (defaultArg1) {
        if (defaultArg1 === void 0) { defaultArg1 = 0; }
        this.id = defaultArg1;
    };
    ComplexType.prototype.usingRestSyntax = function () {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    };
    ComplexType.prototype.usingFunctionCallbacks = function (callback) {
        callback(this.id);
    };
    return ComplexType;
}());
var ct_1 = new ComplexType(1, 'ct_1');
var ct_2 = new ComplexType("abc", "ct_2");
ct_2.print();
ct_1.usingTheAnyKeyword(true);
ct_1.usingTheAnyKeyword({ id: 1, name: "string" });
ct_1.usingOptionalParameters(1);
ct_1.usingOptionalParameters();
ct_1.usingRestSyntax(1, 2, 3);
ct_2.usingRestSyntax(1, 2, 3, 4, 5);
function myCallbackFunction(id) {
    return id.toString();
}
ct_1.usingFunctionCallbacks(myCallbackFunction);
// let ct_3 = new ComplexType(true, "test");
//  Class modifiers
//  ==========
var ClassWithPublicProperty = /** @class */ (function () {
    function ClassWithPublicProperty() {
    }
    return ClassWithPublicProperty;
}());
var publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty(_id) {
        this.id = _id;
    }
    return ClassWithPrivateProperty;
}());
var privateAccess = new ClassWithPrivateProperty(10);
// privateAccess.id = 20; // error: Property 'id' is private and only accassible within class 'ClassWithPrivateProperty'.
var classWithAutomaticProperties = /** @class */ (function () {
    function classWithAutomaticProperties(id, name) {
        this.id = id;
        this.name = name;
    }
    return classWithAutomaticProperties;
}());
var myAutoClass = new classWithAutomaticProperties(1, "className");
console.log("MyAutoClass.id: " + myAutoClass.id);
console.log("MyAutoClass.name: " + myAutoClass.name);
