let correctPassword = "money";
let username = document.getElementById("username");
let password = document.getElementById("password");

function onLoginClick() {
  let user = username.value;
  let pass = password.value;
  let isCorrect = checkCredentials(pass);

  if (isCorrect) {
      login(user, pass);
  }
}

function sendToLogin() {
    let loggedIn = isLoggedIn();
    
    if (!loggedIn) {
        location.replace("/src/index.html");
    }
}

function sendToLogout() {
    let loggedIn = isLoggedIn();

    if (loggedIn) {
        location.replace("/src/logout/logout.html");
    }
}

function onLoad() {
    let loggedIn = isLoggedIn();

    if (loggedIn) {
        console.log("The user is logged in.");
        location.replace("/src/logout/logout.html");
    } else {
        console.log("The user is not logged in.");
        if (location.pathname != "/src/index.html")
            location.replace("/src/index.html");
    }
}

function isLoggedIn() {
    let pass = getPassword();
    if (pass == null) {
        return false;
    }

    return checkCredentials(pass);
}

function checkCredentials(credentials) {
    return correctPassword == credentials;
}

function login(user, pass) {
    storeUsername(user);
    storePassword(pass);
}

function storeUsername(user) {
    localStorage.setItem("username", user);
}

function storePassword(pass) {
    localStorage.setItem("password", pass);
}

function getUsername() {
    let user = localStorage.getItem("username");
    return user;
}

function getPassword() {
    let pass = localStorage.getItem("password");
    return pass;
}


