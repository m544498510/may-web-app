import ts from 'typescript';
import BaseSchemaModel from "./BaseSchemaModel";

export default class MongooseSchemaModel extends BaseSchemaModel{
  static type = 'mongooseSchema';

  constructor(modelName: string = ''){
    super(MongooseSchemaModel.type, modelName);
  }

  getSchema(): ts.Expression {
    return ts.createObjectLiteral();
  }

  setProp(key: string, kind: ts.SyntaxKind, props: any): boolean {
    return true;
  }

}
