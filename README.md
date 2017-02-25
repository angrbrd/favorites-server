# Favorites Server

In this exercise we create a simple HTTP server which is running on *localhost* and demonstrates basic URL parsing and routing.

## Required Packages

	npm install http
	npm install url
	npm install fs
	
## Run The Server

First clone the repository:

	git clone git@github.com:angrbrd/favorites-server.git
	
Then run the server with the steps below:
	
	cd favorites-server
	node favorites-server.js
	
You will see the following output on your console:

	Favorites server is now listening on http://localhost:8080
	
## Examples

Open your browser and point it to *localhost:8080* to see the available links and click on them to observe the routing based on URL. If an unknown URL is entered, a 404 landing page is returned.
