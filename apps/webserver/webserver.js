const express = require('express');
var path = require("path");

if (process.argv.length < 3) {
    console.log("node webserver.js port");
    return;
}
const app = express();
const port = parseInt(process.argv[2]);

process.chdir("./apps/webserver");
console.log(process.cwd());

// 指定静态资源路径
app.use(express.static(path.join(process.cwd(), "www_root")));
app.listen(port);

console.log("webserver started at port" + port);