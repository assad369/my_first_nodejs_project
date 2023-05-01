
let http= require('http');
let fs=require('fs')

var server= http.createServer( function(req,res){
    if(req.url=='/' || req.url=='/home'){
        fs.readFile('./public/index.html', function(err,data){

            if(err){
                res.writeHead(404, {'content-type':'text/html'});
                res.write('Not found');
                res.end();
            }else{
                res.writeHead(200, {'content-type':'text/html'});
                res.write(data);
                res.end();
            }

        })
    }else if(req.url=='/about'){
        fs.readFile('./public/about.html', function (err,data) {
            if (err){
                res.writeHead(404, {'content-type': 'text/html'});
                res.write('Not Found')
                res.end()
            }else{
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(data)
                res.end()
            }
        })
    }else if(req.url=='/contact'){
        fs.readFile(',/public/about.html', function (err, data) {
            if(err){
                res.writeHead(404,{'content-type':'html'});
                res.write('Not found');
                res.end();
            }else{
                res.writeHead(200,{'content-type':'html'});
                res.write(data);
                res.end();
            }
        })
    } else if (req.url=='/privacy'){
        fs.readFile('./public/privacy.html', function (err, data) {
            if (err){
                res.writeHead(404, {'content-type':'text/html'})
                res.write('Not Found')
                res.end()
            }else{
                res.writeHead(200, {'content-type':'text/html'})
                res.write(data)
                res.end()
            }
        })
    } else if (req.url=='/contact'){
        fs.readFile('./public/contact.html', function (err, data) {
            if (err){
                res.writeHead(404, {'content-type':'text/html'})
                res.write('Not Found')
                res.end()
            }else{
                res.writeHead(200, {'content-type':'text/html'})
                res.write(data)
                res.end()
            }
        })
    }
})

server.listen(3000);

console.log('Server is running')