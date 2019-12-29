import {SyntaxKind} from 'typescript';

export declare type Prop = {
  id: string,
  kind: SyntaxKind,
  isReferenceType: boolean,
  referenceInfo?: SyntaxKind | Prop[],     //when prop is array, referenceInfo is array content type
  tsAttachInfo: TsAttachInfo
}

export declare type TsAttachInfo = {
  required: boolean,
  readonly: boolean,
}

export declare type simpleTypeKind
  = SyntaxKind.StringKeyword
  | SyntaxKind.NumberKeyword
  | SyntaxKind.BooleanKeyword;


export declare type referenceTypeKind
  = SyntaxKind.ArrayType
  | SyntaxKind.TypeLiteral;

export const enum SubKind {
  Object,
  Interface,
  Class,

}
