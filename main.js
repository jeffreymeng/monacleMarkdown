const { app, BrowserWindow, ipcMain } = require("electron");
let window, loader;
function createWindow() {
	// Create the browser window.
	loader = new BrowserWindow({
		width: 700,
		height: 350,
		frame:false,
		resizable:true
	});

	// and load the index.html of the app.
	loader.loadFile("app/load.html");

	loader.on('closed', () => {
		loader = null;

	});

	window = new BrowserWindow({
		width: 800,
		height: 600,
		frame:true,
		show:false
	});

	// and load the index.html of the app.
	window.loadFile("app/chat.html");



}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== "darwin") {
		app.quit()
	}
});

app.on("activate", () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (window === null) {
		createWindow();
	}
});

ipcMain.on("asynchronous-message", (event, args) => {
	loader.destroy();
	window.show();
});