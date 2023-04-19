const {Client} = require("pg");

const db = new Client({
	host: "localhost",
	user: "postgres",
	password: "Prasanna1308",
	database: "prasanna",
});


module.exports = db;
