/*
ALL THE DECLARATION IN OPEN ARE CONSIDERED AS
GLOBAL SCOPE
IN THE BROWSER WINDOW IS THE HIGHEST LEVEL OF GOLBAL.
*/
var x=10;//GLOBAL
console.log(x);

function run(){
  var a=10;//LOCAL
  function add(){
    var b=90;
    return a+b;
  }
  //console.log(b) cause error
  return add();
}
console.log(run());

//JS MOVE UPWARDS IF VAR VALUE ARE NOT FOUND UNTILL WINDOW OR IT IS FOUND

//INFERED GLOBAL IF THE VAR IS NOT GIVEN THE VARIABLE IS INFERED AS GOLBAL VARIABLE

var X=999;
function run(){
  var a=10;//LOCAL
  function add(){
    var b=90,X=100;
    console.log(X);//X VALUE IS LOCALLY FOUND SO IT DOESNT LOG 999 IT PRINT 100
    return a+b;
  }
  //console.log(b) cause error
  return add();
}
console.log(run()+" X= "+X);


// CALLABLE OBJECTS ARE HAVING MORE LOCAL SCOPES
//WITH OUT VAR KEY THE SCOPE BECOME GLOBAL USE CONST TO MAKE A VAR MORE LOCALISED AND UNCHANGED FORM
var X=999;
function run(){
  var a=10;//LOCAL
  function add(){
    var b=90; X=100;
    console.log(X);//X VALUE IS LOCALLY FOUND SO IT DOESNT LOG 999 IT PRINT 100
    return a+b;
  }
  //console.log(b) cause error
  return add();
}
console.log(run()+" X= "+X);
