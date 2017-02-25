// Require the 'http' package
var http = require('http');

// Require the 'url' package
var url = require('url');

// Require the 'fs' package
var fs = require('fs');

// Set the server listening port
var port = 8080;

// Define the server request handler
var server = http.createServer(handleRequest);

// Initialize the server listener
server.listen(port, function() {
	console.log('Favorites server is now listening on http://localhost:%s', port);
});

// handleRequest will route the user request to the appropriate page
function handleRequest(req, res) {
	console.log('___ENTER handleRequest___');

	// Parse the target URL to extract the pathname
	var urlParts = url.parse(req.url);

	// Display the appropriate page depending on the target URL
	switch (urlParts.pathname) {
		case '/':
			displayRoot(urlParts.pathname, req, res);
			break;

		case '/food':
			displayFavoriteFood(urlParts.pathname, req, res);
			break;

		case '/movies':
			displayFavoriteMovies(urlParts.pathname, req, res);
			break;

		case '/frameworks':
			displayFavoriteFrameworks(urlParts.pathname, req, res);
			break;

		default:
			display404(urlParts.pathname, req, res);
	}
}

// displayRoot will return the contents of the index.html page
function displayRoot(path, req, res) {
	console.log('___ENTER disploayRoot___');

	// Read in the contents of the file and return that in the response
	fs.readFile('./assets/index.html', function(err, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
}

// displayFavoriteFood will return the contents of the food.html page
function displayFavoriteFood(path, req, res) {
	console.log('___ENTER displayFavoriteFood___');

	// Read in the contents of the file and return that in the response
	fs.readFile('./assets/food.html', function(err, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
}

// displayFavoriteMovies will return the contents of the movies.html page
function displayFavoriteMovies(path, req, res) {
	console.log('___ENTER displayFavoriteMovies___');

	// Read in the contents of the file and return that in the response
	fs.readFile('./assets/movies.html', function(err, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	})
}

// displayFavoriteFrameworks will return the contents of the frameworks.html page
function displayFavoriteFrameworks(path, req, res) {
	console.log('___ENTER displayFavoriteFrameworks___');

	// Read in the contents of the file and return that in the response
	fs.readFile('./assets/frameworks.html', function(err, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	})
}

// display404 will return the contents of the 'Page Not Found' landing page
function display404(path, req, res) {
	console.log('___ENTER display404___');

	// Read in the contents of the file and return that in the response
	fs.readFile('./assets/404NotFound.html', function(err, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	})
}
