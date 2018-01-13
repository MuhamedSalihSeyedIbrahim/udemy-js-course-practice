//OBJECT
var car={
  make:"bmw",
  start:function(){
    console.log("sarted");
  }
};
console.log(car.make);
//ANY ASSIGNMENT AND OPERATION CAN BE DONE
car.make=null;// SIMPLE CREATE
car.make="tata";//CREATE AND ASSIGN
console.log(car.make);
car.start=function(){console.log("started");}
console.log(car.start());


//ANY PROPERTY CAN BE CREATED IN OBJECT EASILY
//HERE ENGINE IS NEW KEY ANY ASSIGNED WITH VALUE TO CAR
car.engine={name:"super"}
console.log(car["engine"]["name"]);


//TO DELETE-DELETE KEYWORD IS USED.IT RETURN TRUE IF IT DELETE ELSE IT RETURNED FALSE
//delete car.start;
console.log(car);
console.log(delete car.start);
console.log(car);
