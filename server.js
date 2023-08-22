//imports express.js framework using require function
const express = require ('express');
//initializes an instance of express to create routes and handle requests
const app = express();
//server listens to port 3000
const port = 3000;

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
    res.send(greeting)   ;
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