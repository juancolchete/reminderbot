var express = require('express');
var app = express();
app.use(express.json());
app.listen(3000);
var events = require('./events.json');
const fs = require('fs');

app.post('/add', function(req, res) {
    console.log(req.body.length);
    var error = {message: ""};
    try {
        if(JSON.stringify(req.body).length > 10){
            events.push(req.body);
            fs.writeFileSync('events.json', JSON.stringify(events));
            res.send(events);
        }else{
            error.message = "Por favor envie o conteúdo do evento";
            res.send(JSON.stringify(error));
        }
    } catch (e) {
        error.message = "Não foi possível inserir o evento, ocorreu o seguinte erro: "+e;
        res.send(JSON.stringify(error));
    }
});