import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Post() {
	const [listOfPost, setListOfPost] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/user/post/findApprovedPost")
			.then((response) => {
				setListOfPost(response.data);
			});
	}, []);
	return (
		<div>
			{listOfPost.map((value, key) => {
				return (
					<div className="PostImgContainer">
						<div key={key}>
							<div>
								<h6>
									{value.createdAt.split("T")[0] +
										" " +
										value.createdAt.split("T")[1].split(":")[0] +
										":" +
										value.createdAt.split("T")[1].split(":")[1]}
								</h6>
								<h1>#{value.category}</h1>
								<p>{value.text}</p>
							</div>
							<img
								src={"http://localhost:8080\\" + value.image}
								alt="Post Image"
								className="PostStyleImage"
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Post;
