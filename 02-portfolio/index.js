// ----------HEADER----------
var sideMenu = document.getElementById("side-menu");
var menuLinks = document.querySelectorAll(".close-menu");
var xMark = document.getElementById("menu-btn");
var MenuButton = document.getElementById("menu-btn");

function openMenu() {
    MenuButton.style.display = 'none';
    sideMenu.style.right = 0;
}

function closeMenu() {
    sideMenu.style.right = "-500px";
    MenuButton.style.display = 'block';
}


if(window.innerWidth <= 768){

    // After we press any link in the menu bar, we close the menu
    menuLinks.forEach(function(link){
        link.addEventListener('click', closeMenu);
    });
}


//  ----------ABOUT----------

var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');
var tabLink;
var tabContent;


function opentab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");

    document.getElementById(tabName).classList.add("active-tab");

    ShowLess();
}

// This function will be running When the <<read more...>> link clicked!
function readMore(readMoreContent) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    document.getElementById(readMoreContent).classList.remove("hide");
    document.getElementById("read-more").classList.add("hide");
    document.getElementById('show-less').classList.remove("hide");

}

// This function will be running When the << show less >> link clicked!
function ShowLess() {
    document.getElementById("read-more").classList.remove("hide");
    document.getElementById("show-less").classList.add("hide");
    document.getElementById("read-more-content").classList.add("hide");
}

function AddActiveLink(id) {
    document.getElementById(id).classList.add("active-link");
}