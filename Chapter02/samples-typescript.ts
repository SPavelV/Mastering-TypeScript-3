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
