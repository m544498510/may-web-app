import { createParser } from '../../..';
import { IStatements } from '..';
import { sqlTokenizer } from './lexer';
import { root } from './parser';

export const mysqlParser = createParser<IStatements>(root, sqlTokenizer, {
  cursorTokenExcludes: token => {
    return token.value === '.' || token.value === ':';
  },
});
