//hamburger menu logged out 
function LoggedOutNav() {
    var x = document.getElementById("menu-list-loggedout");
    var closeMenu = document.getElementById("close-menu");
    var openMenu = document.getElementById("open-menu");
    if (x.style.display === "block") {
    x.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    } else {
    x.style.display = "block";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    }
}

function LoggedInNav() {
    var x = document.getElementById("menu-list-loggedin");
    var closeMenu = document.getElementById("close-menu");
    var openMenu = document.getElementById("open-menu");
    if (x.style.display === "block") {
    x.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    } else {
    x.style.display = "block";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    }
}