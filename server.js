//imports express.js framework using require function
const express = require('express');
//initializes an instance of express to create routes and handle requests
const app = express();
//server listens to port 3000
const port = 3000;

//array of magic 8 Ball responses
const magic8BallResponses = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"

];

//route handling GET request with question params
app.get('/magic/:question', (req, res) => {
    //retrieves captured question value; %20 space holder
    const question = req.params.question.replace(/%20/g, ' ');
    //generates the randome response
    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];
    //creates the response to question
    const response = `<h1>Your Question: ${question}</h1><h>Magic 8 Ball Response: ${randomResponse}</h1>`;
    //sends response back to the client
    res.send(response);
})

//route handling GET requests
app.get('/getting', (req, res) => {
    //sends response to the client
    res.send('Hello, stranger');
});

//route handling GET requests with name parameter
app.get('/greeting/:name', (req, res) => {
    //retrieves the captured parameter value
    const name = req.params.name;
    //greeting message with captured name
    const greeting = `What's up, ${name}!`;
    //sends greeting back to the client
    res.send(greeting);
})

//route handling GET requests with total and tipPercentage parameter
app.get('/tip/:total/:tipPercentage', (req, res) => {
    //retrieves the captured parameter value; parseFloat used to convert values to floating-point numbers bc they will be received as strings in URL
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    //calculates tip amount based on the param values; 
    const totalTip = (total * tipPercentage) / 100;
    //sends the tip amount back to the client
    res.send(`${totalTip}`);
})

//starts server and listens to port
app.listen(port, () => {
    console.log(`Server is running no port ${port}`);
});



/* 'req.params' contains anobject with key-value pairs where the keys are the parameter names and the values are the valuese provided in the URL. */