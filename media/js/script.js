function show(clickerId) {
    var targetId = document.getElementById("box_"+clickerId);
    targetId.style.display = 'block';
    return false;
}

function hideAll() {
    var boxes = document.getElementsByClassName("content");
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.display = 'none';
    }
}

var linkContainer = document.getElementById("linkContainer")
var links = linkContainer.getElementsByTagName("a");

for(var i = 0; i < links.length; i++){
    var elem = links[i];
    elem.onclick = function(){
        var clickerId = this.id;
        hideAll();
        show(clickerId);
    };
}