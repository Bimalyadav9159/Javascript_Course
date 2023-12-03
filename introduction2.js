function hello(){
    document.write("Hello EveryBody");
}
function bimal(){
    document.write("Hello Bimal");
}
hello();

hello();
document.write("<br");
hello();
document.write("<br>");
bimal();

//Example function

function praname(fname, lname){
    document.write("Hello" + fname + " " + lname);
}
praname("Bimal","Yadav");

// function sum(a,b){
//     document.write(a+b);
// }
// sum(5,6);


function fullname(fname, lname){
    var a = fname + " " + lname;
    return a;
}
var fn = fullname("Bimal", "Kumar");
document.write(fn);

function sum(math,eng,sc){
    var s = math + eng + sc;
    return s;
}
function percentage(tt){
    var per = tt/300 * 100;
    document.write(per);
}
var total = sum(55,65,75);
percentage(total);


var c = "Bimal yadav"; //Global Varaible It works inside the function and outside the function;
function name(){
    document.write(c);
}
name();
document.write(a);


function city(){
    var d = "Janakpur"; //this is local variable it works only inside the function
    document.write(d);
}