import axios from "axios";
import React, { useState, useEffect } from "react";

function CreatePQ() {
	// for post
	const [categoryVal, setCategory] = useState("");
	const [image, setImage] = useState();
	const [text, setText] = useState("");

	//for utility
	const [preview, setPreview] = useState();
	const [category, showCategory] = useState(true);
	const [showDetail, setShowDetail] = useState("");

	//----------------------------Image Preview-------------------------------------
	useEffect(() => {
		if (!image) {
			setPreview(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(image);
		setPreview(objectUrl);

		return () => URL.revokeObjectURL(objectUrl);
	}, [image]);

	const onSelectFile = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setImage(undefined);
			return;
		}

		setImage(e.target.files[0]);
	};

	
	const createPost = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append("image", image);
		formData.append("category", categoryVal);
		formData.append("text", text);

		await axios
			.post("http://localhost:8080/api/user/post/createPost", formData)
			.then(({ formData }) => {
				setShowDetail(
					<p>
						--------------------------------------- Post Sent for admin approval
						---------------------------------------
					</p>
				);
			})
			.catch((err) => {
				setShowDetail(
					<p>----------------- {err.response.data.message} -----------------</p>
				);
			});
	};
	const createQuestion = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append("image", image);
		formData.append("text", text);

		await axios
			.post("http://localhost:8080/api/user/question/createQuestion", formData)
			.then(({ formData }) => {
				setShowDetail(
					<p>
						--------------------------------------- Question Created &#9989;
						---------------------------------------
					</p>
				);
			})
			.catch((err) => {
				setShowDetail(
					<p>----------------- {err.response.data.message} -----------------</p>
				);
			});
	};
	//------------------------------------------------------------------------------------------
	return (
		<div>
			<div>
				<h1 className="mainTopic">Create Post or Question</h1>
				<div>
					<h4 style={{ textAlign: "center", color: "green" }}>{showDetail}</h4>
				</div>
				<form method="POST" encType="multipart/form-data">
					<div className="mainSelectPQ">
						<div>
							<input
								type="radio"
								name="PorQ"
								value="Post"
								onClick={() => showCategory(true)}
							/>
							<label>Post</label>
						</div>
						<div>
							{category ? (
								<select onChange={(e) => setCategory(e.target.value)}>
									<option selected disabled>
										Category
									</option>
									<option value="Maths Science">Maths Science</option>
									<option value="ICT">ICT</option>
									<option value="Bio Tech">Bio Tech</option>
									<option value="Civil Tech">Civil Tech</option>
									<option value="Mechanical">Mechanical</option>
									<option value="Other">Other</option>
								</select>
							) : null}
						</div>
						<div>
							<input
								type="radio"
								name="PorQ"
								value="Question"
								onClick={() => showCategory(false)}
							/>
							<label>Question</label>
						</div>
					</div>
					<div className="PQContainer">
						<div className="PQimgSelect">
							<div className="PQimageSelect">
								<label>Upload Image</label>
								<input
									type="file"
									accept="image/png, image/jpeg"
									name="image"
									onChange={onSelectFile}
								/>
							</div>
							<div>{image && <img className="viewImage" src={preview} />}</div>
						</div>
						<div className="PQimgText">
							<textarea
								placeholder="Leave a text here"
								value={text}
								onChange={(e) => setText(e.target.value)}
								required
							/>
						</div>
					</div>
					<button className="BtnPost" onClick={createQuestion}>
						Create Question
					</button>
					{category ? (
						<button className="BtnPost" onClick={createPost}>
							Create Post
						</button>
					) : null}
				</form>
			</div>
		</div>
	);
}

export default CreatePQ;
