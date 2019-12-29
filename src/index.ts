import fs from 'fs';
import glob from 'glob';

import {fileToAST} from './ASTParser'

const resPath = process.argv[2] || "/src/*.ts";

glob(resPath, {}, (e, files) => {
   if(!e){
       files.forEach(file => {
           fileToAST
       });
   }  else {
       console.error(e);
   }
});

