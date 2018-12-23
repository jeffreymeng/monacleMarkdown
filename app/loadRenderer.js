const $ = require("jQuery");
const ipcRenderer = require('electron').ipcRenderer;
let x=0;



let interval = setInterval(function() {
	if (x>100) {

		ipcRenderer.send("asynchronous-message", "load-complete");
		clearInterval(interval);
		return;
	}
	$(".progress").css("width", x + "%");
	x ++;
	console.log(x);
}, 35);