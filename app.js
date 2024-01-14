const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();

const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Alfonso Jiménez',
    titulo: 'Uso de Handebars en Node',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Alfonso Jiménez',
    titulo: 'Uso de Handebars en Node',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Alfonso Jiménez',
    titulo: 'Uso de Handebars en Node',
  });
});

//Forma de enviar como respuesta un archivo HTML que está en public
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
