// Generics
// ========

class Concatenator<T> {
  concatenateArray(inputArray: Array<T>): string {
    let returnString = "";
    for (let index = 0; index < inputArray.length; index++) {
      if (index > 0) returnString += ",";
      returnString += inputArray[index].toString();
    }

    return returnString;
  }
}
