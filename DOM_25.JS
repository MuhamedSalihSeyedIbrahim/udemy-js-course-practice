//DOM-DOCUMENT OBJECT MODEL :ONLY THE WORKSPACE, PARSED REDERING TREE AND DOCUMENT WITH EVENTS
//WOM-WINDOW OBJECT MODEL :WHOLE TAB WINDOW
//BOM-BROWSER OBJECT MODEL :WHOLE BROWSER
//EXAMPLE
document.childNode[1].childNode[2];//static access.
/*
<HTML>
  <HEAD>
    <STYLE></STYLE>
---><TITLE>HI</TITLE>
  </HEAD>
<HTML>
*/


//TARGETING DOM ELEMENTS
/*
doument.getElementById("id");
document.getElementByClassName("classname");
document.getElementsByTagName("tagname");
document.getElementsByTagNameNS("tagnameNS");
document.querySelectorALL("query"); //query example p.intro
document.anchors[index]
document.body[index]
document.documentElement[index]
document.embeds[index]
document.forms[index]
document.head[index]
document.images[index]
document.links[index]
document.scripts[index]
document.title[index]

*/

/*
<!DOCTYPE html>
<html>
<body>

<p>Hello World!</p>

<div id="main">
<p>The DOM is very useful.</p>
<p>This example demonstrates the <b>getElementsByTagName</b> method</p>
</div>

<p id="demo"></p>

<script>
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
</script>

</body>
</html>
*/
