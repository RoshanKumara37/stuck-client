import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function PostReject() {
	const [listOfPost, setListOfPost] = useState([]);
	const [newsDetail, setNewsDetail] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/user/post/findRejectedPost")
			.then((response) => {
				setListOfPost(response.data);
			});
	}, []);
	const pendingPost = (id) => {
		axios
			.put(`http://localhost:8080/api/user/post/updateAsPendingPost/${id}`)
			.then((response) => {
				setListOfPost(
					listOfPost.filter((val) => {
						return val.id !== id;
					})
				);
				setNewsDetail(
					<p className="">
						---------------------------------------&#128557; That Post Put to
						Pending Status &#128557; ---------------------------------------
					</p>
				);
			});
	};

	const approvedPost = (id) => {
		axios
			.put(`http://localhost:8080/api/user/post/updateAsApprovedPost/${id}`)
			.then((response) => {
				setListOfPost(
					listOfPost.filter((val) => {
						return val.id !== id;
					})
				);
				setNewsDetail(
					<p className="">
						---------------------------------------&#128513; That Post Put to
						Approved Status &#128513; ---------------------------------------
					</p>
				);
			});
	};
	return (
		<div>
			<div>
				<div className="">
					<h4>{newsDetail}</h4>
				</div>
			</div>
			{listOfPost.map((value, key) => {
				return (
					<div className="imgContainer">
						<div key={key}>
							<img
								src={"http://localhost:8080\\" + value.image}
								className="styleImage"
								style={{ width: "490px" }}
								alt="Post Image"
							/>

							<div class="overlayImage">
								<p style={{ fontSize: "25px" }}>{value.category}</p>
								<p style={{ fontSize: "18px" }}>{value.text}</p>
								<div className="date" style={{ fontSize: "15px" }}>
									Date : {value.createdAt.split("T")[0]}
								</div>
								<button
									className="button bunRemove fa fa-clock-o , pull-right"
									style={{
										width: "100px",
										height: "25px",
										marginTop: "20px",
										backgroundColor: "orange",
									}}
									title="to Pending status?"
									onClick={() => {
										if (
											window.confirm(
												"Are you sure you wish to add that Post to Pending status?"
											)
										)
											pendingPost(value.id);
									}}
								/>
								<button
									className="button bunRemove fa fa-check , pull-left"
									style={{
										width: "100px",
										height: "25px",
										marginTop: "20px",
										backgroundColor: "Green",
									}}
									title="to approve status?"
									onClick={() => {
										if (
											window.confirm(
												"Are you sure you wish to add that Post to approve status?"
											)
										)
											approvedPost(value.id);
									}}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default PostReject;
