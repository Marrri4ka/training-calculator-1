$(document).ready(function() {
$("form#add").submit(function(event) {

  
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  alert(number1 + number2);
});
});


// var myadd = function(){
// var add = function (number1, number2){
// return number1 + number2;
// };
// //
// var k = parseInt(prompt("Enter number 1:"));
// var l = parseInt(prompt("Eneter nuber 2:"));
//
// var result = add(k,l);
//
// alert(result);
//
//
// var divide = function (number1, number2) {
//   return number1/number2;
// };
//
// var num1 = parseInt(prompt("Enter number1:"));
// var num2 = parseInt (prompt("Enter number2:"));
// var result2 = num1/num2;
//
// alert (result2);
//
//
// var multiply = function (number1, number2){
//   return number1*number2;
// };
//
// var num1 = parseInt(prompt("Enter number1:"));
// var num2 = parseInt (prompt("Enter number2:"));
// var result3 = num1*num2;
//
// alert(result3);
// var substract = function (num1, num2){
//   return num1 - num2;
// };
//
// var k = parseInt(prompt("Enter number1:"));
// var k1 = parseInt (prompt("Enter number2:"));
//
// var result4 = k-k1;
// alert(result4);
//
// };
