//FUNCITONS ARE OBJECT THE CANBE INVOKED SO CALLED CALLABLE OBJECT

//NORMAL FUNCTION
function name(){
  var fullname="token";
  return fullname;
}
// JUST GIVING NAME RETURN FUNCTION DEFINITION AS STRING
//NAME() IS USED TO INVOKE THE FUNCTION
console.log(name);
console.log(name());


//FUNCTON CLOSURE
function name(){
  var fullname="token";
  function concat(name){
    return "MR."+name;
  };

  return concat(fullname);
}

console.log(name());





//CALLABLE OBJECT 1
var name1={
  fname:"raja",lname:"MJ"
};
function fullname(x){
  return x.lname+" "+x.fname;
}
console.log(fullname(name1));



//CALLABLE OBJECTS 2

function name2(fname1){
  return fname1;
}
console.log(name2(function all(){return "hai";}))
//IT PRINT FUNCTION DEFENITION  BECAUSE THE FUNCTION IS NOT CALLED AND CONSIDERED AS A STRING


//CALLABLE OBJECT 3
function name2(fname1){
  return fname1;
}
console.log(name2(function all(){return "hai";}()))
//PRINT HAI BECAUSE THE PARAMETER PASSED IS A SELF INVOKING FUNCTION

//CALLABLE OBJECT 4
function name2(fname1){
  return fname1();
}
console.log(name2(function all(){return "hai";})
//PRINT HAI BECAUSE THE PARAMETER AFTER PASSING THE FORMAL PARAMETER IS INVOKED LIKE PARM() INSIDE THE FUNCTION HENCE THE EXECUTION IS DONE
