const express = require ('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Server is running no port ${port}');
});

//route that send greeting to screen
app.get('/getting', (req, res) => {
    res.send('Hello, stranger');
});