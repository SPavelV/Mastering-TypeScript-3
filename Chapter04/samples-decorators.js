"use strict";
// Decorator syntax
// ================
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
