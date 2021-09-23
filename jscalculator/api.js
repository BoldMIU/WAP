var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req,res) {
    var result=null;
    if(req.query.operation==='plus'){
        result = parseInt(req.query.first)
                + parseInt(req.query.second);
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from('<form action ="http://localhost:8085/">' +
                                 '<h2>Answers is: '+result+'</h2>   ' +
                                 '<input type="submit" value="Another calculation"/>' +
                             '</form>'));
    }else if(req.query.operation==='minus'){
        result = parseInt(req.query.first)
            - parseInt(req.query.second);
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from('<form action ="http://localhost:8085/">' +
            '<h2>Answers is: '+result+'</h2>   ' +
            '<input type="submit" value="Another calculation"/>' +
            '</form>'));
    }else if(req.query.operation==='divide'){
        result = parseInt(req.query.first)
            / parseInt(req.query.second);
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from('<form action ="http://localhost:8085/">' +
            '<h2>Answers is: '+result+'</h2>   ' +
            '<input type="submit" value="Another calculation"/>' +
            '</form>'));
    }else if(req.query.operation==='multiply'){
        result = parseInt(req.query.first)
           * parseInt(req.query.second);
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from('<form action ="http://localhost:8085/">' +
            '<h2>Answers is: '+result+'</h2>   ' +
            '<input type="submit" value="Another calculation"/>' +
            '</form>'));
    } else {
        res.sendFile(path.join(__dirname,'/SimpleAdder.html'));
    }

});

app.listen(8085);

