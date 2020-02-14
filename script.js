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
  
  
}
  