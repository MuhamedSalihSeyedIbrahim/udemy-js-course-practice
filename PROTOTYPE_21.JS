//PROTOTYPE IS A SHARED OBJECT LINKED TO CALLABLE OBJECT
//INSTANCE LEVEL CHANGE CAN BE DONE USING PROTOTYPE
function Apple(x,y,color,score){
  this.x=x;
  this.y=y;
  this.color=color;
  this.score=score;
}

Apple.prototype.eat=function(){return this;}
Apple.prototype={
  colour:function(){
                      return this.color;
                    },
  size:function(){
                  return this.x+this.y;
                }
}
var apple=new Apple(10,20,"red",90);
/*
AFTER USING PROTOTYPE IT CHANGES BLUEPRINT
FUNCTION APPLE(X,Y,COLOR,SCORE){
  THIS.X=X;
  THIS.Y=Y;
  THIS.COLOR=COLOR;
  THIS.SCORE=SCORE;
  THIS.EAT=FUNCTION(){RETURN THIS;}//THIS POINTS TO APPLE INSTANCE
}
IF ALREADY SAME NAME IS FOUND FIRST IT RETURN OR EXECUTE THAT SO BE CARE FULL WITH COLLISION IN KEYS
*/
console.log(apple,apple.eat(),apple.size(),apple.colour());
