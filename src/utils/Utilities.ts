import {SyntaxKind} from "ts-morph";
import {Prop} from "../types";

export function isSyntaxKind(target: any): target is SyntaxKind {
  return !!SyntaxKind[target]
}

export function isPropArray(arr: any): arr is Prop[]{
  return Array.isArray(arr) && arr[0].id && isSyntaxKind(arr[0].kind);
}
