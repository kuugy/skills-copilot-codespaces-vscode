// create web server
// create web server for comments
// 1. import express
const express = require('express');
// 2. create express server
const app = express();
// 3. create a port
const port = 3000;
// 4. create a route
app.get('/', (req, res) => {
    res.send('Hello world')
});
// 5. listen on a port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 6. create a route for comments
app.get('/comments', (req, res) => {
    res.send('Comments page');
});
// 7. create a route for comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('Comments id page');
});
// 8. create a route for comments/:id/:comment
app.get('/comments/:id/:comment', (req, res) => {
    res.send('Comments id comment page');
});
// 9. create a route for comments/:id/:comment/:reply
app.get('/comments/:id/:comment/:reply', (req, res) => {
    res.send('Comments id comment reply page');
});


