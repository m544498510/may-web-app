import ts, {SyntaxKind} from 'typescript';
import BaseSchemaModel from "./BaseSchemaModel";

interface IAttachInfo {
  isRequired?: boolean,
  isFloat?: boolean,
  isInt?: boolean,
  isID?: boolean,
  specificType?: string,
  alias?: string
}

export default class GraphqlSchemaModel extends BaseSchemaModel{
  private data: string[];
  static type = 'graphqlSchema';

  constructor(modelName: string = ''){
    super(GraphqlSchemaModel.type, modelName);
    this.data = [];
  }

  setProp(key: string, kind: SyntaxKind, attachInfo: IAttachInfo): boolean {
    try {
      const keyName = attachInfo.alias || key;
      const type = GraphqlSchemaModel.parsePropType(kind, attachInfo);
      const propData = `${keyName}: ${type}${attachInfo.isRequired ? '!': ''}`;
      this.data.push(propData);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  getSchema(): ts.Expression{
    const result = `
      type ${this.getModelName()} {
        ${this.data.join('\n')}
      }
    `;
    return ts.createNoSubstitutionTemplateLiteral(result);
  }

  static parsePropType(kind: SyntaxKind, attachInfo: IAttachInfo): string{
    let type;
    if(attachInfo.specificType){
      type = attachInfo.specificType;
    } else if(attachInfo.isID){
      type = 'ID';
    } else if(kind === SyntaxKind.StringKeyword){
      type = 'String';
    } else if(kind === SyntaxKind.NumberKeyword){
      if(attachInfo.isFloat){
        type = 'Float'
      } else {
        type = 'Int'
      }
    } else if(kind === SyntaxKind.BooleanKeyword){
      type = 'Boolean';
    } else {
      throw "Unrecognized Type"
    }
    return type;
  }
}
