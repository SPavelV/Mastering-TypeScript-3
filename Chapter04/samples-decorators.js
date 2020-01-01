"use strict";
// Decorator syntax
// ================
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function simpleDecorator(constructor) {
    console.log('simpleDecorator called.');
}
var ClassWithSimpleDecorator = /** @class */ (function () {
    function ClassWithSimpleDecorator() {
    }
    ClassWithSimpleDecorator = __decorate([
        simpleDecorator
    ], ClassWithSimpleDecorator);
    return ClassWithSimpleDecorator;
}());
var instance_1 = new ClassWithSimpleDecorator();
var instance_2 = new ClassWithSimpleDecorator();
console.log("instance_1 : " + JSON.stringify(instance_1));
console.log("instance_2 : " + JSON.stringify(instance_2));
function secondDecorator(constructor) {
    console.log('secondDecorator called.');
}
var ClassWithMultipleDecorators = /** @class */ (function () {
    function ClassWithMultipleDecorators() {
    }
    ClassWithMultipleDecorators = __decorate([
        simpleDecorator,
        secondDecorator
    ], ClassWithMultipleDecorators);
    return ClassWithMultipleDecorators;
}());
// Decorators factories
// ====================
function decoratorFactory(name) {
    return function (constructor) {
        console.log("decorator function called with: " + name);
    };
}
var ClassWithDecoratorFactory = /** @class */ (function () {
    function ClassWithDecoratorFactory() {
    }
    ClassWithDecoratorFactory = __decorate([
        decoratorFactory('testName')
    ], ClassWithDecoratorFactory);
    return ClassWithDecoratorFactory;
}());
// Class decorator parameters
// ==========================
function classConstructorDec(constructor) {
    console.log("constructor : " + constructor);
    console.log("constructor.name : " + constructor.name);
    constructor.prototype.testProperty = "testProperty_value";
}
var CalssWithConstructor = /** @class */ (function () {
    function CalssWithConstructor() {
    }
    CalssWithConstructor = __decorate([
        classConstructorDec
    ], CalssWithConstructor);
    return CalssWithConstructor;
}());
var classConstructorInstance = new CalssWithConstructor();
console.log("classConstrInstance.testProperty : " + classConstructorInstance.testProperty);
// Property decorators
// ===================
function propertyDec(target, propertyKey) {
    console.log('target: ', target);
    console.log('target.constructor: ', target.constructor);
    console.log('class name:', target.constructor.name);
    console.log('propertyKey', propertyKey);
}
var ClassWithPropertyDec = /** @class */ (function () {
    function ClassWithPropertyDec() {
    }
    __decorate([
        propertyDec,
        __metadata("design:type", Object)
    ], ClassWithPropertyDec.prototype, "name", void 0);
    return ClassWithPropertyDec;
}());
var StaticClassWithPropertyDec = /** @class */ (function () {
    function StaticClassWithPropertyDec() {
    }
    __decorate([
        propertyDec,
        __metadata("design:type", String)
    ], StaticClassWithPropertyDec, "aname", void 0);
    return StaticClassWithPropertyDec;
}());
