import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Question() {
	const [listOfQuestion, setListOfQuestion] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/user/question/findQuestion")
			.then((response) => {
				setListOfQuestion(response.data);
			});
	}, []);

	return (
		<div>
			{listOfQuestion.map((value, key) => {
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
								<p>{value.text}</p>
							</div>
							<img
								src={"http://localhost:8080\\" + value.image}
								alt="Post Image"
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Question;
