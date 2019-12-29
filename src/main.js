const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const Type = require('@babel/types');

const demo = (source) => {
  let ast = parser.parse(source, {sourceType: 'module'})
  // start
  traverse(ast, {
    enter(path) {
      if(Type.isIdentifier(path.node)){
        console.log(path.node.name);
      }
    }
  })
};

demo(`Select * from Table`);
