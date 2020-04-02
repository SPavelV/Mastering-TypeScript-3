"use strict";
// // Decorator syntax
// // ================
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// function simpleDecorator(constructor: Function) {
//   console.log("simpleDecorator called.");
// }
// @simpleDecorator
// class ClassWithSimpleDecorator {}
// let instance_1 = new ClassWithSimpleDecorator();
// let instance_2 = new ClassWithSimpleDecorator();
// console.log(`instance_1 : ${JSON.stringify(instance_1)}`);
// console.log(`instance_2 : ${JSON.stringify(instance_2)}`);
// function secondDecorator(constructor: Function) {
//   console.log("secondDecorator called.");
// }
// @simpleDecorator
// @secondDecorator
// class ClassWithMultipleDecorators {}
// // Decorators factories
// // ====================
// function decoratorFactory(name: string) {
//   return function(constructor: Function) {
//     console.log(`decorator function called with: ${name}`);
//   };
// }
// @decoratorFactory("testName")
// class ClassWithDecoratorFactory {}
// // Class decorator parameters
// // ==========================
// function classConstructorDec(constructor: Function) {
//   console.log(`constructor : ${constructor}`);
//   console.log(`constructor.name : ${<any>constructor.name}`);
//   constructor.prototype.testProperty = "testProperty_value";
// }
// @classConstructorDec
// class CalssWithConstructor {}
// let classConstructorInstance = new CalssWithConstructor();
// console.log(
//   `classConstrInstance.testProperty : ${
//     (<any>classConstructorInstance).testProperty
//   }`
// );
// // Property decorators
// // ===================
// function propertyDec(target: any, propertyKey: string) {
//   if (typeof target === "function") {
//     console.log("class name:", target.name);
//   } else {
//     console.log("class name: ", target.constructor.name);
//   }
//   console.log("propertyKey: ", propertyKey);
// }
// class ClassWithPropertyDec {
//   @propertyDec
//   name: string | undefined;
// }
// class StaticClassWithPropertyDec {
//   @propertyDec
//   static aname: string;
// }
// Method decorators
// =================
// function methodDec(
//   target: any,
//   methodName: string,
//   descriptor?: PropertyDescriptor
// ) {
//   console.log(`target: ${target}`);
//   console.log(`methodName : ${methodName}`);
//   console.log(`target[methodName] : ${target[methodName]}`);
// }
// class ClassWithMethodDec {
//   @methodDec
//   print(output: string) {
//     console.log(`ClassWithMethodDec.print` + `(${output}) called.`);
//   }
// }
// Using method decorators
// =======================
function auditLogDec(target, methodName, descriptor) {
    var originalFunction = target[methodName];
    var auditFunction = function () {
        console.log("auditLogDec : overide of " + methodName + " called");
        for (var index = 0; index < arguments.length; index++) {
            var element = arguments[index];
            console.log("arg : " + index + " = " + arguments[index]);
        }
        originalFunction.apply(this, arguments);
    };
    target[methodName] = auditFunction;
    return target;
}
var ClassWithAuditDec = /** @class */ (function () {
    function ClassWithAuditDec() {
    }
    ClassWithAuditDec.prototype.print = function (arg1, arg2) {
        console.log("ClassWithMethodDec.print " + arg1 + ", " + arg2 + " called.");
    };
    __decorate([
        auditLogDec,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ClassWithAuditDec.prototype, "print", null);
    return ClassWithAuditDec;
}());
var auditClass = new ClassWithAuditDec();
auditClass.print("test1", "test2");
