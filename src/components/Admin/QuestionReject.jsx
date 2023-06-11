import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function QuestionReject() {
	const [listOfQuestion, setListOfQuestion] = useState([]);
	const [newsDetail, setNewsDetail] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/user/question/findRejectQuestion")
			.then((response) => {
				setListOfQuestion(response.data);
			});
	}, []);

	const approvedQuestion = (id) => {
		axios
			.put(
				`http://localhost:8080/api/user/question/updateAsApprovedQuestion/${id}`
			)
			.then((response) => {
				setListOfQuestion(
					listOfQuestion.filter((val) => {
						return val.id !== id;
					})
				);
				setNewsDetail(
					<p className="">
						---------------------------------------&#128513; That Question Put
						to Approved Status &#128513; ---------------------------------------
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
								alt="Question Image"
								src={"http://localhost:8080\\" + value.image}
								className="styleImage"
								style={{ width: "490px" }}
							/>
							<div class="overlayImage">
								<p style={{ fontSize: "18px" }}>{value.text}</p>
								<div className="date" style={{ fontSize: "15px" }}>
									Date : {value.createdAt.split("T")[0]}
								</div>
								<button
									className="button bunRemove fa fa-check , pull-right"
									style={{
										width: "100px",
										height: "25px",
										marginTop: "20px",
										backgroundColor: "green",
									}}
									title="to approved status?"
									onClick={() => {
										if (
											window.confirm(
												"Are you sure you wish to add that Question to approved status?"
											)
										)
											approvedQuestion(value.id);
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

export default QuestionReject;
