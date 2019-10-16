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
