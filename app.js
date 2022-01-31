const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/tabla', function(req, res) {
    let num = req.query.num;
    let tabla = "<table>"
    for (let i = 1; i <= 10; i++) {
        tabla += `<tr><td>${num} por ${i} = ${i * num}`;
    }
    tabla += "</table>";
    res.send(tabla);
})

app.listen(port, () => {
    console.log('Listening on port ' + port + '...');
})