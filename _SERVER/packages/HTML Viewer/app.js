document.currentScript.package.createWindow(`<div id="%window%Body" class="windowBody" style="padding:0;"><iframe style="width:100%;height:calc(100% - 4px);" src="data:text/html;base64,${document.currentScript.package.flags}"></iframe></div>`, { titleBar: "Default", title: "HTML Viewer", startingDimensions: [300, 300], resizable: true });