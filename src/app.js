const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.engine('hbs', handlebars({
    extname: '.hbs'
}))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname + '/source/views'));

const PORT = 3000;

app.get("/", (req, res) => {
    res.render('home');
});

app.use(morgan('combined'));
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));