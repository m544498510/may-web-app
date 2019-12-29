import {IUser} from './model';

//@test()
interface Test {
  //@testRule()
  obj: {
    name: string
  },
  //@testRule()
  user: IUser,
  //@testRule()
  trueKey: boolean,
  //@testRule()
  set: Set<string>,
  //@testRule()
  map: Map<string, number>,
  //@testRule()
  symbol: Symbol,
  //@testRule()
  enumProp: enumProp,
  str: string,
  num: number,
  //@testRule()
  arr?: string[],
  //@testRule()
  readonly readonlyArr: number[]

}

enum enumProp {
  red = "red",
  green = "green"
}
