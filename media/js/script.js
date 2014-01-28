// Set up our funcs
// For the sake of a quick demo, we're just going to show and hide some elems
// Easiest way to do that would be to hide them all
function hideAll() {
    var boxContainer = document.getElementById("box_container");
    var boxes = boxContainer.getElementsByTagName("div"); // ok using 'div' as a selector isn't ideal, but: IE7
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.display = 'none';
    }
}

// And show the one you want, using a matching id
function show(clickerId) {
    var targetId = document.getElementById("box_"+clickerId);
    targetId.style.display = 'block';
}

// Set up your vars
var linkContainer = document.getElementById("linkContainer");
var links = linkContainer.getElementsByTagName("a");

// Bind your click handlers
for(var i = 0; i < links.length; i++){
    var elem = links[i];
    elem.onclick = function(){
        var clickerId = this.id;
        hideAll();
        show(clickerId);
        return false;
    }
}