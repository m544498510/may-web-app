import * as attachInfo from "./attachInfo";
import BaseSchemaModel from "./schemaModels/BaseSchemaModel";
import {SourceFile, SyntaxKind} from "ts-morph";
import ts from 'typescript';
import {forEachChild} from './utils/tools';

export function writeSchema(sourceFiles: SourceFile[], schemaMap: Map<string, BaseSchemaModel>) {
  sourceFiles.forEach(sourceFile => {
      transform(sourceFile, schemaMap);
  });
}
function transform(sourceFile: SourceFile, schemaMap: Map<string, BaseSchemaModel>) {
  sourceFile.transform(traversal => {
    const orgSourceFile = traversal.currentNode.getSourceFile();
    const node = traversal.visitChildren();
   if (node.kind === SyntaxKind.VariableStatement) {

     const comments = attachInfo.getCommentTextByTSNode(node, orgSourceFile);
     const exportInfo = attachInfo.parse(comments, attachInfo.SCHEMA_EXPORT_REG)[0];
      if (exportInfo) {
        const key = BaseSchemaModel.generatorModelKey(exportInfo.key, exportInfo.name);
        const model = schemaMap.get(key);
        if(model){
          const schemaNode = model.getSchema();
          let name: string | ts.BindingName = '';
          let flag = ts.NodeFlags.Const;
          forEachChild(node, orgSourceFile, child => {
            if(ts.isVariableDeclaration(child)){
              name = child.name;
            } else if(ts.isVariableDeclarationList(child)){
              flag = child.flags;
            }
          });
          const vd = ts.createVariableDeclaration(name, undefined, schemaNode);
          const vdList = ts.createVariableDeclarationList([vd], flag);
          const statement = ts.createVariableStatement(undefined, vdList);
          return statement;
        }
      }

    }

    return node;
  });
  sourceFile.formatText({
    placeOpenBraceOnNewLineForFunctions: true
  });
  sourceFile.save();
}
