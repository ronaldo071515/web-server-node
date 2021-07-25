const http = require('http');

//crearme el servidor
http.createServer( (request, response) => {

	/* console.log(request); */

	/* response.writeHead( 200, { 'Content-Type': 'text/plain' } ); */
	response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
	response.writeHead( 200, { 'Content-Type': 'application/csv' } );

/* 	const persona = {
		id: 1,
		nombre: 'Fernando'
	}; */

	response.write( 'Hola Mundo' );
/* 	response.write( '1, Ronaldo\n' );
	response.write( '2, Juana\n' );
	response.write( '3, Juan\n' );
	response.write( '4, Pedro\n' ); */
	response.end();
})
.listen( 8080 );

console.log('Escuchando el puerto:', 8080);