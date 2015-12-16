window.onload = function() {
    var c = document.getElementById("myCanvas");
    var context = c.getContext("2d");
    var background=new Image();
    background.src = "/resources/pic1.png";
    background.width=240;
    background.height=300;
    if (background.complete) {
        context.drawImage(background, 0, 0,240,300);
    } else {
        background.onload = function () {
            context.drawImage(background, 0, 0,240,300);
        };
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var x=ev.clientX;
    var y=ev.clientY;

    var c = document.getElementById("myCanvas");
    var context = c.getContext("2d");

    var background=new Image();
    background.src = "/resources/dummy.png";
    context.drawImage(background, x, y,40,40);
}

