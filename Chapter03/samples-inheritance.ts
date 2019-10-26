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