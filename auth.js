function loginUser(){
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  if(!email || !pass){
    alert("Email and password required");
    return;
  }
  localStorage.setItem("scanverseUser", email);
  alert("Login success!");
  window.location.href = "scanner.html";
}
