//COMPARISION OPERATOR THEY USED TO COMPARE DATA AND
/*
==
<=
=>
<
>
!=
===
!==
*/
10==10->true
"HI"=="HI"->true
1.1==1.1->true
true==true->true
false==false->true
true==false->false
undefined==undefined->true
null==null->true
NaN==NaN->false
null==undefined->true

10+10->20 //ADD

10+"10"->1010 //CONCAT INT TO STRING TAKES PLACE STRING HAVE MORE PRECEDENCE
10=="10"->true//BECAUSE STRING TAKE PRECEDENCE AND CAST INT TO STRING AND COMPARE OR SIMPLY IT COMPARE COTENT NOT DATATYPE

//=== RESTRICT POLYMORPHIC CASTING OF DATA TO STRING
10==="10"->false//IT COMPARE THE DATATYPE ALSO NOT ONLY DATA
null===undefined//IT COMPARE THE DATATYPE ALSO NOT ONLY DATA

null!=null->false
null!=undefined->false

10!="10"->false//COMPARE DATA ONLY
10!=="10"->true//DATATYPE IS COMPARED ALSO, NO POLYMORPHIC ACTION
10!=100->true

null!==undefined->true

"hello0">"hello"->true
1==1->true
10>1->true
1<10->true
10>=1->true
1<=10->true

//DONT USE >< =< => ON STRING 
