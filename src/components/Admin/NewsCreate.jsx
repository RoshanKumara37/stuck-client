import axios from "axios";
import React, { useState, useEffect } from "react";

const NewsCreate = ({ history }) => {
	const [title, setTitle] = useState("");
	const [newsDetail, setNewsDetail] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState();
	const [preview, setPreview] = useState();

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
	//------------------------------------------------------------------------------------------
	const addNewsHandler = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append("image", image);
		formData.append("title", title);
		formData.append("description", description);

		await axios
			.post("http://localhost:8080/api/admin/createNews", formData)
			.then(({ formData }) => {
				setNewsDetail(
					<p className="">
						--------------------------------------- News Created &#9989;
						---------------------------------------
					</p>
				);
			})
			.catch((err) => {
				setNewsDetail(console.log(err));
			});
		//history.push("/News");
	};

	return (
		<div>
			<div className="adCreateNews">
				<h1 className="mainTopic">Add News</h1>
				<div className="">
					<h4>{newsDetail}</h4>
				</div>
				<hr />

				<form
					onSubmit={addNewsHandler}
					method="POST"
					encType="multipart/form-data"
				>
					<div className="newsContainer">
						<div className="imageContain">
							<div className="imgText">
								<label>Upload Image</label>
								<input
									type="file"
									accept="image/png, image/jpeg"
									name="image"
									required
									onChange={onSelectFile}
								/>
							</div>
							<div>{image && <img className="imgPreview" src={preview} />}</div>
						</div>
						<div className="textContain">
							<div>
								<input
									required
									type="text"
									title="Add your title here"
									placeholder="Add your title here"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>

							<div>
								<textarea
									placeholder="Add your description here"
									title="Add your description here"
									value={description}
									required
									onChange={(e) => setDescription(e.target.value)}
									as="textarea"
								/>
							</div>
						</div>
					</div>
					<button
						type="submit"
						className="button bunRemove"
						style={{
							width: "500px",
							height: "40px",
							marginLeft: "13%",
							marginTop: "10px",
							backgroundColor: "green",
							fontSize: "1.5em",
						}}
					>
						Crate News
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewsCreate;
