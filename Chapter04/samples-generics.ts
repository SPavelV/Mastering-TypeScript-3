// Generics
// ========

class Concatenator< T > {
  concatenateArray(inputArray: Array< T >): string {
    let returnString = "";
    for (let index = 0; index < inputArray.length; index++) {
      if (index > 0) returnString += ",";
      returnString += [index].toString();
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

const stringResult2 = stringConcat.concatenateArray(numberArray);
const numberResult2 = numberConcat.concatenateArray(stringArray);
