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

//route handling GET requests with a route parameter
app.get('/greeting/:name', (req, res) => {
    //retrieves the captured parameter value
    const name = req.params.name;
    //greeting message with captured name
    const greeting = `What's up, ${name}!`;
    res.send(greeting)   ;
})


//starts server and listens to port
app.listen(port, () => {
    console.log(`Server is running no port ${port}`);
});