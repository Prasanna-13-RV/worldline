import axios from "axios";
import React, {useEffect, useState} from "react";

function Details() {
	const [details, setDetails] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8080/api/employee").then((res) => {
			setDetails(res.data);
		});
	}, []);

	return (
		<>
			<div>{JSON.stringify(details)}</div>
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
					{details.forEach((e, index) => {
						return (
							<>
								<p>{console.log(e.e_name)}</p>
								{/* <tr>
									<td>{e.e_name}</td>
									<td>Hello</td>
									<td>Hello</td>
									<td>Hello</td>
									<td>Hello</td>
									<td>Hello</td>
									<td>Hello</td>
									<td>Hello</td>
								</tr> */}
							</>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default Details;
