/*
OBJECT TO REPRESENT REAL TIME OBJECTS,INDECATED WITH {}
ARRAYS ARE LIST OF SOME KIND, INDECATED WITH []
*/
//OBJECT

//SIMPLE OBJECT EXAMPLE
var car ={} //empty object
 car={
  color:"red",
  speed:"150",
  start:function(){console.log("moving");},
  stop:function(){console.log("stopped!!..");}
}
console.log(car);

//GENRALISED OBJECT USING CONSTRUCTOR



function car_obj(colour,speeda){
  this.shine =colour;
  this.velocity=speeda;
  this.start =function(){console.log("moving");};
  this.stop =function(){console.log("stopped!!..");};
}

var benzs= new car_obj("blue",150);
console.log(benzs);



//HERE ARRAYS ARE LIST OF OBJECTS OR SPECIAL OBJECT

var list=[] //empty list
 list=["ONE",3,9.9];
console.log(list);
/*
LISTS VALUES ARE ASSIGNED TO SEQUENTIALLY INCREASING INDEX STARTES FROM 0 TO N-1
(3) ["ONE", 3, 9.9]
0:"ONE"
1:3
2:9.9

*/
