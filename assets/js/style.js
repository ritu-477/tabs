

// const tabs = document.querySelector(".tablink");
// const tabcontent = document.querySelector(".tabcontent")
// tabs.addEventListener("click", function () {
//     tabcontent.classList.add("d-block");
// })


function openpage(evt, pagename) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pagename).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("open").click();
