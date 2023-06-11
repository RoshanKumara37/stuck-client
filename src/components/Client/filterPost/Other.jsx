import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Other() {
	const [listOfPost, setListOfPost] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/user/post/filterOther")
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
								<h6 id="customDStyle">
									{value.createdAt.split("T")[0] +
										"  " +
										value.createdAt.split("T")[1].split(":")[0] +
										":" +
										value.createdAt.split("T")[1].split(":")[1]}
								</h6>
								<h1 id="customHStyle">#{value.category}</h1>
								<p id="customPStyle">{value.text}</p>
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

export default Other;
