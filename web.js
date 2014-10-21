var gzippo=require('gzippo');
varexpress=require('express');
var app=express();
app.use(gzippo.staticGzip(""+__dirname+"/dist"));
app.listen(process.env.PORT||5000);
