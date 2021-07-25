/* introducción a express */
const hbs = require('hbs');
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT;


/* establecer variables de entorno con dotenv */

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



//midelwares->una funcion que se ejecuta antes ue las demas
app.use( express.static('public') );
 
app.get('/', (req, res) => {
  res.render('home', {
	  nombre: 'Ronaldo Torres Cáceres',
	  titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
	/* res.sendFile(__dirname + '/public/generic.html') */
	res.render('generic', {
		nombre: 'Ronaldo Torres Cáceres',
		titulo: 'Curso de Node'
	});
})

app.get('/elements', (req, res) => {
	/* res.sendFile(__dirname + '/public/elements.html') */
	res.render('elements', {
		nombre: 'Ronaldo Torres Cáceres',
		titulo: 'Curso de Node'
	});
})

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/404.html')
})
 
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})