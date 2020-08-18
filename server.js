const path = require('path');
const express = require('express');
const app = express();

// look up why I need this
app.use(express.static('dist'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(8080);
