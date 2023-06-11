import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function NewsView() {
	const [listOfNews, setListOfNews] = useState([]);
	const [newsDetail, setNewsDetail] = useState("");

	useEffect(() => {
		axios.get("http://localhost:8080/api/admin/getNews").then((response) => {
			setListOfNews(response.data);
		});
	}, []);
	const deleteNews = (id) => {
		axios
			.delete(`http://localhost:8080/api/admin/deleteNews/${id}`)
			.then((response) => {
				setListOfNews(
					listOfNews.filter((val) => {
						return val.id !== id;
					})
				);
				setNewsDetail(
					<p>----------------&#9989; News Deleted &#9989; --------------</p>
				);
			});
	};
	return (
		<div>
			{listOfNews.map((value, key) => {
				return (
					<div
						className="imgContainer"
						style={{ width: "41rem", backgroundColor: "lightblue" }}
					>
						<div>
							<h4>{newsDetail}</h4>
						</div>
						<div key={key}>
							<img
								src={"http://localhost:8080\\" + value.image}
								className="styleImage"
								alt="News Image"
							/>

							<div class="overlayImage">
								<p style={{ fontSize: "25px" }}>{value.title}</p>
								<p style={{ fontSize: "18px" }}>{value.description}</p>
								<div className="date" style={{ fontSize: "15px" }}>
									Date : {value.createdAt.split("T")[0]}
								</div>
								<button
									className="button bunRemove fa fa-trash"
									title="Delete That News"
									style={{
										width: "100px",
										height: "25px",
										marginTop: "20px",
										backgroundColor: "red",
									}}
									onClick={() => {
										if (
											window.confirm(
												"Are you sure you wish to delete this news?"
											)
										)
											deleteNews(value.id);
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

export default NewsView;
