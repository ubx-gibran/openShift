/**
 * OpenShift Application example
 * ============================
 *
 * This is example for use in openShift, and
 * integrate resources, with cron.
 */

/**
 * Set variables for enviroment
 *
 */
	var express = require('express');
	var server = express();
	var path = require('path');

/**
 * Views as directory for all template files
 *
 */
	server.set('views', path.join(__dirname, 'views'));
	server.set('view engine', 'jade'); // You can use either jade or ejs
	
	// Instruct express to server up static assets
	server.use(express.static('public'));

/**
 * Set server port
 *
 */
	server.listen(4000);
	console.log('server is running');

/**
 * Set routes all
 *
 */
	server.get('/', function(req, res) {
		res.render('index');
	});
