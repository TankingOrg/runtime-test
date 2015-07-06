var libFs = require("fs");
var http = require('http');
var os = require('os');  
var url = require('url');
var pathLib = require('path');
var testPath = '/subHtml'
var path = '../test';
var INDEX = 'index.html';
var filePath = '';
http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  //check pathname is end of '/' then append index.html
  if(pathname === '/' || pathname[pathname.length-1] === '/')  {
    var name = ''
    if(filePath.length === 0 || filePath.substr(filePath.length-5) !=='.html') {
      name = INDEX;
      pathname = pathname + name;
    }else{
      pathname = '';
    }
  }
  var ext = pathLib.extname((pathname.length ==0)?filePath:pathname);
  ext = ext ? ext.slice(1) : 'unknown';

  libFs.exists(path+filePath + pathname, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            libFs.readFile(path+filePath + pathname, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err.toString());
                } else {
                    var contentType = types[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
}).listen(1337);
var getIP = function(){
   var IPv4,hostName;  
    hostName=os.hostname();  
    var eth = os.networkInterfaces();
    var serverIP = [];
    if(eth.eth0  && eth.eth0.length > 1)  serverIP = eth.eth0;
    else if(eth.wlan0) serverIP = eth.wlan0;
    else serverIP = eth.lo;
    for(var i=0;i<serverIP.length;i++){  
        if(serverIP[i].family=='IPv4'){  
            IPv4=serverIP[i].address;  
        }  
    }
    console.log('----------local IP: '+IPv4);  
    console.log('----------local host: '+hostName); 
    return IPv4;
}
 $("#server-new ")[0].innerHTML = "Server running:"
$("#server-m")[0].innerHTML =  getIP()+":1337";
$("#html-m")[0].innerHTML = INDEX;
 //document. ("span").innerHTML = global + "===" + process.version + "===" + window;// + "-" + window.

 //set index link
 var span_ = $('<li>',{
    'class': 'file-index',
 });
 var a_ = $('<a>',{
  })
 a_[0].textContent = 'index.html';
 span_.append(a_);
 $('#content').append(span_)
 $('.file-index').on('click',function(ev){
      filePath = '';
      $('#html-m')[0].innerText =  INDEX;
     });

//set other test link
libFs.readdir(path+testPath,function(err_,files_){
  if(err_) throw err_;
  else{
    for (var i = files_.length - 1; i >= 0; i--) {
      var span_ = $('<li>',{
        'class': 'file-list',
      });
      var a_ = $('<a>',{
      	'class': 'file-link',
      })
      a_[0].textContent = files_[i];
      span_.append(a_);
      $('#content').append(span_)
  	};

  	$('.file-list').on('click',function(ev){
      var fileStr = $(this).children('a')[0].textContent;
      if(fileStr.substr(fileStr.length-5) === '.html')
      	filePath = "/subHtml/"+fileStr;
      else{
      	filePath = "/subHtml/"+fileStr;
      }
      $('#html-m')[0].innerText =  filePath;
     });
  }
})