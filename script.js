var table = Createtable("table", "class", "table");
var thead = createtablehead("thead", "class", "thead-dark");
var tr =  createtablerow("tr");
var col = Createtablecol("th", "scope", "col", "First");
var col1 = Createtablecol("th", "scope", "col", "Middle");
var col2 = Createtablecol("th", "scope", "col", "Last");
var tbody = createtablebody("tbody", createtablerow());
var tr1 =  createtablerow("tr", createtabledata());
var data = createtabledata("td", "Mark");
var data1 = createtabledata("td", "Otto");
var data2 = createtabledata("td", "@mdo");
tr.append(col, col1, col2);
thead.append(tr);
tr1.append(data, data1, data2);
tbody.append(tr1);
table.append(thead, tbody);
document.body.append(table);

function Createtable(tagname, attributename, attrivalue){
   var ele = document.createElement(tagname);
   ele.setAttribute(attributename, attrivalue);
   return ele;
}

function createtablehead(tagname, attributename, attrivalue){
   var ele1=document.createElement(tagname)
   ele1.setAttribute(attributename, attrivalue);
   return ele1;
}

function createtablerow(tagname){
var ele2=document.createElement(tagname);
return ele2;
}

function Createtablecol(tagname, attributename, attrivalue,content){
   var ele3 = document.createElement(tagname);
   ele3.setAttribute(attributename, attrivalue);
   ele3.innerHTML=content;
   return ele3;
}

function createtablebody(tagname){
   var ele4=document.createElement(tagname)
   return ele4;
}

function createtabledata(tagname, content){
   var ele5=document.createElement(tagname)
   ele5.innerHTML=content;
   return ele5;
}

