// Javascript Basic event
function hello(){
    alert("Hello Everyone")
}

var a = 1;
while(a <= 10){
    document.write( a + " ) Hello Biaml<br>");
    a = a+1;
}
/*
var b = 1;
document.write("<ul>");
while(b <= 10 ){
    document.write("<li>Hello Yahoo baba </li>");
    b = b+1;

}
document.write("</ul>");    
*/

// Example  *  for loop

for(let b = 2; b <= 10; b++){
    document.write( b + ") Hello World For loop <br>" );
    if(b%2 == 0){
        document.write(b + 'even number <br>');
    }else{
        document.write(b + 'odd number <br>' );
    }
} 

//Nested loop
/*
for (let c =1; c<=100; c= c+10){
    
    for(let d = c; d< c+10; d++){
       document.write(d + " "); 
    }
    document.write( "<br>");
}
*/

/*for(var c = 1; c <= 5; c++){
    for(var d=1; d<=c; d++){
        document.write(d + " ");
    }
    document.write("<br>");
}
*/



//Array 

var ary = [10,20,30,40,50];
var sum = 0;
document.write(ary);
document.write("<br>");
document.write(ary[2]);

document.write("<ul>");
for( var i= 0; i<=4; i++){
    document.write("<li>" + ary[i] + "</li>");
    sum = sum + ary[i];
}
document.write("</ul>");
document.write("Total sum :" + sum);


// Array Example
 var ary1 = new Array();
 ary1[0] = 10;
 ary1[1] = 12;
 ary1[2]= "Bimal";
 ary1[3] = true;

 document.write("<ul>");
for( var i= 0; i<=4; i++){
    document.write("<li>" + ary1[i] + "</li>");
    
}
document.write("</ul>");

//Example take value from user
/*var ary2 = new Array(3);
for(var g = 0; g<3; g++){
    ary2[g] = prompt("Enter the value : ");
}
document.write("<ul>");
for( var i= 0; i<3; i++){
    document.write("<li>" + ary2[i] + "</li>");
    
}
*/

// Example Multidimasion array

var ary3 = [
    ["Harry", 18, "Male", "B.com"],
    ["Rahul", 20, "Female","A.Com"],
    ["Sonu", 22, "Male", "C.Sc"],
    ["Priya", 19, "Female", "BBA"]
];
document.write("<table border='1px' cellspacing='0'>");
for (var j = 0 ;j < ary3.length ; j++) {
    document.write("<tr>")
    for (var k = 0; k < ary3[j].length; k++){
        document.write("<td>" + ary3[j][k] + "</td");
    }
    document.write("</tr>");       
}
document.write("</table>");

var ary4 = ["Sanjay", "Aman", "Rehman", "Karan"];
ary4.push("Shubham"); //Adding element to end of array
document.write(ary4 + "<br>");
document.write(ary4.sort() + "<br>");
document.write(ary4.reverse() + "<br>");
document.write(ary4.pop() + "<br>");
document.write(ary4 + "<br>");


