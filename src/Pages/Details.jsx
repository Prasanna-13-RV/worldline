import axios from "axios";
import React, {useEffect, useState} from "react";
import "../Files/css/Details.css"

function Details() {
	const [details, setDetails] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8080/api/employee").then((res) => {
			setDetails(res.data);
		});
	}, []);


	return (
		<>
			<section className="section">
                <h1>Employee Details</h1>
				<table>
					<thead>
						<th>
							<td>Employee Name</td>
						</th>
						<th>
							<td>Mail</td>
						</th>
						<th>
							<td>Phone</td>
						</th>
						<th>
							<td>Gender</td>
						</th>
						<th>
							<td>Qualification</td>
						</th>
						<th>
							<td>Experience</td>
						</th>
						<th>
							<td>Past Experience</td>
						</th>
						<th>
							<td>Current Experience</td>
						</th>
					</thead>
					<tbody>
						{details.map((e, index) => {
							return (
								<>
									<tr>
										<td>{e.e_name}</td>
										<td>{e.e_email}</td>
										<td>{e.e_phone}</td>
										<td>{e.e_gender}</td>
										<td>{e.e_past_experience}</td>
										<td>{e.e_data_joined.slice(0, 10)}</td>
										<td>{e.e_dob.slice(0, 10)}</td>
										<td>{e.e_data_joined.slice(0, 10) - "2023-04-19"}</td>
									</tr>
								</>
							);
						})}
					</tbody>
				</table>
			</section>
		</>
	);
}

export default Details;
