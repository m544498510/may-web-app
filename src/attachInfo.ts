import {Node} from "ts-morph";
import ts from 'typescript';
import {getCommentText} from "./utils/tools";

export const RULE_KEY_REG = /@(.*?)\((.*?)\)/g;
export const RULE_PROPS_REG = /@(.*?)Rule\((.*?)\)/g;
export const SCHEMA_EXPORT_REG = /@(.*?)Result\((.*?)\)/g;

interface IAttachInfo {
  key: string,
  props?: object,
  name: string,
}

export function getCommentTextByTSNode(tsNode: ts.Node, sourceFile: ts.SourceFile) {
  let comments = ts.getLeadingCommentRanges(
    sourceFile.getText(),
    tsNode.getFullStart()
  );
  let commentText = '';
  if (Array.isArray(comments)) {
    commentText = comments.reduce((acc, comment) => {
      const text = getCommentText(sourceFile.text, comment);
      return acc + text;
    }, "");
  }
  return formatText(commentText);
}

export function getCommentTextByNode(node: Node) {
  let comments = node.getLeadingCommentRanges();
  let commentText = '';
  if (Array.isArray(comments)) {
    commentText = comments.reduce((acc, comment) => {
      const text = comment.getText();
      return acc + text;
    }, "");
  }
  return formatText(commentText);
}

function formatText(text: string) {
  //remove the space and comment flag
  return text.replace(/[\s|\/\/|\/\*?|\*]/g, '');
}


export function parse(text: string, reg: RegExp): IAttachInfo[] {
  const rules = [];
  while (reg.exec(text)) {
    const ruleKey = RegExp.$1;
    let tmpProp = RegExp.$2;
    if (tmpProp) {
      try {
        tmpProp = JSON.parse(tmpProp);
      } catch (e) {
        console.error("Transform parameter must be JSON or String");
      }
    }
    let props: { [index: string]: any } = {};
    let name;
    if (typeof tmpProp === 'string') {
      name = tmpProp;
    } else {
      props = tmpProp;
      name = props.name;
    }
    rules.push({
      key: ruleKey,
      props,
      name
    });
  }
  return rules;
}
