"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// // Decorator syntax
// // ================
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
// // Method decorators
// // =================
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
// // Using method decorators
// // =======================
// function auditLogDec(
//   target: any,
//   methodName: string,
//   descriptor?: PropertyDescriptor
// ) {
//   let originalFunction = target[methodName];
//   let auditFunction = function(this: any) {
//     console.log(`auditLogDec : overide of ${methodName} called`);
//     for (let index = 0; index < arguments.length; index++) {
//       const element = arguments[index];
//       console.log(`arg : ${index} = ${arguments[index]}`);
//     }
//     originalFunction.apply(this, arguments);
//   };
//   target[methodName] = auditFunction;
//   return target;
// }
// class ClassWithAuditDec {
//   @auditLogDec
//   print(arg1: string, arg2: string) {
//     console.log(`ClassWithMethodDec.print ${arg1}, ${arg2} called.`);
//   }
// }
// let auditClass = new ClassWithAuditDec();
// auditClass.print("test1", "test2");
// // Parameter decorators
// // ====================
// function parameterDec(target: any, methodName: string, parameterIndex: number) {
//   console.log(`target: ${target}`);
//   console.log(`methodName: ${methodName}`);
//   console.log(`parameterIndex: ${parameterIndex}`);
// }
// class ClassWithParamDec {
//   print(@parameterDec value: string) {}
// }
// // Decorator metadata
// // ==================
// function metadataParameterDec(
//   target: any,
//   methodName: string,
//   parameterIndex: number
// ) {}
// class ClassWithMetaData {
//   print(
//     @metadataParameterDec
//     id: number,
//     name: string
//   ): number {
//     return 1000;
//   }
// }
// Decorator metadata
// ==================
function metadataParameterDec2(target, methodName, parameterIndex) {
    var designType = Reflect.getMetadata("design: type", target, methodName);
    console.log("designType:" + designType);
    var designParamTypes = Reflect.getMetadata("design: paramtypes", target, methodName);
    console.log("paramtypes: " + designParamTypes);
    var designReturnType = Reflect.getMetadata("design: returntype", target, methodName);
    console.log("returntypes: " + designReturnType);
}
var ClassWithMetaData2 = /** @class */ (function () {
    function ClassWithMetaData2() {
    }
    ClassWithMetaData2.prototype.print = function (id, name) {
        return 1000;
    };
    __decorate([
        __param(0, metadataParameterDec2),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", Number)
    ], ClassWithMetaData2.prototype, "print", null);
    return ClassWithMetaData2;
}());
