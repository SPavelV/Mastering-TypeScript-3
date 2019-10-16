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

  usingDefalutParameters(defaultArg1: number = 0) {
    this.id = defaultArg1;
  }

  usingRestSynax(...argArray: number[]) {
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

ct_1.usingRestSynax(1, 2, 3);
ct_2.usingRestSynax(1, 2, 3, 4, 5);

function myCallbackFunction(id: number): string {
  return id.toString();
}
ct_1.usingFunctionCallbacks(myCallbackFunction);
// let ct_3 = new ComplexType(true, "test");


