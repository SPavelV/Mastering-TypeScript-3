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
// class ComplexType implements IComplexType {
//   id: number;
//   name: string;
//   constructor(idArg: number, nameArg: string);
//   constructor(idArg: string, nameArg: string);
//   constructor(idArg: any, nameArg: any) {
//     if (typeof idArg === "number") {
//       this.id = idArg;
//     }
//     this.name = nameArg;
//   }
//   print(): string {
//     return "id" + this.id + " name:" + this.name;
//   }
//   usingTheAnyKeyword(arg1: any): any {
//     this.id = arg1;
//   }
//   usingOptionalParameters(optionalArg?: number) {
//     if(optionalArg) {
//       this.id = optionalArg;
//     }
//   }
//   usingDefaultParameters(defaultArg1: number = 0) {
//     this.id = defaultArg1;
//   }
//   usingRestSyntax(...argArray: number[]) {
//     if(argArray.length > 0) {
//       this.id = argArray[0];
//     }
//   }
//   usingFunctionCallbacks( callback: (id: number) => string) {
//     callback(this.id);
//   }
// }
// let ct_1 = new ComplexType(1, 'ct_1');
// let ct_2 = new ComplexType("abc", "ct_2");
// ct_2.print();
// ct_1.usingTheAnyKeyword(true);
// ct_1.usingTheAnyKeyword({ id: 1, name: "string"});
// ct_1.usingOptionalParameters(1);
// ct_1.usingOptionalParameters();
// ct_1.usingRestSyntax(1, 2, 3);
// ct_2.usingRestSyntax(1, 2, 3, 4, 5);
// function myCallbackFunction(id: number): string {
//   return id.toString();
// }
// ct_1.usingFunctionCallbacks(myCallbackFunction);
// // let ct_3 = new ComplexType(true, "test");
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
// console.log(`MyAutoClass.name: ${myAutoClass.name}`); // Property 'name' is private and only accassable within class 'classWithAutomaticProperties'.
var ClassWithReadOnly = /** @class */ (function () {
    function ClassWithReadOnly(_name) {
        this.name = _name;
    }
    ClassWithReadOnly.prototype.setReadOnly = function (_name) {
        // this.name = _name; // error: Cannot to 'name' because it is a constant or readonly property.
    };
    return ClassWithReadOnly;
}());
// Class property accessors
// =========
var ClassWithAccessors = /** @class */ (function () {
    function ClassWithAccessors() {
    }
    Object.defineProperty(ClassWithAccessors.prototype, "id", {
        get: function () {
            console.log("inside get id()");
            return this._id;
        },
        set: function (value) {
            console.log("inside set id()");
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    return ClassWithAccessors;
}());
var classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 2;
console.log("id property is set to " + classWithAccessors.id);
// Static functions 
// ==========
var StaticClass = /** @class */ (function () {
    function StaticClass() {
    }
    StaticClass.printTwo = function () {
        console.log("2");
    };
    return StaticClass;
}());
StaticClass.printTwo();
// Static properties
// ==========
var StaticProperty = /** @class */ (function () {
    function StaticProperty() {
    }
    StaticProperty.prototype.updateCount = function () {
        StaticProperty.count++;
    };
    StaticProperty.count = 0;
    return StaticProperty;
}());
var firstInstance = new StaticProperty();
console.log("StaticProperty.conunt = " + StaticProperty.count);
firstInstance.updateCount();
console.log("StaticProperty.count = " + StaticProperty.count);
var secondInstance = new StaticProperty();
secondInstance.updateCount();
console.log("StaticProperty.count = " + StaticProperty.count);
