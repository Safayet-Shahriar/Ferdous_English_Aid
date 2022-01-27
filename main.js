
let navbar = document.getElementById("res-navbar");
let showbtn = document.getElementById("show");
let hidebtn = document.getElementById("hide");
let index = document.getElementById("res-index");
let prank = document.getElementById("prank");
let form = document.getElementById("onlyform");

function show() {
    showbtn.style.display = "none";
    navbar.style.display = "block";
    hidebtn.style.display = "block";
}

function hide() {
    hidebtn.style.display = "none";
    navbar.style.display = "none";
    showbtn.style.display = "block";
}

/*
function finishPrank() {
    if (form.value != "") {
        prank.style.display = "none";
    } else {
        alert("Please fill the form");
    }
}
*/