//hamburger menu logged out 
function LoggedOutNav() {
    const x = document.getElementById("menu-list-loggedout");
    const closeMenu = document.getElementById("close-menu");
    const openMenu = document.getElementById("open-menu");
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
    const x = document.getElementById("menu-list-loggedin");
    const closeMenu = document.getElementById("close-menu");
    const openMenu = document.getElementById("open-menu");
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