// Decorator syntax
// ================

function simpleDecorator(constructor: Function) {
  console.log('simpleDecorator called.');
}

@simpleDecorator
class ClassWithSimpleDecorator {}

let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();

console.log(`instance_1 : ${JSON.stringify(instance_1)}`);
console.log(`instance_2 : ${JSON.stringify(instance_2)}`);

function secondDecorator(constructor: Function) {
  console.log('secondDecorator called.');
}

@simpleDecorator
@secondDecorator
class ClassWithMultipleDecorators {}

// Decorators factories
// ====================

function decoratorFactory(name: string) {
  return function(constructor: Function) {
    console.log(`decorator function called with: ${name}`);
  }
}

@decoratorFactory('testName')
class ClassWithDecoratorFactory{}

// Class decorator parameters
// ==========================

function classConstructorDec(constructor: Function) {
  console.log(`constructor : ${constructor}`);
  console.log(`constructor.name : ${(<any>constructor.name)}`);
  constructor.prototype.testProperty = "testProperty_value";
}

@classConstructorDec
class CalssWithConstructor {}

let classConstructorInstance = new CalssWithConstructor();
console.log(`classConstrInstance.testProperty : ${(<any>classConstructorInstance).testProperty}`);

