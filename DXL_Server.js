// const http = require ('http');
// const fs = require ('fs');
// const path = require ('path');

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!');
//     }).listen(3000);
    

//    var http = require('http'); fs = require('fs'); path = require ('path');
//     function serveStaticFile(res, path, contentType, responseCode) {
//         if(!responseCode) responseCode = 200;
//         fs.readFile(__dirname, + path, function (err, data) {
//             if(err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('500 - Internal Error');
//         } else {
//                 res.writeHead(responseCode,
//                     { 'Content-Type': contentType });
//             res.end(data);
//         }
//     });
//     };
//     http.createServer(function (req, res) {
//         path = req.url.replace (/\/?(?:\?.*)?$/, '').toLowerCase();
//         switch (path) {
//             case '' :
//                 serveStaticFile (res, './Dxl_Home_Page.html', 'text/html');
//                 break;
//             default:
//                 serveStaticFile (res, './User_Login.html', 'text/html');
//                 break;  
//         }
//     }).listen(3000);



    // const http = require ('http');
    // const path = require ('path');
    // const fs = require ('fs');

    // const server = http.createServer((req, res) => {
    //     if (req.url === '/') {
    //         fs.readFile (path.join(__dirname, 'public', 'Dxl_Home_Page.html'),
    //         (err, content) => {
    //           if (err) throw err; else
    //           res.writeHead(200, { 'Content-Type': 'text/html' });
    //           res.end(content);  
    //         });
    //         return;
    //     }
    //     return;
    // });
    // const PORT = process.env.PORT || 3000;
    // server.listen(PORT, () => console.log(`server running on port ${PORT}`));
    



    const http = require ('http');
    const path = require ('path');
    const fs = require ('fs');
    const url = require ('url');

    const server = http.createServer((req, res) => {
        let filePath = path.join(__dirname, 'public', 
        req.url === '/'?'Dxl_Home_Page.html':req.url);
        
        let extname = path.extname(filePath);
        
        let contentType = 'text/html';

        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            
            case '.css':
                contentType = 'text/css';
                break;
            
            case '.json':
                contentType = 'application/json';
                break;
            
            case '.png':
                contentType = 'image/png';
                break;

            case '.jpg':
                contentType = 'image/jpg';
                break;
        }

        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code == 'ENOENT') {
                    fs.readFile(path.join(__dirname, 'public', '404.html'), 
                    (err, content) => {
                        res.writeHead(200, { 'Content-Type' : 'text/html' });
                        res.end(content, 'utf8');
                    });
                } else {
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                }
                return;
            }
            res.writeHead(200, { 'Content-Type' : contentType });
            res.end(content, 'utf8');
        });
    });  

    const PORT = process.env.PORT || 5000;

    server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));



// var http = require('http');

// var nStatic = require('node-static');

// var fileServer = new nStatic.Server('./public');

// http.createServer(function (req, res) {
    
//     fileServer.serve(req, res);
//     res.end(content);

// }).listen(3000);