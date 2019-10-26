// Interfaces
// ==========

interface IComplexType {
  id: number;
  name: string;
}

let complexType: IComplexType;
// complexType = { id: 1, name: "test" };

let incompleteType : IComplexType;
// incompleteType = { id: 1}
// generates a compile error
// let incompleteType : IComplexType;
// incompleteType = { id : 1};


// Optional properties
// ===================

interface IOptionalProp {
  id: number;
  name?: string;
}

let idOnly : IOptionalProp = { id: 1 };
let idAndName : IOptionalProp = { id: 2, name: "idName" };
idAndName = idOnly;

interface IWeakType {
  id?: number;
  name?: string;
}
let weakTypeNoOverlap: IWeakType;
// weakTypeNoOverlap = { description: "my description"};

interface IHasIdAndNameProperty {
  id: number;
  name: string;
}

interface IHasDescAndValueProperty {
  description: string;
  value: number;
}

function printNameOrDescription(value: IHasIdAndNameProperty | IHasDescAndValueProperty) {
  if ('id' in value) {
    console.log(`found id ! | name : ${value.name}`);
  }
  if('value' in value) {
    console.log(`found value ! : description : ${value.description}`);
    
  }
}
