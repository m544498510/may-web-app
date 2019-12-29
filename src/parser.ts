import {Node, SourceFile, SyntaxKind,} from "ts-morph";
import * as attachInfo from './attachInfo';
import {createModel} from './modelFactory';
import BaseSchemaModel from "./schemaModels/BaseSchemaModel";
import {Prop, SubKind, TsAttachInfo} from "./types";
import {isReferenceTypeKind, isSimpleTypeKind} from "./utils/typeUtils";

export function fileToAST(sourceFiles: SourceFile[] ): Map<string, BaseSchemaModel> {
  const resultMap = new Map<string, BaseSchemaModel>();

  sourceFiles.forEach(sourceFile => parseSourceFile(sourceFile, resultMap));
  return resultMap;
}

function parseSourceFile(sourceFile: SourceFile, resultMap: Map<string, BaseSchemaModel>){
  sourceFile.forEachChild(node => {
    const tmpObj = parseTopNode(node);
    Object.values(tmpObj).forEach(model => {
      resultMap.set(model.getKey(), model)
    });
  });
}

function parseTopNode(node: Node): {[index: string]: BaseSchemaModel}{
  const tmpContainer:{[index: string]: BaseSchemaModel} = {};
  if (node.getKind() === SyntaxKind.InterfaceDeclaration) {
    const comments = attachInfo.getCommentTextByNode(node);
    const rules = attachInfo.parse(comments, attachInfo.RULE_KEY_REG);
    rules.forEach(rule => tmpContainer[rule.key] = createModel(rule.key, rule.name));
    parseEachProps(node, 0, tmpContainer);
  }
  return tmpContainer
}


function parseEachProps(node: Node, i: number, schemaModels: { [index: string]: BaseSchemaModel }) {
  if (node.getChildCount() > 0) {
    node.forEachChild(node => {
      if (node.getKind() === SyntaxKind.PropertySignature) {
        const comments = attachInfo.getCommentTextByNode(node);
        if(comments.length > 0){
          const rules = attachInfo.parse(comments, attachInfo.RULE_PROPS_REG);
          const prop = parseProp(node);
          rules.forEach(rule => schemaModels[rule.key]
            .setProp(prop.id, prop.kind, rule.props)
          );
        }
      }
    })
  }
}

function parseProp(node: Node): Prop {
  let id = '';
  let kind = 0;
  let isReferenceType = false;
  let referenceInfo = undefined;
  let tsAttachInfo: TsAttachInfo = {
    required: true,
    readonly: false,
  };
  node.forEachChild(node => {
    const nodeKind = node.getKind();
    if(nodeKind === SyntaxKind.Identifier){
      id = node.getText();
    } else if (isSimpleTypeKind(nodeKind)){
      isReferenceType = false;
      kind = nodeKind;
    } else if (isReferenceTypeKind(nodeKind)){
      isReferenceType= true;
      kind = nodeKind;
      referenceInfo = parseReferenceInfo(nodeKind, node);
    } else if (nodeKind === SyntaxKind.QuestionToken){
      tsAttachInfo.required = false;
    } else if(nodeKind === SyntaxKind.ReadonlyKeyword){
      tsAttachInfo.readonly = true;
    }
  });
  return {
    id,
    kind,
    isReferenceType,
    referenceInfo,
    tsAttachInfo,
  }
}

function parseReferenceInfo(parentNodeKind:SyntaxKind, node: Node): {info: SyntaxKind | Prop[] | string, subKind?: SubKind} | undefined{
  if(parentNodeKind === SyntaxKind.ArrayType){
    return {
      info: node.getChildAtIndex(0).getKind()
    };
  } else if(parentNodeKind === SyntaxKind.TypeLiteral){
    return parseTypeLiteral(node);
  }
}

function parseTypeLiteral(node: Node): {info: SyntaxKind | Prop[] | string, subKind?: SubKind} | undefined{
  const children = node.getChildren();
  const type = node.getType();
  //reference is object
  if(type.isObject()){
    return {
      subKind: SubKind.Object,
      info: children.map(childNode => parseProp(childNode)),
    };
  } else if(type.isInterface()){
    return {
      subKind: SubKind.Interface,
      info: node.getText()
    }
  } else if(type.isClass()){
    return {
      subKind: SubKind.Class,
      info: node.getText()
    }
  }

}




