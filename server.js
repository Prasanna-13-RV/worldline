const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require("./db");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

db.connect((error) => {
	if (!error) {
		console.log("PostgreSQL is connected");
	} else {
		console.log("PostgreSQL is not connected");
	}
});

app.get("/", (req, res) => {
	res.json("Hello World");
});


app.get("/api/employee", (req, res) => {
	try {
		db.query("SELECT * FROM employee_table", (error, result) => {
			if (!error) {
				res.json(result.rows);
			} else {
				console.log(error, "error");
			}
		});
	} catch (error) {
		console.log(error);
	}
});

app.post("/api/employee/register", (req, res) => {
	try {
		const {
			e_name,
			e_email,
			e_phone,
			e_gender,
			e_qualification,
			e_past_experience,
			e_data_joined,
			e_dob,
		} = req.body;
		db.query(
			"INSERT INTO employee_table(e_name, e_email, e_phone, e_gender, e_qualification, e_past_experience, e_data_joined, e_dob) VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
			[
				e_name,
				e_email,
				e_phone,
				e_gender,
				e_qualification,
				e_past_experience,
				e_data_joined,
				e_dob,
			],
			(error, result) => {
				if (!error) {
					return res.json(result);
				} else {
					console.log(error, "error");
				}
			}
		);
	} catch (error) {
		console.log(error);
	}
});

app.listen(8080, (req, res) => {
	console.log(`Server is running on 8080`);
});
