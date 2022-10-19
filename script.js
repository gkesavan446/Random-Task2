
var label = Createlabel("label", "for", "fname", "FirstName");
var br = createLinebreak("br");
var input = CreateInput("input", "type", "text","name", " ", "id", "fname");
var br1 = createLinebreak("br");

var label1 = Createlabel("label", "for", "mname", "MidName");
var br2 = createLinebreak("br");
var input1 = CreateInput("input", "type", "text", "name", " ", "id", "mname");
var br3 = createLinebreak("br");

var label2 = Createlabel("label", "for", "lname", "LastName");
var br4 = createLinebreak("br");
var input2 = CreateInput("input", "type", "text", "name", " ", "id", "lname");
var br5 = createLinebreak("br");

var label3 = Createlabel("label", "for", "email", "Email");
var br6 = createLinebreak("br");
var input3 = CreateInput("input", "type", "email", "name", " ", "id", "email");
var br7 = createLinebreak("br");

var label4 = Createlabel("label", "for", "pass", "Password");
var br8 = createLinebreak("br");
var input4 = CreateInput("input", "type", "password", "name", "p", "id", "pass");
var br9 = createLinebreak("br");

document.body.append(label, br, input, br1, label1, br2, input1, br3, label2, br4, input2, br5, label3, br6, input3, br7, label4, br8, input4, br9);


function Createlabel(tagname, attributename, attrivalue, content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attributename, attrivalue);
    ele.innerHTML=content;
    return ele;
 }
 
 function createLinebreak(tagname){
    var br=document.createElement(tagname)
    return br;
 }
 
 function CreateInput(tagname, attributename, attrivalue, attributename1, attrivalue1, attributename2, attrivalue2){
    var ele1 = document.createElement(tagname);
    ele1.setAttribute(attributename, attrivalue);
    ele1.setAttribute(attributename1, attrivalue1);
    ele1.setAttribute(attributename2, attrivalue2);
    return ele1;
 }
 
 function Createbutton(tagname, content){
    var ele3 = document.createElement(tagname);
    ele3.innerHTML=content;
    return ele3;
 }
 
 function foo(){
         alert("data submitted successfully");
 }