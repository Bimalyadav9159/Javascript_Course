//Example-1 Function if
var a = 10;
 var b = 20;
 if(a > b , a==b, a===b){
    document.write("A is Greater <br>");
    document.write("<br>");
    document.write("A is equal  to B <br>");
    document.write("Same value and data type <br>");
 }else{
    document.write("B is greater <br>");
    document.write("A is not Equal to B <br>");

    document.write(" Not Same value and data type <br>");
 }

 //Example-2  Logical Operators
 // Note and && operater: It have to both condition currect then only esecute ohter not esecute
 var age = 20;
 if(age>=  18 && age<= 21){
    document.write("You are eligible for voting And Operator <br>");
    document.write("Note:- and && operater: It have to both condition currect then only esecute ohter not esecute");
 }else{
    
    document.write("You are not eligible for voting<br>");
 }

//Note OR || operator: If any one condition is currect the it will e xecute 
 var ages = 15;
 if(ages>=  18 || ages<= 21){
    document.write("You are eligible for voting OR Operater<br>");
    document.write("Note:- OR || operator: If any one condition is currect the it will e xecute")

 }else{
    
    document.write("You are not eligible for voting OR Operater<br>");
 }


 var name = "Bimal Yadav";
 var gender = "Male";
 if(gender == "Male"){
    document.write("<br> Hello Mr." + name + "<br>");

 }else{
    document.write("Hello Ms."+name);
 }


var per = 80;
if(per >= 80 && per <= 100){
    document.write("Your grade is A <br>");
}else if(per >= 60 && per < 80){
    document.write("Your grade is B <br>");
}else if(per >= 40 && per < 60){
    document.write("Your grade is C <br>");
}else if(per >= 20 && per < 40){
    document.write("Your grade is D <br>");
}else if(per < 20){
    document.write("Failed");
}else{
    document.write("Invalid Percentage");
}