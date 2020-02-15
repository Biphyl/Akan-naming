function myFunction(){
  var year = document.getElementById("year").value;
  var yy = parseInt(year);
  var month = document.getElementById("month").value;
  var mm = parseInt(month);
  var day = document.getElementById("day").value;
  var dd = parseInt(day);
  var cc = (yy-1)/100+1;
  var cent = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var boy = ["Kwasi",,"Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var girl = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if (document.getElementById("gender").checked){
  var gender = "male";
  }
  else {
  var gender = "female";
  }
  if (dd < 1 || dd >31){
  alert("Day does not exist");
  }
  else if (mm < 1 || mm >12 || mm == 2 && dd > 29){
  alert("Month does not exist");
  }
  else if (Math.ceil(cent) == 1 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[1] + " and your Akan name is " + boy[1]);
  }
  else if (Math.ceil(cent) == 2 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[2] + " and your Akan name is " + boy[2]);
  }
  else if (Math.ceil(cent) == 3 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[3] + " and your Akan name is " + boy[3]);
  }
  else if (Math.ceil(cent) == 4 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[4] + " and your Akan name is " + boy[4]);
  }
  else if (Math.ceil(cent) == 5 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[5] + " and your Akan name is " + boy[5]);
  }
  else if (Math.ceil(cent) == 6 && gender === "male"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[6] + " and your Akan name is " + boy[6]);
  }
  else if (Math.ceil(cent) == 0 && gender === "male"){
    document.getElementById("outcome").innerHTML = 
    alert("You were born on a " + dayOfWeek[0] + " and your Akan name is " + boy[0]);
    }
  else if (Math.ceil(cent) == 1 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[1] + " and your Akan name is " + girl[1]);
  }
  else if (Math.ceil(cent) == 2 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[2] + " and your Akan name is " + girl[2]);
  }
  else if (Math.ceil(cent) == 3 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[3] + " and your Akan name is " + girl[3]);
  }
  else if (Math.ceil(cent) == 4 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[4] + " and your Akan name is " + girl[4]);
  }
  else if (Math.ceil(cent) == 5 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[5] + " and your Akan name is " + girl[5]);
  }
  else if (Math.ceil(cent) == 6 && gender === "female"){
  document.getElementById("outcome").innerHTML = 
  alert("You were born on a " + dayOfWeek[6] + " and your Akan name is " + girl[6]);
  }
  else if (Math.ceil(cent) == 0 && gender === "female"){
    document.getElementById("outcome").innerHTML = 
    alert("You were born on a " + dayOfWeek[0] + " and your Akan name is " + girl[0]);
    }
  else {
    alert("Please input your info!");
  }
}
  