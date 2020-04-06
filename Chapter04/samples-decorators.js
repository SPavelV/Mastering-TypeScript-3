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
// Decorator syntax
// ================
function simpleDecorator(constructor) {
    console.log("simpleDecorator called.");
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
    console.log("secondDecorator called.");
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
        decoratorFactory("testName")
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
    if (typeof target === "function") {
        console.log("class name:", target.name);
    }
    else {
        console.log("class name: ", target.constructor.name);
    }
    console.log("propertyKey: ", propertyKey);
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
// Method decorators
// =================
function methodDec(target, methodName, descriptor) {
    console.log("target: " + target);
    console.log("methodName : " + methodName);
    console.log("target[methodName] : " + target[methodName]);
}
var ClassWithMethodDec = /** @class */ (function () {
    function ClassWithMethodDec() {
    }
    ClassWithMethodDec.prototype.print = function (output) {
        console.log("ClassWithMethodDec.print" + ("(" + output + ") called."));
    };
    __decorate([
        methodDec,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ClassWithMethodDec.prototype, "print", null);
    return ClassWithMethodDec;
}());
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
// Parameter decorators
// ====================
function parameterDec(target, methodName, parameterIndex) {
    console.log("target: " + target);
    console.log("methodName: " + methodName);
    console.log("parameterIndex: " + parameterIndex);
}
var ClassWithParamDec = /** @class */ (function () {
    function ClassWithParamDec() {
    }
    ClassWithParamDec.prototype.print = function (value) { };
    __decorate([
        __param(0, parameterDec),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ClassWithParamDec.prototype, "print", null);
    return ClassWithParamDec;
}());
// Decorator metadata
// ==================
function metadataParameterDec(target, methodName, parameterIndex) { }
var ClassWithMetaData = /** @class */ (function () {
    function ClassWithMetaData() {
    }
    ClassWithMetaData.prototype.print = function (id, name) {
        return 1000;
    };
    __decorate([
        __param(0, metadataParameterDec),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", Number)
    ], ClassWithMetaData.prototype, "print", null);
    return ClassWithMetaData;
}());
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
