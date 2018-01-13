/*
COMBINING OBJECT AND ARRAYS
OBJECT CONTAIN ARRAY AND VICE VERSA
OBJECT CAN CONTAIN OBJECT AND ARRAY CAN CONTAIN ARRAY
[[]],{{}},[{}],{[]}
*/
var car={
  maker:"valvo",
  engine:{
    size:2.0,
    make:"bmw",
    feul:"pertrol",
    piston:[{make:"bmw"},{make:"bmw"}]
  },
  drive:function(){console.log("move");}
}
//console.log(car);

var array=[
  "string",100,["embed",300],{car:car},function(){console.log("hai am in array");}
]
console.log(array[4]());//ARRAY FUNCTION CALL
