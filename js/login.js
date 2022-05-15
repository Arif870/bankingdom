document.getElementById("loginbutton").addEventListener("click", function () {
  // default admin access
  const userGmail = "admin@gmail.com";
  const userPass = "1234";

  // get user email
  const loginEmail = document.getElementById("loginemail");
  const givenEmail = loginEmail.value;

  // get user password
  const loginPass = document.getElementById("loginpass");
  const givenPass = loginPass.value;

  if (givenEmail === userGmail && givenPass === userPass) {
    window.location.href = "home.html";
  } else {
    alert("User access denied !");
  }
});
