/*eslint no-console: 0*/
"use strict";
var express = require("express");
var app = express();
var http = require("http").Server(app);
var port = process.env.PORT || 3000;
const axios = require('axios');
var host = "localhost";
var port = "3010";

app.get("/", function (req, res) {
	res.send("Hello!!!");
});

app.get("/liststreamkeys", function (req, res) {
	var config = {
		"method": "liststreamkeys",
		"params": ["stream1"]
	};

	var authOptions = {
		method: 'POST',
		url: 'https://maas-proxy.cfapps.eu10.hana.ondemand.com/64086e73-2a5e-4fd9-9ec1-0d9d055c6844/rpc',
		data: config,
		headers: {
			'apikey': '824DaDCbRpjkDNBz8dSUPxZGDDaEkX5sUFhCd2RzERfA47DUCGsVhvkKkJWdS6Mn'
		},
		json: true
	};

	axios(authOptions)
		.then(response => {
			// JSON responses are automatically parsed.
			res.send(response.data.result);
		})
		.catch(e => {
			res.send(e);
		});
});

app.get("/liststreamitems", function (req, res) {
	var config = {
		"method": "liststreamitems",
		"params": ["stream1"]
	};

	var authOptions = {
		method: 'POST',
		url: 'https://maas-proxy.cfapps.eu10.hana.ondemand.com/64086e73-2a5e-4fd9-9ec1-0d9d055c6844/rpc',
		data: config,
		headers: {
			'apikey': '824DaDCbRpjkDNBz8dSUPxZGDDaEkX5sUFhCd2RzERfA47DUCGsVhvkKkJWdS6Mn'
		},
		json: true
	};

	axios(authOptions)
		.then(response => {
			// JSON responses are automatically parsed.
			res.send(response.data.result);
		})
		.catch(e => {
			res.send(e);
		});
});

http.listen(process.env.PORT || port, function () {
	console.log("[index.js] Server Up - " + host + ":" + port);
});

console.log("Server listening on port %d", port);
