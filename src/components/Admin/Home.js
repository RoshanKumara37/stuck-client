import React from "react";

import "./adminStyle.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//---------- import pages from other components ----------
import NewsView from "./NewsView";

import PostApprove from "./PostApprove";
import PostPending from "./PostPending";
import PostReject from "./PostReject";
import QuestionApprove from "./QuestionApprove";
import QuestionReject from "./QuestionReject";
import NewsCreate from "./NewsCreate";
import UserProfile from "./UserProfile";
import AdminProfile from "./AdminProfile";

//---------- import png icon for nav bar ----------
import iconAdmin from "../Admin/image/Admin.png";
import iconNews from "../Admin/image/News.png";
import iconPostApprove from "../Admin/image/PostApprove.png";
import iconPostPending from "../Admin/image/PostPending.png";
import iconPostReject from "../Admin/image/PostReject.png";
import iconProfile from "../Admin/image/Profile.png";
import iconQuestionApprove from "../Admin/image/QuestionApprove.png";
import iconQuestionReject from "../Admin/image/QuestionReject.png";
import iconLogOut from "../Admin/image/LogOut.png";
import logo from "../Admin/image/Logo.png";

function Home() {
	return (
		<React.Fragment>
			<Router>
				{/* -------- main Navigation Bar -------- */}
				<div className="adNavbar">
					<img src={logo} alt="Logo" className="logo-image" />
					<div className="search-box">
						<button className="btn-search">
							<i className="fa fa-search" />
						</button>
						<input
							type="text"
							className="input-search"
							placeholder="Type to Search..."
						/>
					</div>
					<a className="notification" href="/">
						<div className="notificationicon">
							<p>Notification</p>
							<i className="fa fa-bell" />
						</div>
					</a>
				</div>
				{/* -------- Side bar -------- */}
				<div className="adSidebar">
					<a className="" href="/">
						<div className="icon-image">
							<img
								src={iconPostApprove}
								alt="Post Approve"
								title="Post Approve"
							/>
						</div>
					</a>
					<a className="" href="/PostPending">
						<div className="icon-image">
							<img
								src={iconPostPending}
								alt="Post Pending"
								title="Post Pending"
							/>
						</div>
					</a>
					<a className="" href="/PostReject">
						<div className="icon-image">
							<img
								src={iconPostReject}
								alt="Post Reject"
								title="Post Pending"
							/>
						</div>
					</a>
					<a className="" href="/QuestionApprove">
						<div className="iconimage">
							<img
								src={iconQuestionApprove}
								alt="Question Approve"
								title="Question Approve"
							/>
						</div>
					</a>
					<a className="" href="/QuestionReject">
						<div className="iconimage">
							<img
								src={iconQuestionReject}
								alt="Question Reject"
								title="Question Reject"
							/>
						</div>
					</a>
					<a className="" href="/NewsCreate">
						<div className="icon-image">
							<img src={iconNews} alt="News Create" title="News Create" />
						</div>
					</a>
					<a className="" href="/UserProfile">
						<div className="icon-image">
							<img src={iconProfile} alt="User Profile" title="User Profile" />
						</div>
					</a>
					<a className="" href="/AdminProfile">
						<div className="icon-image">
							<img src={iconAdmin} alt="Admin Profile" title="Admin Profile" />
						</div>
					</a>
					<a className="" href="/">
						<div className="icon-image">
							<img src={iconLogOut} alt="Log Out" title="Log Out" />
						</div>
					</a>
				</div>
				<div className="adContainer">
					<Switch>
						<div className="adMainContiner">
							<Route exact path="/">
								<PostApprove />
							</Route>
							<Route path="/PostPending">
								<PostPending />
							</Route>
							<Route exact path="/PostReject">
								<PostReject />
							</Route>
							<Route exact path="/QuestionApprove">
								<QuestionApprove />
							</Route>
							<Route exact path="/QuestionReject">
								<QuestionReject />
							</Route>

							<Route path="/NewsCreate">
								<NewsCreate />
							</Route>
							<Route path="/UserProfile">
								<UserProfile />
							</Route>
							<Route path="/AdminProfile">
								<AdminProfile />
							</Route>
						</div>
					</Switch>
					<div className="adNewsPannel">
						<NewsView />
					</div>
				</div>
			</Router>
		</React.Fragment>
	);
}

export default Home;
