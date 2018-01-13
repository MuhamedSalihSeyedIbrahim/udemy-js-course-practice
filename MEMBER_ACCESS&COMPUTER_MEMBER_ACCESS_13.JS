// . (MEMBER ACCESS) & [](COMPUTED MEMBER ACCESS ) CAN BE USED TO ACCESS AN OBJECT'S MEMBER AND [] CAN BE USED TO ACCESS ARRAYS MEMBER
// ANY ONE CAN BE USED TO ACCESS THE MEMBER [] OR .
var car={
  color:"blue",
  speed:function(){
                    console.log("100 KMPS");
                  },
  engine:{
    pistons:[
              {
                maker:"bmw"
              },
              {
                maker:"bmw"
              }
            ]
          }
}
console.log(car.color);
car.speed();//FUNCTION INVOCATION
car.speed;//GETTING THE FUNCTION DEFENITION AS STRING
console.log(car);

console.log(car.engine.pistons);//MEMBER ACCESS IN OBJECT
console.log(car.engine.["pistons"]);//COMPUTED MEMBER ACCESS IN OBJECT
