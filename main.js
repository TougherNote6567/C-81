var studentarray=[];
function submit(){
  var namestorage1=document.getElementById("SN_1").value;
  studentarray.push(namestorage1);
  document.getElementById("arrayname").innerHTML=studentarray.toString();
}
function show(){
  var i=studentarray.join("<br>");
  document.getElementById("P1").innerHTML=i.toString();
}
function search(){
 var s=document.getElementById("Srch").value;
 var found=0;
 var j;
 for(j=0; j<studentarray.length; j++){
   if(s==studentarray[j]){
     found++;
   }
 }
 document.getElementById("P2").innerHTML="Name found "+ found +" time(s)";
}
function abcSorting(){
  studentarray.sort();
  var a=studentarray.join("<br>");
  document.getElementById("P3").innerHTML=a.toString();
}
function removeDuplicates(){
}