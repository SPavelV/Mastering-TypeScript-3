"use strict";
// add Node debugger:
// Press F5 -> select Node.js
// updat launch.json: program": "${workspaceFolder}/Chapter01/hello.js",
// press F5
// add Chrome debugger:
// install Chrome debugger plugin for vscode
// Debug -> Add Configuration -> "Chrome Attach"
// add index.html and open it at Chrome
// Open Debug (ctrl + shift + d) select "Attach Chrome" -> F5
// Update index.html in browser
// Update launch json:
// {
//   "name": "Launch chrome",
//   "type": "chrome",
//   "request": "launch",
//   "url": ""url": "file:///path/to/file/index.html",
//   "runtimeArgs": [
//     "--new-window",
//     "--remote-debugging-port=9222"
//   ],
//   "sourceMaps": true
// },
// Press F5
window.onload = function () {
    console.log("Hello vscode");
};
//# sourceMappingURL=helloweb.js.map