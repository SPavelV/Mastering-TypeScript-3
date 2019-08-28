// Functions

function addNumbers(a: number, b: number) : string {
  return (a + b).toString();
}

const addResult = addNumbers(2, 3);
console.log(`addNumbes returned : ${addResult}`);


// Anonimus functons: 

const addVar = function(a:number, b:number) : number {
  return a + b;
}

const addVarResult = addVar(2,3);
console.log("addVarResult:", addVarResult);


// Optional parameters:

const concatStrings = function(a: string, b: string, c?: string) {
  return a + b + c;
}

const concat3strings = concatStrings("a", "b", "c");
console.log(`concat3strings : ${concat3strings}`);

const concat2strings = concatStrings("a", "b");
console.log(`concat2strings : ${concat2strings}`);

const concat1string = concatStrings("a");
