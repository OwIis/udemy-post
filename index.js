const express = require('express');
const app = express();

app.get('/tacos', (req, res) => {
    res.send('get /tacos response by get')
})

app.post('/tacos', (req, res) => {
    res.send('post /tacos respons')
})

app.listen(3000, () => {
    console.log('hiiiii')
})