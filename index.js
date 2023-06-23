console.log("Hello,World!");

// creating alert box..
//window.alert("Goodbye, World")

let x = 12;
var y = 32;
let st;
st = 'Numbers: ';
console.log(st,x,y);
let check = true;
console.log("is 12 in numbers?", check,"12 is in numbers");

//editing html code
document.getElementById("p1").innerHTML = "Given Numbers: " + x +","+ y;
document.getElementById("p2").innerHTML = "First Number: " + x;
document.getElementById("p3").innerHTML = "Correct? " + check;

/*
getting user input using some prompt
let username = window.prompt("Username: ");
console.log("Welcome " + username)
*/

// User Input From HTML

document.getElementById("submit-button").onclick = function(){

  username = document.getElementById("username").value;
  
  
  age = document.getElementById("age").value;
  document.getElementById("welcome").innerHTML = "Welcome " + username + "!\nYou are now " +
  age + "yrs Old";
  console.log("Welcome " + username + "!\nYou are now " +
  age + "yrs Old");
  age = Number(age);
  age+=1;
  //CHECKBOX or RADIO BUTTON
  if(document.getElementById("male").checked){
    document.getElementById("age-tom").innerHTML = "You are a male," + age + " yrs old next year!";
  }
  else if(document.getElementById("female").checked){
    document.getElementById("age-tom").innerHTML = "You are a female," + age + " yrs old next year!";
  }
  else{
    document.getElementById("age-tom").innerHTML = "Please Select your Gender";
  }
  console.log("You are " + age + " yrs old next year!");
  let confrim = window.prompt("Is this Correct? [true/false]");
  confrim = Boolean(confrim);
  if(confrim){
    console.log("It's TRUE!");
  }
}

document.getElementById("convert-button").onclick = function(){
  const pesso_dollar = 55.64;
  dollar_val = document.getElementById("dollar").value;
  pesso_val = Number(dollar_val) * pesso_dollar;

  console.log("Philippine Peso Value: " + pesso_val);
  document.getElementById("peso").innerHTML = "Philippine Peso Value: " + pesso_val;

}

document.getElementById("compute-button").onclick = function () {
  a = document.getElementById("var_a").value;
  b = document.getElementById("var_b").value;
  a = Number(a);
  b = Number(b);
  c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
  console.log("Hypotenuse of right triangle: " + c);
  document.getElementById("hypotenuse").innerHTML = "Hypotenuse of right triangle: " + c;
}
let count = 0;

document.getElementById("decrease").onclick = function(){
  
  count = Number(count) - 1;
  document.getElementById("count").innerHTML = count;
}
document.getElementById("increase").onclick = function(){
  count+=1;
  document.getElementById("count").innerHTML = count;
}
//IF_ELSE
document.getElementById("reset").onclick = function(){
  score = document.getElementById("score").textContent;
  score = Number(score);
  if(count>score){
    document.getElementById("score").innerHTML = count;
    s
  }
  else{
    document.getElementById("score").innerHTML = score;
  }
  count = 0
  document.getElementById("count").innerHTML = count;
}

//SWITCH
document.getElementById("check-button").onclick = function(){
  grade = document.getElementById("grade").value;
  grade_num = Number(grade)
  switch(grade_num){
    case 1:
      document.getElementById("show-result").innerHTML = "You did great!";
      break;
    case 2:
      document.getElementById("show-result").innerHTML = "You did good!";
      break;
    case 3:
      document.getElementById("show-result").innerHTML = "You passed!";
      break;
    case 4:
      document.getElementById("show-result").innerHTML = "You need to do remedial classes...";
      break;
    case 5:
      document.getElementById("show-result").innerHTML = "You failed...";
      break;
    default:
      document.getElementById("show-result").innerHTML = grade + " is not a valid grade";
  }
}
//Loops
/*
let username = "";
while(username == "" || username == null){
  username = window.prompt("Enter Username:");
}
console.log("Hello, " + username);

do{
  username = window.prompt("Enter Username:");
}while(username == "" && username == null)
console.log("Hello, " + username);
*/
for(let a = 12; a > 0; a-=1){
  
  if(a == 5){
    continue;
  }
  else if(a==3){
    console.log("Number " + a + " reached! Breaking the loop!");
    break;
  }
  console.log(a);
}
//functions
rect_pattern(5,7);
function rect_pattern(row,col){
  for(let i = 0; i < row;i+=1){
    for(let j = 0; j < col; j+=1){
      document.getElementById("pattern").innerHTML +="*";
      
    }
    document.getElementById("pattern").innerHTML += "<br>";
  }
}

//ternary operation

let a = is_even(3);
console.log("EVEN?",a);

function is_even(x){
  // condition ? expression if true: expression if false
  return x % 2 == 0 ? true:false;
}

//var VS let
// var can be used outside the loop and not recommended for global variable
// let cannot be used outside the loop and is used a lot for global variables

