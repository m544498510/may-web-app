import ts, {CommentRange} from 'typescript';
import {Project} from "ts-morph";

export function syntaxKindToName(kind: ts.SyntaxKind) {
  return (<any>ts).SyntaxKind[kind];
}


export function getCommentText(sourceText:string, commentRange: CommentRange) {
  return sourceText.substring(commentRange.pos + 2, commentRange.end);
}

export function forEachChild(node: ts.Node, sourceFile: ts.SourceFile, handle: (child: ts.Node) => void){
  handle(node);
  if(node.getChildCount() > 0){
    node.forEachChild(child => {
      forEachChild(child, sourceFile, handle);
    });
  }
}

export function getSourceFiles(filePaths: string, tsconfigPath?: string){
  const project = new Project({
    tsConfigFilePath: tsconfigPath
  });
  return project.addExistingSourceFiles(filePaths);
}
