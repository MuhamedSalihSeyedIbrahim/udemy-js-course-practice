// THIS IS CONTEXT POINTER
//IT DISPLAYS THE WINDOW OBJECT
console.log(this);

//OBJECT \ARRAY
var obj={
        prop:this,
        method:function(){//ONE STEP MOVE UP AND REPRESENT FUNCTION AND WINDOW OBJECT
          return this;
        }
}

var arr=[
  this,
  function(){
    return this;//ONE STEP MOVE UP AND REPRESENT FUNCTION AND WINDOW OBJECT
  }
]
//function
function globe(){
  return this;//ONE STEP MOVE UP AND REPRESENT FUNCTION AND WINDOW OBJECT
}

//REFER WINDOW
globe.call(obj);//INSTEAD OF OLD GLOBE IS INVOKE LIKE GLOBE();
//THE OBJ IS SEND INSIDE TO THIS

//GO UP AND RETURN WINDOW AND RESPECT WITH CALLED THING DATATYPE like [WINDOW,obj] or globe[]
globe();

//GO UP AND RETURN WINDOW AND RESPECT WITH CALLED {}
new globe();
