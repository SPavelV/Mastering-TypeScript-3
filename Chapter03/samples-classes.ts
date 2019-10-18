class SimpleClass {
  id: number | undefined;
  print() : void {
    console.log(`SimpleClass has id : ${this.id}`);
  }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 1001;
mySimpleClass.print();

// Implementing Interfaces
// ==========

interface IPrint {
  print() : void;
}

function printClass( a: IPrint) {
  a.print();
}

class ClassA implements IPrint {
  print() {console.log('ClassA.print()')};
}

class ClassB implements IPrint {
  print() {console.log('ClassB.print()')};
}

let classA = new ClassA();
let classB = new ClassB();

printClass(classA);
printClass(classB);

// Class constructors
// ==========

class ClassWithConstructor {
  id: number;
  name: string;
  constructor(_id: number, _name: string) {
    this.id = _id;
    this.name = _name;
  }
}

const classWithConstructor = new ClassWithConstructor(1, "name");
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);

// Class functions
// ==========

interface IComplexType {
  id: number;
  name: string;
  print(): string;
  usingTheAnyKeyword(arg1: any): any;
  usingOptionalParameters(optionalArg?: number): void;
  usingDefaultParameters(defaultArg1?: number): void;
  usingRestSyntax(...argArray: number[]) : void;
  usingFunctionCallbacks(callback: (id: number) => string):void;
}

class ComplexType implements IComplexType {
  id: number;
  name: string;
  constructor(idArg: number, nameArg: string);
  constructor(idArg: string, nameArg: string);
  constructor(idArg: any, nameArg: any) {
    if (typeof idArg === "number") {
      this.id = idArg;
    }
    this.name = nameArg;
  }

  print(): string {
    return "id" + this.id + " name:" + this.name;
  }

  usingTheAnyKeyword(arg1: any): any {
    this.id = arg1;
  }

  usingOptionalParameters(optionalArg?: number) {
    if(optionalArg) {
      this.id = optionalArg;
    }
  }

  usingDefaultParameters(defaultArg1: number = 0) {
    this.id = defaultArg1;
  }

  usingRestSyntax(...argArray: number[]) {
    if(argArray.length > 0) {
      this.id = argArray[0];
    }
  }

  usingFunctionCallbacks( callback: (id: number) => string) {
    callback(this.id);
  }
}

let ct_1 = new ComplexType(1, 'ct_1');
let ct_2 = new ComplexType("abc", "ct_2");
ct_2.print();

ct_1.usingTheAnyKeyword(true);
ct_1.usingTheAnyKeyword({ id: 1, name: "string"});

ct_1.usingOptionalParameters(1);
ct_1.usingOptionalParameters();

ct_1.usingRestSyntax(1, 2, 3);
ct_2.usingRestSyntax(1, 2, 3, 4, 5);

function myCallbackFunction(id: number): string {
  return id.toString();
}
ct_1.usingFunctionCallbacks(myCallbackFunction);
// let ct_3 = new ComplexType(true, "test");

//  Class modifiers
//  ==========

class ClassWithPublicProperty {
  public id: number | undefined;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

class ClassWithPrivateProperty {
  private id: number;
  constructor(_id : number) {
    this.id = _id;
  }
}

let privateAccess = new ClassWithPrivateProperty(10);
// privateAccess.id = 20; // error: Property 'id' is private and only accassible within class 'ClassWithPrivateProperty'.

class classWithAutomaticProperties {
  constructor(public id: number, private name: string) {

  }
}

let myAutoClass = new classWithAutomaticProperties(1, "className");

console.log(`MyAutoClass.id: ${myAutoClass.id}`);
// console.log(`MyAutoClass.name: ${myAutoClass.name}`); // Property 'name' is private and only accassable within class 'classWithAutomaticProperties'.

class ClassWithReadOnly {
  readonly name: string;

  constructor(_name: string) {
    this.name = _name;
  }

  setReadOnly(_name: string) {
    // this.name = _name; // error: Cannot to 'name' because it is a constant or readonly property.
  }
}

// Class property accessors
// =========

class ClassWithAccessors {
  private _id: number | undefined;
  get id() {
    console.log(`inside get id()`);
    return <number>this._id;
  }
  set id(value: number) {
    console.log(`inside set id()`);
    this._id = value;
    
  }
}

var classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 2;
console.log(`id property is set to ${classWithAccessors.id}`);