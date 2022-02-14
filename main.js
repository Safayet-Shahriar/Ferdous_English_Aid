
let navbar = document.getElementById("res-navbar");
let showbtn = document.getElementById("show");
let hidebtn = document.getElementById("hide");
let index = document.getElementById("res-index");
let prank = document.getElementById("prank");
let form = document.getElementById("onlyform");

function show() {
    showbtn.style.display = "none";
    navbar.style.height = "auto";
    navbar.style.maxHeight = "calc(100% - 200px)";
    navbar.style.borderTop = "2px solid black";
    navbar.style.borderBottom = "2px solid black";
    hidebtn.style.display = "block";
}

function hide() {
    hidebtn.style.display = "none";
    navbar.style.height = "0px";
    navbar.style.borderTop = "0";
    navbar.style.borderBottom = "0";
    showbtn.style.display = "block";
}


function finishPrank() {
    if (form.value == "$$$umve-fea") {
        prank.style.display = "none";
    } else {
        alert("Incorrect Password");
    }
}
