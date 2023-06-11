import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function PostApprove() {
	const [listOfPost, setListOfPost] = useState([]);
	const [newsDetail, setNewsDetail] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/user/post/findApprovedPost")
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
	const rejectedPost = (id) => {
		axios
			.put(`http://localhost:8080/api/user/post/updateAsRejectedPost/${id}`)
			.then((response) => {
				setListOfPost(
					listOfPost.filter((val) => {
						return val.id !== id;
					})
				);
				setNewsDetail(
					<p className="">
						---------------------------------------&#128557; That Post Put to
						Rejected Status &#128557; ---------------------------------------
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
									className="button bunRemove fa fa-times , pull-right"
									style={{
										width: "100px",
										height: "25px",
										marginTop: "20px",
										backgroundColor: "red",
									}}
									title="to rejected status?"
									onClick={() => {
										if (
											window.confirm(
												"Are you sure you wish to add that Post to rejected status?"
											)
										)
											rejectedPost(value.id);
									}}
								/>
								<button
									className="button bunRemove fa fa-clock-o , pull-left"
									style={{
										width: "100px",
										height: "25px",
										marginTop: "20px",
										backgroundColor: "orange",
									}}
									title="to pending status?"
									onClick={() => {
										if (
											window.confirm(
												"Are you sure you wish to add that Post to pending status?"
											)
										)
											pendingPost(value.id);
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

export default PostApprove;
