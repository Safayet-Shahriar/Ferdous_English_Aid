
let navbar = document.getElementById("res-navbar");
let showbtn = document.getElementById("show");
let hidebtn = document.getElementById("hide");
let index = document.getElementById("res-index");
let prank = document.getElementById("prank");
let form = document.getElementById("onlyform");

function show() {
    showbtn.style.display = "none";
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
    if (form.value == "SSSumve-fea") {
        prank.style.display = "none";
    } else {
        alert("Incorrect Password. \nMay Be you are no longer a student of Ferdous English Aid.");
    }
}
