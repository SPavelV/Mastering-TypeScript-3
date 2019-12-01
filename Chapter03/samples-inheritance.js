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
// Protected class members
// ==========
var ClassUsingProtected = /** @class */ (function () {
    function ClassUsingProtected() {
    }
    ClassUsingProtected.prototype.getId = function () {
        return this.id;
    };
    return ClassUsingProtected;
}());
var DerivedFromProtected = /** @class */ (function (_super) {
    __extends(DerivedFromProtected, _super);
    function DerivedFromProtected() {
        var _this = _super.call(this) || this;
        _this.id = 0;
        return _this;
    }
    return DerivedFromProtected;
}(ClassUsingProtected));
var derivedFromProtected = new DerivedFromProtected();
// derivedFromProtected.id = 1;
console.log("getId returns: " + derivedFromProtected.getId());
// Abstract classes
// =========
var AbstractEmployee = /** @class */ (function () {
    function AbstractEmployee() {
    }
    AbstractEmployee.prototype.printDetails = function () {
        console.log(this.getDetails());
    };
    return AbstractEmployee;
}());
var NewEmployee = /** @class */ (function (_super) {
    __extends(NewEmployee, _super);
    function NewEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewEmployee.prototype.getDetails = function () {
        return "id: " + this.id + (", name " + name);
    };
    return NewEmployee;
}(AbstractEmployee));
var NewManager = /** @class */ (function (_super) {
    __extends(NewManager, _super);
    function NewManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewManager.prototype.getDetails = function () {
        return _super.prototype.getDetails.call(this) + ", employeeCount";
    };
    return NewManager;
}(NewEmployee));
var employee = new NewEmployee;
employee.id = 1;
employee.name = "Employee Name";
employee.printDetails();
var manager = new NewManager();
manager.id = 2;
manager.name = "Manager Name";
manager.Employees = [];
manager.printDetails();
