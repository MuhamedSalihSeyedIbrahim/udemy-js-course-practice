
//ARRAY
var array=["str",100,{say:"hello"}];
console.log(array);
//ASSIGNMENT
array[0]="not str"
console.log(array.length);

//CREATION
//ALL BETWEEN ARE NULL ELEMENT FROM 4 TO 9
array[8]="FKL"
console.log(array.length);
array[10]="dash"
console.log(array.length);
//WE CAN USE IT AS OBJECT ALSO BUT IT DOES NOT CHANGE THE LENGTH VALUE
array["key"]="value"
console.log(array.length);
console.log(array);


//DELETE ELEMENTS
//DELETE FROM FIRST ELEMENT
array.shift();//IT DELETE AND RETURN THE VALUE
console.log(array);

//DELETE FROM LAST ELEMENT
array.pop();//IT DELETE AND RETURN THE VALUE
console.log(array);

//DELETE FROM SOME INDEX THIS ALSO SHIFT ALL ELEMENTS TOWARDS LEFT TO FILL SPACE
delete array[0];
console.log(array);

//INSERT ELEMENT
//INSERT ELEMENT TO FIRST
// IT TAKE VALUES AS PARAMETER IT RETURN LENGTH OF ARRAY AFTER INSERTING AND ALL ELEMENTS PUSH PRESENT TOWARDS RIGHT
array.unshift("hello",99);
console.log(array);


//INSERT ELEMENT TO LAST
//IT TAKE VALUES AS PARAMETER,IT RETURN LENGTH OF ARRAY
array.push("end",2);
console.log(array);

//SPLICE -INSERTION /DELETION
//IT AUTOMATICALLY ADJUST THE ARRAY INDEX BY IT SELF
//IT RETURN THE ARRAY

//DELETE VALUE IN BETWEEN
//IT TAKE WHERE TO START DELETING AND WHERE TO END DELETING AS SECOND PARAMETER
//IF SECOND PARAMETER IS 0 THEN IT WONT DELETE ANY THING
array.splice(2,0);//NOT DELETE
array.splice(2,1);//DELETE SECOND ELEMENT
console.log(array);


//INSERT VALUE IN BETWEEN
array.splice(2,0,"hai");
console.log(array);

//REPLACE VALUE ANY PLACE
array.splice(2,1,"haida");
console.log(array);

//IT CAN ACCEPT MANY PARAMETER AND INSERT IT NEXT TO NEXT AND PUSH ALL FROM START INDEX TO RIGHT
array.splice(2,0,"hai","hello","kia",39);
console.log(array);
