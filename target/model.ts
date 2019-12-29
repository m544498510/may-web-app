import { Document, model, Schema } from 'mongoose';
import { IName } from './IName';

//@mongooseSchema("User")
//@graphqlSchema("User")
export interface IUser extends Document
{

    _id: string,

    //@mongooseSchemaRule({
    //    "isRequired": true
    // })
    //@graphqlSchemaRule({
    //    "isRequired": true
    // })
    name: string,

    //@mongooseSchemaRule()
    password: string,

    //@mongooseSchemaRule({
    //    "isRequired": true
    // })
    //@graphqlSchemaRule({
    //    "isRequired": true
    // })
    num: number,

    /*
     * @mongooseSchemaRule({
     *      "isRequired": true
     *   })
      @graphqlSchemaRule({
          "isRequired": true
      })
     */
    nikeName: string,

    //@mongooseSchemaRule({
    //    "isRequired": true
    // })
    //@graphqlSchemaRule({
    //    "isRequired": true
    // })
    booleanTest: boolean,

    //@mongooseSchemaRule({
    //    "isRequired": true
    // })
    //@graphqlSchemaRule({
    //    "isRequired": true
    // })
    arrTest: string[],

    //@mongooseSchemaRule()
    //@graphqlSchemaRule()
    objTest: {
        //@mongooseSchemaRule({
        //    "isRequired": true
        // })
        //@graphqlSchemaRule({
        //    "isRequired": true,
        //    "isID": true
        // })
        id: string,
        //@mongooseSchemaRule({
        //    "isRequired": true
        // })
        //@graphqlSchemaRule({
        //    "isRequired": true,
        //    "isID": true
        // })
        name: IName
    },


}


//mongoose model export
//@mongooseSchemaResult("User")
let mongoUser = {};

export const modelName = 'User';
export const mongoSchema = new Schema(mongoUser);
export default model<IUser>(modelName, mongoSchema);


//graphql model export
//@graphqlSchemaResult("User")
const graphqlTypeDefs = `\n      type User {\n        name: String!\nnum: Int!\nnikeName: String!\nbooleanTest: Boolean!\n      }\n    `;
