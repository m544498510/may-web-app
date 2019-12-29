import program from 'commander';
import {fileToAST} from './parser'
import {writeSchema} from './exporter';
import {Project} from "ts-morph";
import {registerModel} from './modelFactory';
import GraphqlSchemaModel from "./schemaModels/GraphqlSchemaModel";
import MongooseSchemaModel from "./schemaModels/MongooseSchemaModel";

function main(){
  registerModel(GraphqlSchemaModel.type, GraphqlSchemaModel);
  registerModel(MongooseSchemaModel.type, MongooseSchemaModel);

  program
    .option('-f, --file-path <type>', 'the target ts file path')
    .option('-c, --ts-config-path <type>', 'the ts config json file path')
    .option('-p, --pizza-type <type>', 'flavour of pizza');
  program.parse(process.argv);

  const project = new Project({
    tsConfigFilePath: program.tsConfigPath
  });
  const sourceFiles = project.addExistingSourceFiles(program.filePath);

  const schemaModelMap = fileToAST(sourceFiles);
  writeSchema(sourceFiles, schemaModelMap);
}

main();
