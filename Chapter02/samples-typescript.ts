function doCalculation(
  a: number,
  b: number,
  c: number) {
    return( a * b ) + c;
}

const result = doCalculation(3, 2, 1);
console.log("doCalculation(): ", result);

// const result2 = doCalculation("3", "2", "1");
// console.log("doCalculation(): " + result2); 
// error TS2345: Argument of type '"3"' is not assignable to
// parameter of type 'number'.

let myString : string;
let myNumber : number;
let myBoolean : boolean;
myString = "1";
myNumber = 1;
myBoolean = true
// myString = myNumber; // error TS2322: Type 'number' is not assignable to type 'string'.
// myBoolean = myString; // error TS2322:Type 'string' is not assignable to type 'boolean'.
// myNumber = myBoolean; // error TS2322: Type 'boolean' is not assignable to type 'number'.

// Синтаксис сильной типизации, который использует язык TypeScript, означает,
// что мы должны убедиться, что типы в левой части оператора присваивания (=)
// совпадают с типами в правой части оператора.

myString = myNumber.toString();
myBoolean = (myString === "test");
if(myBoolean) {
  myNumber = 1;
}

// inferred types:
let inferredString = "this is a string";
let inferredNumber = 1;
// inferredString = inferredNumber; // type 'number' is not assignable to type 'string'

// Duck typing:
let complexType = { name: "myName", id: 1 };
complexType = { id: 2, name: "another name" };
// complexType = { id: 2 }; // error TS2322: Type '{ id: number }' is not assignable to type '{ name: string; id: number; }'. Property 'name' is missing in type '{ id: number; }'.

// complexType = { name: "extraproperty", id: 2, extraProp: true} 
//error TS2322: Type '{ name: string; id: number; extraProp: boolean; }' is not assignabel to type '{ name: string; id: number; }'.
// Object literal may only specify known properties, and 'extraProp' does not exist in type '{ name: string; id: number; }'.

// Template strings:
const complexObject = {
  id: 2, 
  name: 'testObject'
}

console.log(`complexObject = ${JSON.stringify(complexObject)}`);

// Arrays
let arrayOfNumbers: number[] = [1, 2, 3];
arrayOfNumbers = [3, 4, 5, 6, 7, 8, 9];
console.log(`arrayOfNumbers: ${arrayOfNumbers}`);
// arrayOfNumbers = ["1", "2", "3"];  // Type 'string[]' is not assignable to type 'number[]'

// for
console.log("--- for:");
const arrayOfStrings : string[] = ["first", "second", "third"];
for( var i = 0; i < arrayOfStrings.length; i++ ) {
  console.log(`--- arrayOfStrings[${i}] = ${arrayOfStrings[i]}`);
}

// for...in 
console.log("--- for...in:");
for( const itemKey in arrayOfStrings) {
  const itemValue = arrayOfStrings[itemKey];
  console.log(`--- arrayOfStrings[${itemKey}]", ${itemValue}`);
}

// for...of
console.log("--- for...of",);
for( const arrayItem of arrayOfStrings ) {
  console.log(`a--- rrayItem = ${arrayItem}`);
}

// enam
console.log("--- enum:");
enum DoorState {
  Open,
  Closed,
  Ajar
}

const openDoor = DoorState.Open;
console.log(`--- openDoor is: ${openDoor}`);

const closedDoor = DoorState["Closed"];
console.log(`--- closeDoor is : ${closedDoor}`);

enum DoorStateSecond {
  Open = 3,
  Closed = 7,
  Ajar = 10
}

const enum DoorStateConst {
  Open,
  Closed,
  Ajar
}

const constDoorOpen = DoorStateConst.Open;
console.log(`--- constDoorOpen is: ${constDoorOpen}`);

// String Enum: 
console.log("--- String Enum",);
enum DoorStateString {
  Open = "open",
  Closed = "closed",
  Ajar = "ajar"
}

const openDoorString = DoorStateString.Open;
console.log(`--- openDoorString = ${openDoorString}`);

// Enum realization:
enum DoorStateThird {
  Open,
  Closed,
  Ajar
}

// Enum implementation
const ajarDoor = DoorStateThird[2];
console.log(`--- ajarDoor is: ${ajarDoor}`);

let globalString: string;
setGlobalString();
console.log(`--- globalString: ${globalString!}`);
function setGlobalString() {
  globalString = "this has been set";
}

// Dotted property types
let normalObject = {
  id: 1,
  name: "test"
}

let stringObject = {
  "testProperty": 1,
  "anotherProperty": "this is a string"
}

let testProperty = stringObject.testProperty;
console.log(`--- testPropertyValue = ${testProperty}`);
let testStringProperty = stringObject["testProperty"];
console.log(`--- "testPropertyValue" = ${testStringProperty}`);

// Numberic Separators
let oneMillion = 1_000_000;
console.log(`--- oneMillon = ${oneMillion}`);

let limeGreenColor = 0x00_FF_00;
console.log(`--- limeGreenColor = ${limeGreenColor}`);