/*
STRING: "ANYTHING"
/ ESCAPE CHAR AND MULTILINE
WE CAN USE "" OR '' OR `` TO HAVE STRING
ONLY THE SAME QUEOTATIONS ON OPENING CAN CLOSE IT
*/
//console.log("hello "saled" "); THIS SHOW ERROR BECAUSE SALED INDICATE JS VAR SO USE ESCAPE CHAR TO NULLIFY IT OR USE VARIENT QUEOTATIONS
//strings
console.log("hello \"saled\"");
console.log("hello 'saled' ");


//number (whole)
console.log(10);

//floating point  (real or fractions)
console.log(10.12);

//boolean values-true,false ,0,1
console.log(true);

//other types -null ,undefined -both are same some time
console.log(null);//null- there is no value assigned or var is void or empty
console.log(undefined);//undefined-the datatype is not set or var not declared

//NaN -not an number
console.log(NaN);// represent other than number


//objects and arrays
var x=[1,3,"hj"];//simple arrays
console.log(x);
var y={a:"aa",x:function(){console.log("xx");}};//where objects act as name value pairs
console.log(y);
