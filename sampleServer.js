var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){

    if(req==='/'){

    fs.readFile('samplehtml.html',function(err,data){
    

   
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    res.end()
    })

}else if(req.url==='/login'){
    res.write('login')
    res.end()
}else{
    res.write('error')
    res.end()
}
    
}).listen(7000,() =>console.log("Server started"))