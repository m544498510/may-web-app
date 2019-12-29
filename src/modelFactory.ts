import BaseSchemaModel from "./schemaModels/BaseSchemaModel";

declare type ChildClass = { new (name: string): BaseSchemaModel };

const ModelClassMap = new Map<string, ChildClass>();

export function registerModel(modelType: string, Class: ChildClass): boolean {
  if (ModelClassMap.has(modelType)) {
    throw "Rule key have been exist";
  } else if(Object.getPrototypeOf(Class) !== BaseSchemaModel){
    throw "Class must be extend BaseSchemaModel";
  }
  ModelClassMap.set(modelType, Class);
  return true;
}

export function createModel(type: string, name: string): BaseSchemaModel {
  const Class = ModelClassMap.get(type);
    if(Class){
      return new Class(name);
    } else {
      throw "Can not find the rule with key"
    }
}
