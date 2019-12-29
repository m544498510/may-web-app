import {SyntaxKind} from "typescript";

export function isSimpleTypeKind(kind: SyntaxKind){
  return kind === SyntaxKind.StringKeyword
    || kind === SyntaxKind.NumberKeyword
    || kind === SyntaxKind.BooleanKeyword;
}

export function isReferenceTypeKind(kind: SyntaxKind){
  return kind === SyntaxKind.ArrayType
    || kind === SyntaxKind.TypeLiteral;
}

