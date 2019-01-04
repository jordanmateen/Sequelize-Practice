var express  = require ('express'); //requiring express
var db = require('./models'); //requiring models module from export
var readline = require('readline'); // requiring readline module from node

var rl = readline.createInterface(process.stdin, process.stdout); // creating readline interface
var app = express(); //app uses express

const PORT = 2340; //port number

app.set('views engine', 'ejs'); // setting view engine (not being used in this instance)
app.set('views', 'app/views'); // setting view for app (not being used in this instance)


//Setting up dynamic data input

rl.question('Enter user first name:   ', (firstName)=>{  // prompting user for first name 

    rl.setPrompt('Users last name:  ');  //setting prompt for last name
    rl.prompt(); // prompt to diplay in console


    rl.on('line', (lastName)=>{ // requiring user last name

        //adding dynamic data into table  - user - create by sequelize
        db.user.create({firstName: firstName, lastName: lastName})
        .then(function(){
            console.log('Item entered into database')  // alert items succedfully added
        });

        
    })
});

//server listening on specified port prompt

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});

