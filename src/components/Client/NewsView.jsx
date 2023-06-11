import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function NewsView() {
	const [listOfNews, setListOfNews] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8080/api/admin/getNews").then((response) => {
			setListOfNews(response.data);
		});
	}, []);

	return (
		<div>
			{listOfNews.map((value, key) => {
				return (
					<div className="newsImgContainer">
						<div key={key}>
							<div className="newsImgText">
								<img
									src={"http://localhost:8080\\" + value.image}
									className="newsStyleImage"
									alt="News Image"
								/>
								<p>{value.description}</p>
							</div>

							<div class="newsOverlayImage">
								<h1>{value.title}</h1>

								<h6>Date : {value.createdAt.split("T")[0]}</h6>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default NewsView;
