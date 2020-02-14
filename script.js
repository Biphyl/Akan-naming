function myFunction(){
  var year = document.getElementById("year").nodeValue;
  var YY = parseInt(year);
  var month = document.getElementById("month").nodeValue;
  var MM = parseInt(month);
  var day = document.getElementById("day").nodeValue;
  var DD = parseInt(day);
  var CC = (YY-1)/100+1;
  var cent = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  var boy = ["Kwasi",,"Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var girl = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
  if (document.getElementById("gender").checked){
  var gender = "male";
  }
  else {
  var gender = "female";
  }
  if (DD < 1 || DD >31){
  alert("Day does not exist");
  }
  else if (MM < 1 || MM >12 || MM == 2 && DD > 29){
  alert("Month does not exist");
  }
  if (Math.ceil(cent) == 0 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + boy[0]);
  }
  else if (Math.ceil(cent) == 1 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + boy[1]);
  }
  else if (Math.ceil(cent) == 2 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + boy[2]);
  }
  else if (Math.ceil(cent) == 3 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + boy[3]);
  }
  else if (Math.ceil(cent) == 4 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + boy[4]);
  }
  else if (Math.ceil(cent) == 5 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + boy[5]);
  }
  else if (Math.ceil(cent) == 6 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + boy[6]);
  }
  else if (Math.ceil(cent) == 0 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + girl[0]);
  }
  else if (Math.ceil(cent) == 1 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + girl[1]);
  }
  else if (Math.ceil(cent) == 2 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + girl[2]);
  }
  else if (Math.ceil(cent) == 3 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + girl[3]);
  }
  else if (Math.ceil(cent) == 4 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + girl[4]);
  }
  else if (Math.ceil(cent) == 5 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + girl[5]);
  }
  else if (Math.ceil(cent) == 6 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a Sunday and your Akan name is " + girl[6]);
  }
  else {
    alert("Please input your info!");
  }
}
  