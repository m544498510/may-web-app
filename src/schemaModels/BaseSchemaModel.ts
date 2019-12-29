import ts from 'typescript';
import {SyntaxKind} from 'ts-morph';

export default abstract class BaseSchemaModel {
  private readonly key: string;
  private readonly schemaType: string;
  private readonly modelName: string;

  protected constructor(schemaType: string, modelName: string = '') {
    this.key = BaseSchemaModel.generatorModelKey(schemaType, modelName);
    this.schemaType = schemaType;
    this.modelName = modelName;
  }

  static generatorModelKey(schemaType: string, modelName: string = '') {
    return `${modelName}_${schemaType}`;
  }

  getKey(): string {
    return this.key;
  }

  getModelName(): string{
    return this.modelName;
  }

  getSchemaType(): string{
    return this.schemaType;
  }

  abstract setProp(key: string, kind: SyntaxKind, props: any): boolean;

  abstract getSchema(): ts.Expression;
}
