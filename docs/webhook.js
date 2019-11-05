const secret = "740";
const repo = "../Women-Made-It/";

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');

        if (req.headers['x-hub-signature'] == sig) {
            exec(`cd ${repo} && git pull --no-edit && npm run production && git add . && git commit -m "website production update" && git push`);
        }
    });

    res.end();
}).listen(3004);