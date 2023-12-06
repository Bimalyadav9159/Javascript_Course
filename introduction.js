//Example-1 Function if
var a = 10;
var b = 20;
if (a > b, a == b, a === b) {
   document.write("A is Greater <br>");
   document.write("<br>");
   document.write("A is equal  to B <br>");
   document.write("Same value and data type <br>");
} else {
   document.write("B is greater <br>");
   document.write("A is not Equal to B <br>");

   document.write(" Not Same value and data type <br>");
}

//Example-2  Logical Operators
// Note and && operater: It have to both condition currect then only esecute ohter not esecute
var age = 20;
if (age >= 18 && age <= 21) {
   document.write("You are eligible for voting And Operator <br>");
   document.write("Note:- and && operater: It have to both condition currect then only esecute ohter not esecute");
} else {

   document.write("You are not eligible for voting<br>");
}

//Note OR || operator: If any one condition is currect the it will e xecute 
var ages = 15;
if (ages >= 18 || ages <= 21) {
   document.write("You are eligible for voting OR Operater<br>");
   document.write("Note:- OR || operator: If any one condition is currect the it will e xecute")

} else {

   document.write("You are not eligible for voting OR Operater<br>");
}


var name = "Bimal Yadav";
var gender = "Male";
if (gender == "Male") {
   document.write("<br> Hello Mr." + name + "<br>");

} else {
   document.write("Hello Ms." + name);
}


var per = 80;
if (per >= 80 && per <= 100) {
   document.write("Your grade is A <br>");
} else if (per >= 60 && per < 80) {
   document.write("Your grade is B <br>");
} else if (per >= 40 && per < 60) {
   document.write("Your grade is C <br>");
} else if (per >= 20 && per < 40) {
   document.write("Your grade is D <br>");
} else if (per < 20) {
   document.write("Failed");
} else {
   document.write("Invalid Percentage");
}




//Example Ternary operator
/*(Condition) ? True Statement : False Statement

*/
var h = 100;
i = (h == 10) ? "True" : "False";
document.write(i);

j = (h == 100) ? k = "Yes" : k = "Now";
document.write(k);

l = "Value is" + (h >= 100 ? "Yess" : "Nos")
document.write(l);

// Example * Swithc statement
var day = 4;
switch (day) {
   case 0: //case 0: case 1: case 2 This print same value for this three case
      document.write("Sunday<br>");
      break;
   case 1:
      document.write("Monday<br>");
      break;
   case 2:
      document.write("Tuesday<br>")
      break;
   case 3:
      document.write("Wednesday<br>")
      break;
   case 4:
      document.write("Thrusday <br>"); 
      break;
   case 5:
      document.write("Friday<br>");
      break;
   case 6:
      document.write("Saturday<br>");
      break;
   default:
      document.write("Invalid Day");
}

var agess = 25;
switch(true){
   case (agess >= 15 && agess <= 20 ):
      document.write("<p>You are a teenager</p>");
      break;
      case (agess > 20 && agess <= 30):
         document.write("<p>You are an adult</p>");
         break;
         case (agess > 30 && agess <= 50):
            document.write("<p>You are middle aged</p>");
            break;
            default:
               document.write("<p>You are old</p>");
}

// Example Alert Box
var k = 20;
var l = 20;
if (k == l) {
   alert('The Value of K :' + k);
}else{
   alert("The value of L :" + l );
}

//Example For conform
var m = confirm("Do you like our Website ?");
alert(m)
document.write(m);

if(m){
   alert("Thanks");
document.write("thanks");
}else{
   alert("Please come again");
   document.write("Sorray");
}

//Example prompt
 var namepro = prompt("What is your name")
 document.write("<br>" + namepro);

