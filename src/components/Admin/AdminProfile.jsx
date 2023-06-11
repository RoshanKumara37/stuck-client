import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function AdminProfile() {
	const [listOfAdmins, setListOfAdmins] = useState([]);
	const [newsDetail, setNewsDetail] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/admin/findAllAdmin")
			.then((response) => {
				setListOfAdmins(response.data);
			});
	}, []);
	const deleteUser = (id) => {
		axios
			.delete(`http://localhost:8080/api/admin/deleteUser/${id}`)
			.then((response) => {
				setListOfAdmins(
					listOfAdmins.filter((val) => {
						return val.id !== id;
					})
				);
				setNewsDetail(
					<p className="">
						---------------------------------------&#9989; User Deleted &#9989;
						---------------------------------------
					</p>
				);
			});
	};
	const updateUser = (id) => {
		axios
			.put(`http://localhost:8080/api/admin/updateAdminasUser/${id}`)
			.then((response) => {
				setListOfAdmins(
					listOfAdmins.filter((val) => {
						return val.id !== id;
					})
				);
				setNewsDetail(
					<p className="">
						---------------------------------------&#128557; Admin Down grate as
						User &#128557; ---------------------------------------
					</p>
				);
			});
	};
	return (
		<div>
			<div>
				<h1 className="mainTopic">Admin Profile View</h1>
				<div className="">
					<h4>{newsDetail}</h4>
				</div>
			</div>
			<table class="styled-table">
				<thead>
					<tr>
						<th>Admin Email</th>
						<th>Name</th>
						<th>Mobile No</th>
						<th>Birth Day</th>
						<th colSpan="2">Activity</th>
					</tr>
				</thead>
				{listOfAdmins.map((value, key) => {
					return (
						<tbody>
							<tr>
								<td>{value.email}</td>
								<td style={{ "text-transform": "capitalize" }}>
									{value.first_name + " " + value.last_name}
								</td>
								<td>{value.mobile}</td>
								<td>{value.birthday.split("T")[0]}</td>
								<td>
									<button
										className="button bunEdit fa fa-edit"
										style={{
											width: "70px",
											height: "25px",
											backgroundColor: "green",
										}}
										title="Make as User"
										onClick={() => {
											if (
												window.confirm(
													"Are you sure you wish to update that Admin as User?"
												)
											)
												updateUser(value.id);
										}}
									/>
								</td>
								<td>
									<button
										title="Delete that Admin"
										className="button bunRemove fa fa-trash"
										style={{
											width: "70px",
											height: "25px",
											backgroundColor: "red",
										}}
										onClick={() => {
											if (
												window.confirm(
													"Are you sure you wish to delete this user?"
												)
											)
												deleteUser(value.id);
										}}
									/>
								</td>
							</tr>
						</tbody>
					);
				})}
			</table>
		</div>
	);
}

export default AdminProfile;
