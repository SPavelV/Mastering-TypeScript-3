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