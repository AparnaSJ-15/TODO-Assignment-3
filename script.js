function loginValidate(checkSuccess) {
    let userName = document.getElementById("userid").value;
    let password = document.getElementById("password").value;
    checkSuccess(userName,password);
} 
function onSuccess(uname,pwd) {
        if (uname == "admin" && pwd == "12345") {
            // alert("Login credentials are valid");
            
            document.querySelector("form").action = "./todo.html";
        }
        else {
            alert("Invalid login");
        }
}

function onLogin() {
    loginValidate(onSuccess);
} 
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
