// Functions
// =========

function addNumbers(a: number, b: number) : string {
  return (a + b).toString();
}

const addResult = addNumbers(2, 3);
console.log(`addNumbes returned : ${addResult}`);


// Anonimus functons:
// ==================

const addVar = function(a:number, b:number) : number {
  return a + b;
}

const addVarResult = addVar(2,3);
console.log("addVarResult:", addVarResult);


// Optional parameters:
// ====================

const concatStrings = function(a: string, b: string, c?: string) {
  return a + b + c;
}

const concat3strings = concatStrings("a", "b", "c");
console.log(`concat3strings : ${concat3strings}`);

const concat2strings = concatStrings("a", "b");
console.log(`concat2strings : ${concat2strings}`);

// const concat1string = concatStrings("a");

// Default parameters
// ==================

function concatStringsDefault(
  a: string,
  b: string,
  c: string = "c") {
    return a + b + c;
}

const defaultConcat = concatStringsDefault("a", "b");
console.log(`--- defaultConcat = ${defaultConcat}`);

// rest parameters
// ===============

// function testArguments() {
//   if(arguments.length > 0) {
//     for(let i = 0; i < arguments.length; i++) {
//       console.log("--- arguments[" + i + "] = " + arguments[i]);
//     }
//   }
// }
// testArguments(1, 2, 3);
// testArguments("firstArg");

function testArgumentsTS(... argArray: number[]) {
  if(argArray.length > 0) {
    for(let i = 0; i < argArray.length; i++) {
      console.log(`--- argArray[${i}] = ${argArray[i]}`);
      // use JavaScript arguments variable
      console.log(`--- arguments[${i}] = ${arguments[i]}`);
    }
  }
}

testArgumentsTS(9);
testArgumentsTS(1, 2, 3);

function testNormalAndRestArguments(
  arg1: string,
  arg2: number,
  ...argArray: number[]
) {

}

// Function callbacks
// ==================

// js implementation
// const callbackFunction = function(text) {
//   console.log("--- insideFunction", text);
// };

// function doSomethingWhithCallback(initialText: string, callback) {
//   console.log("--- inside doSomthingWithCallback", initialText);
//   if(typeof callback === "function") {
//     callback(initialText);
//   } else {
//     console.log(initialText + " is not a function!");
//   }
// }
// doSomethingWhithCallback("text", callbackFunction);

// ts implementation
function callbackFunction(text: string) {
  console.log(`--- inside callbackFunction = ${text}`);
}

function doSomethingWithACallback(
  initialText: string,
  callback : (initialText: string) => void
) {
  console.log(`--- inside doSomethingWithCallback = ${initialText}`);
  callback(initialText);
}

doSomethingWithACallback("myText", callbackFunction);

// doSomethingWithACallback("myText", "this is not a function"); 
// Argument of type '"this is not a function"' is not assignable 
// to parameter of type '(initialText: string)=> void'.

// Function overrides
// ==================

// js implementation
// function add(x, y) {
//   return x + y;
// }
// console.log("--- add(1, 1)", add(1,1));
// console.log("--- add(\"1\",\"1\")=", add("1","1") );

// ts implementation
function add(a: string, b: string) : string;
function add(a: number, b: number) : number;
function add(a: any, b: any): any {
  return a + b;
}

console.log(`--- add(1,1) = ${add(1,1)}`);
console.log(`--- add("1", "1") = ${add("1", "1")}`);

// console.log(`--- add(true, false) = ${add(true, false)}`); 
// error TS2345: Argument of type 'true' is not assignable to
// parameter of type 'number'.

// try catch
// =========

try {
  console.log("--- 1. attempting to parse JSON");
  JSON.parse(`abcd=234`);
} catch (error) {
  console.log(`2. try catch error : ${error}`);
} finally {
  console.log(`3. finaly`);
}