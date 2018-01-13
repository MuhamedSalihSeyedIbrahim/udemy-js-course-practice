//CONDITONAL STATEMENTS
/*
0-FALSE
1,ANY INTEGER-TRUE

CONBINATION RESULTS
//AND && IF FIRST IS 0 IT NOT SEE SECOND ONE IT GIVES FALSE
0&&0 ,0&&1 ,1&&0 ->FALSE
1&&1->TRUE

0||0 ->FALSE
0||1 1||0 1||1->TRUE

*/



//IF STATEMENTS

//ONLY IF
//IF IF BLOCK IS TRUE IT EXECUTE OR IT INGORE IF AND CONTINUE EXECUTING REMAINING
if(true){
  console.log("if here");
}

//IF ELSE STATEMENT
//IF IF IS TRUE IT EXECUTE IF ,ELSE IT EXECUTE ELSE PART
if(false){
  console.log("if here");
}
else {
  console.log("else here");
}

//IF ELSE LADDER STATEMENT
//ONCE CONDITION TRUE IT STOP CHECKING OTHER AND EXECUTE THAT BLOCK
//IF ALL CONDITION FAILED ELSE WILL EXECUTE
if(false){
  console.log("if here");
}
else if(true){
  console.log("else if here");
}
else {
  console.log("else here");
}


//SWITCH STATEMENTS
//IT TAKE A CONSTANT VALUE AND EXECUTE ITS BLOCK
//IT MUST CONTAIN BREAK TO STOP EXECUTE BELOW CASES
// IF ALL CASE FAILED DEFAULT IS EXECUTED
switch("x") {
    case "x":
        console.log("case");
        break;
    default:
        console.log("default");
}

//LOOPING STATEMENTS

//FOR LOOP
var n=[0,1,2,3];
var i=0;

//FORWARD NORMAL LOOP
for(var i=0;i<n.length;i++)
console.log(n[i]+" ");

//REVERSE NORMAL LOOP
for(var i=n.length-1;i>=0;i--)
console.log(n[i]+" ");


//FOR IN LOOP
for(var index in n)
console.log(n[index]+" ");

//WHILE LOOP
//FORWARD WHILE LOOP
while (i<n.length) {
  console.log(n[i]+" ");
    i++;
}

//REVERSE WHILE LOOP
 i=n.length-1;
 while (i>=0) {
   console.log(n[i]+" ");
     i--;
 }


 //DO WHILE LOOP

 //FORWARD DO WHILE LOOP
 i=0;
  do{
   console.log(n[i]+" ");
     i++;
 }while (i<n.length);

 //REVERSE DO WHILE LOOP
  i=n.length-1;
   do{
    console.log(n[i]+" ");
      i--;
  }while (i>=0


//UNCONDITIONAL STATEMENTS
/*
CONTINUE: SKIP THE BELOW STEP AND MOVE TO NEXT ITERATION WITH OUT INCREMENT GENERALLY
BREAK   : COMES OUT OF LOOP
GOTO LABLE -> 'LABLE:' : GOES TO SPECIFIED LABLE
EXIT   : STOP THE EXECUTION OF WHOLE PROGRAM A THE EXIT POINT 
RETURN : STOP FUNCTION EXECUTION AND RETURN VALUE
*/
