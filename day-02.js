// task http://www.codewars.com/kata/571edd157e8954bab500032d

var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250;

function equal1(){
  var a = v1   
  var b = v1   
  return a+b;
};

function equal2(){
  var a = v4  //set number value to a
  var b = v2  //set number value to b
  return a-b;
};

function equal3(){
  var a = v1 //set number value to a
  var b = v5 //set number value to b
  return a*b;
};

function equal4(){
  var a = v4 //set number value to a
  var b = v5  //set number value to b
  return a/b;
};

function equal5(){
  var a = v6   //set number value to a
  var b = v3  //set number value to b
  return a%b;
};

// task 2 http://www.codewars.com/kata/571edea4b625edcb51000d8e

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n";

function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
};

function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
};

function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
};

function answer1(){
  //the answer should be "yes" or "no"
  return "no";
};

function answer2(){
  //the answer should be "yes" or "no"
  return "no";
};

function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
};

// task 3 http://www.codewars.com/kata/571effabb625ed9b0600107a

function getLength(arr) {
  return arr.length;
};

function getFirst(arr) {
  return arr[0];
};

function getLast(arr) {
  return arr[arr.length - 1]
};

function pushElement(arr) {
  arr.push(1)
  return arr;
};

function popElement(arr) {
  arr.pop()
  return arr;
};

// task 4 http://www.codewars.com/kata/571f1eb77e8954a812000837

const animal = (obj) => `This ${obj['color']} ${obj['name']} has ${obj['legs']} legs.`;
