const {Client} = require("pg");

const db = new Client({
	// host: "13.233.129.206",
	host : "localhost",
	user: "postgres",
	password: "root",
	database: "employee",
});

module.exports = db;
