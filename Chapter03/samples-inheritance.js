"use strict";
// Interface inheritance
// ==========
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var InterfaceInheritanceClass = /** @class */ (function () {
    function InterfaceInheritanceClass() {
    }
    return InterfaceInheritanceClass;
}());
// Class inheritance
// ==========
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    return BaseClass;
}());
var DerivedFromBaseClass = /** @class */ (function (_super) {
    __extends(DerivedFromBaseClass, _super);
    function DerivedFromBaseClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DerivedFromBaseClass;
}(BaseClass));
var MultipleInterfaces = /** @class */ (function () {
    function MultipleInterfaces() {
    }
    return MultipleInterfaces;
}());
// The super keyword
// ==========
var BaseClassWithConstructor = /** @class */ (function () {
    function BaseClassWithConstructor(_id) {
        this.id = _id;
    }
    return BaseClassWithConstructor;
}());
var DerivedClassWithConstructor = /** @class */ (function (_super) {
    __extends(DerivedClassWithConstructor, _super);
    function DerivedClassWithConstructor(_id, _name) {
        var _this = _super.call(this, _id) || this;
        _this.name = _name;
        return _this;
    }
    return DerivedClassWithConstructor;
}(BaseClassWithConstructor));
// Function overriding
// ==========
var BaseClassWithFunction = /** @class */ (function () {
    function BaseClassWithFunction() {
    }
    BaseClassWithFunction.prototype.getProperties = function () {
        return "id: " + this.id;
    };
    return BaseClassWithFunction;
}());
var DerivedClassWithFunction = /** @class */ (function (_super) {
    __extends(DerivedClassWithFunction, _super);
    function DerivedClassWithFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedClassWithFunction.prototype.getProperties = function () {
        return "" + _super.prototype.getProperties.call(this) + (" , name: " + this.name);
    };
    return DerivedClassWithFunction;
}(BaseClassWithFunction));
var derivedClassWithFunction = new DerivedClassWithFunction();
derivedClassWithFunction.id = 1;
derivedClassWithFunction.name = "derivedName";
console.log(derivedClassWithFunction.getProperties());
