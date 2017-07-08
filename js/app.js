var curYPos, curXPos, curDown;

window.addEventListener('mousemove', function (e) {
    if (curDown) {
        window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
    }
});

window.addEventListener('mousedown', function (e) {
    curYPos = e.pageY;
    curXPos = e.pageX;
    curDown = true;
    document.getElementById("wrapper").classList.add('cursor-grabbing');
    document.getElementById("wrapper").classList.remove('cursor-grab');
});

window.addEventListener('mouseup', function (e) {
    curDown = false;
    document.getElementById("wrapper").classList.add('cursor-grab');
    document.getElementById("wrapper").classList.remove('cursor-grabbing');
});


/* modal window */
var modal = document.getElementById("blue-origin-modal");
var btn = document.querySelector("#company-blue-origin > div");
var close = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
