import ts, {CommentRange, SyntaxKind} from 'typescript';
import {Node, Project, SourceFile, TypeFormatFlags} from "ts-morph";
import {syntaxKindToName} from './utils/tools';
import {fileToAST} from "./parser";

/*
recast.run( function(ast, printSource){
  printSource(ast)
});
*/

// Build a program using the set of root file names in fileNames
const project = new Project();
const sourceFiles = project.addExistingSourceFiles("../target/test.ts");

// Visit every sourceFile in the program
sourceFiles.forEach(sourceFile => {
  // Walk the tree to search for classes
  sourceFile.forEachChild(node => {
    console.log("Node Syntax Kink: " + syntaxKindToName(node.getKind()));
    if (node.getKind() === SyntaxKind.InterfaceDeclaration) {
      forEachChild(node, 4);
    }
  });
});
function forEachChild(node: Node, i: number) {
  node.forEachChild(node => {
    console.log(" ".repeat(i) + "Node Syntax Kink: " + syntaxKindToName(node.getKind()));
    const type = node.getType();
    forEachChild(node, i + 4);
    node.getText();
  })
}
