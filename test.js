class a {

}
class b extends a{

}
console.log(Object.getPrototypeOf(b) === a);
