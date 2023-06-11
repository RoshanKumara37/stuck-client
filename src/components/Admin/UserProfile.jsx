import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function UserProfile() {
	const [listOfAdmins, setListOfAdmins] = useState([]);
	const [newsDetail, setNewsDetail] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/admin/findAllUser")
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
			.put(`http://localhost:8080/api/admin/updateUserasAdmin/${id}`)
			.then((response) => {
				setListOfAdmins(
					listOfAdmins.filter((val) => {
						return val.id !== id;
					})
				);
				setNewsDetail(
					<p className="">
						---------------------------------------&#129297; User Upgrade as
						Admin &#129297; ---------------------------------------
					</p>
				);
			});
	};
	return (
		<div>
			<div>
				<h1 className="mainTopic">User Profile View</h1>
				<div className="">
					<h4>{newsDetail}</h4>
				</div>
			</div>
			<table class="styled-table">
				<thead>
					<tr>
						<th>User Email</th>
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
										title="Make as Admin"
										style={{
											width: "70px",
											height: "25px",
											backgroundColor: "green",
										}}
										onClick={() => {
											if (
												window.confirm(
													"Are you sure you wish to update that user as admin?"
												)
											)
												updateUser(value.id);
										}}
									/>
								</td>
								<td>
									<button
										className="button bunRemove fa fa-trash"
										title="Delete that User"
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

export default UserProfile;
