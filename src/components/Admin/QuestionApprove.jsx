import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function QuestionView() {
	const [listOfQuestion, setListOfQuestion] = useState([]);
	const [newsDetail, setNewsDetail] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/user/question/findQuestion")
			.then((response) => {
				setListOfQuestion(response.data);
			});
	}, []);

	const rejectedQuestion = (id) => {
		axios
			.put(
				`http://localhost:8080/api/user/question/updateAsRejectedQuestion/${id}`
			)
			.then((response) => {
				setListOfQuestion(
					listOfQuestion.filter((val) => {
						return val.id !== id;
					})
				);
				setNewsDetail(
					<p className="">
						---------------------------------------&#128557; That Question Put
						to Rejected Status &#128557; ---------------------------------------
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
			{listOfQuestion.map((value, key) => {
				return (
					<div className="imgContainer">
						<div key={key}>
							<img
								src={"http://localhost:8080\\" + value.image}
								className="styleImage"
								style={{ width: "490px" }}
								alt="Question Image"
							/>

							<div class="overlayImage">
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
												"Are you sure you wish to add that Question to rejected status?"
											)
										)
											rejectedQuestion(value.id);
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

export default QuestionView;
