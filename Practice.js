/* Q2
var arr = [8,56,9,5,8,7,2,3,6,9,4,4];
var count = 0;
arr.forEach(element => {
    count++;
});

console.log("Count is  : ", count);

// Q3
var name = (yourname)=>{
    return yourname;
}

var sum = (a,b)=>{
    return a+b;
}

var div = (c,d)=>{
    return c/d;
}

module.exports={name, sum, div};


//Q4
var  test = require('./Practice')

console.log(("First function:"),test.sum(10,20))
console.log(("Second Function:"),test.name("Harsh Bhatt"))
console.log(("Third function:"),test.div(30,6))



/*Q5
var http = require('http')

var server = http.createServer(function(req,res){

        res.writeHead(200,{"Content-Type":"text.html"});
        res.write("Hello, I am Harsh Bhatt doing node.js development");
        res.end();

}).listen(3000);

console.log("server is running at port 3000");


//Q6
var http = require('http');

var server = http.createServer(function(req,res){

// code to run the default page
    if(req.url== '/'){
    res.writeHead(200,{"Content-Type": "text.html"});
    res.write("harsh created a home(default) page");
    res.end();
    }

// code to run student page
    else if(req.url=='/student'){
    res.writeHead(200,{"Content-Type": "text.html"});
    res.write("harsh created a student page");
    res.end();

    }
// code to run admin page
    else if(req.url=='/admin'){
        res.writeHead(200,{"Content-Type": "text.html"});
        res.write("harsh created a admin page");
        res.end();
    
    }
// else than above three it will give the command as 'invalid'
    else
        res.end('invalid')
    
}).listen(3000);

console.log("server running on port 3000");
*/
