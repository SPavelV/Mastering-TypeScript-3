// Interface inheritance
// ==========

interface IBase {
  id: number | undefined;
}

interface IDerevideFromBase extends IBase {
  name: string | undefined;
}

class InterfaceInheritanceClass implements IDerevideFromBase {
  id: number | undefined;
  name: string | undefined;
}

// Class inheritance
// ==========

class BaseClass implements IBase {
  id: number | undefined;
}

class DerivedFromBaseClass extends BaseClass implements IDerevideFromBase {
  name: string | undefined;
}

// Implementing multiple interfaces
// ==========

interface IFirstInterface {
  id: number | undefined;
}

interface ISecondInterface {
  name: string | undefined;
}

class MultipleInterfaces implements IFirstInterface, ISecondInterface {
  id: number | undefined;
  name: string | undefined;
}

// The super keyword
// ==========

class BaseClassWithConstructor {
  private id: number;
  constructor(_id: number) {
    this.id = _id;
  }
}

class DerivedClassWithConstructor extends BaseClassWithConstructor {
  private name: string;
  constructor(_id: number, _name: string) {
    super(_id);
    this.name = _name;
  }
}

// Function overriding
// ==========

class BaseClassWithFunction {
  public id: number | undefined;
  getProperties(): string {
    return `id: ${this.id}`;
  }
}

class DerivedClassWithFunction extends BaseClassWithFunction {
  public name: string | undefined;
  getProperties(): string {
    return `${super.getProperties()}` + ` , name: ${this.name}`;
  }
}

const derivedClassWithFunction = new DerivedClassWithFunction();
derivedClassWithFunction.id = 1;
derivedClassWithFunction.name = "derivedName";
console.log(derivedClassWithFunction.getProperties());

// Protected class members
// ==========