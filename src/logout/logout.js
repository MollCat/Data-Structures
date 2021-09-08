let statusIcon = document.getElementById("status-icon");

function onMouseEnter() {
    statusIcon.src = "/assets/red-x.png";
}

function onMouseLeave() {
    statusIcon.src = "/assets/green-checkmark.png";
}

function onLogoutClick() {
    logout();
    location.reload();
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
}