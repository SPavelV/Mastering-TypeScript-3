// Generics
// ========

class Concatenator<T> {
  concatenateArray(inputArray: Array<T>): string {
      let returnString = "";

      for (let i = 0; i < inputArray.length; i++) {
          if (i > 0)
              returnString += ",";
          returnString += inputArray[i].toString();
      }
      return returnString;
  }
}

const stringConcat = new Concatenator<string>();
const numberConcat = new Concatenator<number>();

const stringArray: string[] = ["first", "second", "third"];
const numberArray: number[] = [1, 2, 3];

const stringResult = stringConcat.concatenateArray(stringArray);
const numberResult = numberConcat.concatenateArray(numberArray);

// const stringResult2 = stringConcat.concatenateArray(numberArray);
// const numberResult2 = numberConcat.concatenateArray(stringArray);

class MyClass {
  private _name: string;
  constructor(arg1: number) {
    this._name = arg1 + "_MyClass"
  }
  toString(): string {
    return this._name
  }
}

let myArray: MyClass[] = [
  new MyClass(1),
  new MyClass(2),
  new MyClass(3)
];

let myArrayConcatenator = new Concatenator<MyClass>();
let myArrayResult = myArrayConcatenator.concatenateArray(myArray);