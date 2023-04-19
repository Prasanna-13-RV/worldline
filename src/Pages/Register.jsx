import React, {useState} from "react";
import axios from "axios";

function Register() {
	const [form, setForm] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
		axios
			.post(`http://localhost:8080/api/employee/register`, form)
			.then((res) => {
				console.log(res);
			});
	};

	return (
		<>
			<section>
				<div>
					<form onSubmit={(e) => handleSubmit(e)}>
						<div>
							<label htmlFor="e_name">Employee Name</label>
							<input
								type="text"
								id="e_name"
								name="e_name"
								placeholder="Enter Employee Name"
								required
								onChange={(e) => {
									setForm({
										...form,
										[e.target.name]: e.target.value,
									});
								}}
							/>
						</div>
						<div>
							<label htmlFor="e_email">Employee Email</label>
							<input
								type="email"
								id="e_email"
								name="e_email"
								placeholder="Enter Employee Email"
								required
								onChange={(e) => {
									setForm({
										...form,
										[e.target.name]: e.target.value,
									});
								}}
							/>
						</div>
						<div>
							<label htmlFor="e_phone">
								Employee Phone Number
							</label>
							<input
								type="number"
								id="e_phone"
								name="e_phone"
								placeholder="Enter Employee Phone Number"
								required
								onChange={(e) => {
									setForm({
										...form,
										[e.target.name]: e.target.value,
									});
								}}
							/>
						</div>
						<div>
							<label htmlFor="e_gender">Enter your Gender</label>
							<input
								type="text"
								id="e_gender"
								name="e_gender"
								placeholder="Enter your Gender"
								required
								onChange={(e) => {
									setForm({
										...form,
										[e.target.name]: e.target.value,
									});
								}}
							/>
						</div>
						<div>
							<label htmlFor="e_qualification">
								Enter your Qualification
							</label>
							<input
								type="text"
								id="e_qualification"
								name="e_qualification"
								placeholder="Enter your Qualification"
								required
								onChange={(e) => {
									setForm({
										...form,
										[e.target.name]: e.target.value,
									});
								}}
							/>
						</div>
						<div>
							<label htmlFor="e_past_experience">
								Enter your Past Experience
							</label>
							<input
								type="number"
								id="e_past_experience"
								name="e_past_experience"
								placeholder="Enter your Past Experience"
								required
								onChange={(e) => {
									setForm({
										...form,
										[e.target.name]: e.target.value,
									});
								}}
							/>
						</div>
						<div>
							<label htmlFor="e_data_joined">
								Enter your Date of Joining
							</label>
							<input
								type="date"
								id="e_data_joined"
								name="e_data_joined"
								placeholder="Enter your Date of Joining"
								required
								onChange={(e) => {
									setForm({
										...form,
										[e.target.name]: e.target.value,
									});
								}}
							/>
						</div>
						<div>
							<label htmlFor="e_dob">
								Enter your Date of birth
							</label>
							<input
								type="date"
								id="e_dob"
								name="e_dob"
								placeholder="Enter your Date of birth"
								required
								onChange={(e) => {
									setForm({
										...form,
										[e.target.name]: e.target.value,
									});
								}}
							/>
						</div>
						<div>
							<input type="submit" value="Register NOw" />
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default Register;
