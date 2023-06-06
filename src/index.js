// // // functional programming language
// // // js is a dynamic programming langugae
// // // dynamically typed language
// // // js is loosely typed language
// // //Datatypes
// // //Primitive
// // // String
// // // Number
// // // Boolean
// // // Null
// // // Undefined

// // var a = "string";
// // console.log(a);

// // var b = 1.2;
// // console.log(b);

// // var c = true;
// // console.log(c);

// // var d = null;
// // console.log(d);

// // var e;
// // console.log(e);

// // console.log(typeof(a))
// // console.log(typeof(b))
// // console.log(typeof(c)) // "boolean"
// // console.log(typeof(d)) // typeof("object")
// // console.log(typeof(e)) //"undefined"
// // everything in js is a object

// // it returns me the type of whatevere is there in a string format

// // ==
// // ===

// console.log(1 == "1"); // (1 == 1) by converting the string to number
// console.log("1" == 1);
// console.log("1" === 1);
// console.log("ap"=="ap");

// // implicit type conversion
// // coercion

// // automatically convert string to number in case of comparison with ==

// //explicity way to convert as well
// // add a + in front a string it will convert to a number

// console.log(+"1");
// console.log(+true);

// console.log(1 == 1);

// console.log(true == true);

// console.log(true == 1);

// console.log(+true === 1);

// // unary + would get precedence

// // would it be always converted to number
// // yes it will always be

// console.log(1+2);

// console.log("1" + "2");
// // concatenation

// console.log("1"+"abc");
// console.log(1 + "abc");
// // implicity type conversion of string

// // type convert operand to string in case of +
// // if one operand is string

// console.log(1 + 3 + "abc"); // 4+ "abc"

// console.log("abc" + 1 + 3);

// console.log(+"1" + 1);

// console.log(-"1" + 1);

// console.log("1" - 1);

// - as an operator will convert string to number
// + as an operator will convert number to string
// if one operand is string

// console.log(+"1") // explicitly

// console.log(1 + "1");

// console.log(-"1");

// console.log("1" - 1);

// console.log(false == '0');
// console.log(false === '0')

// console.log(typeof(+"anc"));

// console.log(+"anc" === +"anc");

// nan can be imagined as infinity and infinity can't be equal to itelf hence fanlse
// and type is number as it lies on the axis of numbers just like infiinty

// Object
// Array

//[1,2,3,4,5,6]

// var a = [];
// var b = new Array(0);

// constructor function
// class

// var a = [1,2,3,"string", true];

// a.length = 2;

// console.log(a);

var a = [1, 2, 3, 4];
var b = a;
// a ->  [1,2,3,4]  <- b

a.length = 0;
// [1,2,3,4]  <- b

// a -> []
console.log(a);
console.log(b);
