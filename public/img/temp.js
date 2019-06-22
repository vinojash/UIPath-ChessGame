function freeze_gif(i) {
  i = document.getElementById("processgif");
  var c = document.createElement("canvas");
  var w = (c.width = i.width);
  var h = (c.height = i.height);
  c.getContext("2d").drawImage(i, 0, 0, w, h);
  try {
    i.src = c.toDataURL("image/gif"); // if possible, retain all css aspects
  } catch (e) {
    // cross-domain -- mimic original with all its tag attributes
    for (var j = 0, a; (a = i.attributes[j]); j++)
      c.setAttribute(a.name, a.value);
    i.parentNode.replaceChild(c, i);
  }
}

var gifElements = getElementById("processgif");

for(var e in gifElements) {
  
	var element = gifElements[e];
	
	if(element.nodeName == 'IMG') {
    
		var supergif = new SuperGif({
			gif: element,
			progressbar_height: 0,
			auto_play: false,
		});

		var controlElement = document.createElement("div");
		controlElement.className = "gifcontrol loading g"+e;

		supergif.load((function(controlElement) {
			controlElement.className = "gifcontrol paused";
			var playing = false;
			controlElement.addEventListener("click", function(){
				if(playing) {
					this.pause();
					playing = false;
					controlElement.className = "gifcontrol paused";
				} else {
					this.play();
					playing = true;
					controlElement.className = "gifcontrol playing";
				}
			}.bind(this, controlElement));
		
		}.bind(supergif))(controlElement));
    
		var canvas = supergif.get_canvas();		
		controlElement.style.width = canvas.width+"px";
		controlElement.style.height = canvas.height+"px";
    controlElement.style.left = canvas.offsetLeft+"px";
		var containerElement = canvas.parentNode;
		containerElement.appendChild(controlElement);
	
  }
}