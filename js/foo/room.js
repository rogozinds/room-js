//window.onload = function() {
//    //var c = document.getElementById("myCanvas");
//    //c.style.width=300+"px";
//    //c.style.height=300+"px";
//    //c.style.backgroundImage="url('/resources/pic1.png')";
//}
//
//var pos;
//function allowDrop(ev) {
//    ev.preventDefault();
//}
//function get_pos(ev){
//    pos = [ev.pageX, ev.pageY];
//}
//function drag(ev) {
//    ev.dataTransfer.setData("Text",ev.target.id);
//}
//
//function getPosition(element) {
//    var xPosition = 0;
//    var yPosition = 0;
//
//    while(element) {
//        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
//        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//        element = element.offsetParent;
//    }
//    return { x: xPosition, y: yPosition };
//}
//function drop(ev) {
//    ev.preventDefault();
//    var offset = ev.dataTransfer.getData("text/plain").split(',');
//    var data=ev.dataTransfer.getData("Text");
//
//    var img = document.getElementById("img1");
//    var dx = pos[0] - getPosition(img)["x"];
//    var dy = pos[1] - getPosition(img)["y"];
//
//
//    var list=img.parentElement.parentElement;
//    var item=img.parentElement;
//    var c = document.getElementById("myCanvas");
//
//    c.appendChild(img);
//    list.removeChild(item);
//    document.getElementById("img1").style.position="absolute";
//    document.getElementById("img1").style.left=(ev.pageX-dx) +'px';
//    document.getElementById("img1").style.top=(ev.pageY-dy)+'px';
//
//}