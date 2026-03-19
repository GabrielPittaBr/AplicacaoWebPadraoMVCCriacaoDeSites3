const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});