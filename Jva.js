const eye = document.querySelector(".feather-eye");
const eyeoff = document.querySelector(".feather-eye-off");
const passwordField = document.querySelector("input[type=password]");


eye.addEventListener("click", () => {
  eye.style.display = "none";
  eyeoff.style.display = "block";
  passwordField.type = "text";
});

eyeoff.addEventListener("click", () => {
  eyeoff.style.display = "none";
  eye.style.display = "block";
  passwordField.type = "password";
});







var myInput = document.getElementById('psw');
const password = 'elyas' ; 
const password2 = 'ali' ; 
const password3 = 'Sq'


document.getElementById("val").addEventListener("click", function() {
  if (myInput.value == password ) {
      
      window.location.href = "Menu2.html"; 
  } else {
      
      document.getElementById("pass").style.display = "block";

  }

});


document.getElementById("val").addEventListener("click", function() {
  if (myInput.value == password2 ) {
      
      window.location.href = "https://mawaqit.net/fr/grande-mosquee-de-paris"; 
  } else {
      
      document.getElementById("pass").style.display = "block";

  }

});

document.getElementById("val").addEventListener("click", function() {
  if (myInput.value == password3 ) {
      
      window.location.href = "https://mawaqit.net/fr/mosquee-es-salam-saint-quentin"; 
  } else {
      
      document.getElementById("pass").style.display = "block";

  }

});


 



