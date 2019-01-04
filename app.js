var express  = require ('express');
var db = require('./models');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
var app = express();

const PORT = 2340;

app.set('views engine', 'ejs');
app.set('views', 'app/views');



rl.question('Enter user first name:   ', (firstName)=>{




    rl.setPrompt('Users last name:  ');
    rl.prompt();


    rl.on('line', (lastName)=>{

        db.user.create({firstName: firstName, lastName: lastName})
        .then(function(){
            console.log('Item entered into database')
        });

        
    })
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});

