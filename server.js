const express = require('express');

const server = express();
const PORT = process.env.PORT || 8080;

server.set('view engine', 'ejs');
server.use(express.static('public'));

server.get('/', (req, res, next) => {
    res.render('home');
})

server.listen(PORT, () => {
    console.log('server started on http://localhost:' + PORT);
});