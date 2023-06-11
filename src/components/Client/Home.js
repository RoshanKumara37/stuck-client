import React from "react";
import "./homeStyle.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//---------- import pages from other components ----------
import NewsView from "./NewsView";
import Post from "./Post";
import Question from "./Question";
import Notification from "./Notification";
import Profile from "./Profile";
import CreatePQ from "./CreatePQ";
//---------- import pages from filter components ----------
import BioTech from "./filterPost/BioTech";
import CivilTech from "./filterPost/CivilTech";
import ICT from "./filterPost/ICT";
import MathsScience from "./filterPost/MathsScience";
import Mechanical from "./filterPost/Mechanical";
import Other from "./filterPost/Other";

//---------- import png icon for nav bar ----------
import iconHome from "./image/Home.png";
import iconQA from "./image/Question.png";
import iconNotifi from "./image/Notifi.png";
import iconProfile from "./image/Profile.png";
import iconCreate from "./image/CreatePQ.png";
import iconLogOut from "./image/SignOut.png";
import logo from "./image/Logo.png";

function Home() {
	return (
		<React.Fragment>
			<div>
				<Router>
					{/* -------- main Navigation Bar -------- */}
					<div className="CNavbar">
						<img src={logo} alt="Logo" className="homeLogo" />
						<div className="search-boxC">
							<button className="btn-searchC">
								<i className="fa fa-search" />
							</button>
							<input
								type="text"
								className="input-searchC"
								placeholder="Type to Search..."
							/>
						</div>
						<a className="Cnotification" href="/Update">
							<div className="Cnotificationicon">
								<p>Updates</p>
								<i className="fa fa-globe" />
							</div>
						</a>
					</div>
					<div className="CFilterBar">
						<div className="filterBtnContainer">
							<a href="/" className="filterBtn active">
								all
							</a>
							<a href="/MathsScience" className="filterBtn">
								Maths Science
							</a>
							<a href="/ICT" className="filterBtn">
								ICT
							</a>
							<a href="/BioTech" className="filterBtn">
								Bio Tech
							</a>
							<a href="/CivilTech" className="filterBtn">
								Civil Tech
							</a>
							<a href="/Mechanical" className="filterBtn">
								Mechanical
							</a>
							<a href="/Other" className="filterBtn">
								Other
							</a>
						</div>
					</div>
					{/* -------- Side bar -------- */}
					<div className="CSidebar">
						<div>
							<a href="/">
								<div className="icon-image">
									<img src={iconHome} alt="Home" />
								</div>
							</a>
							<a href="/Question">
								<div className="icon-image">
									<img src={iconQA} alt="Question" />
								</div>
							</a>
							<a href="/Notification">
								<div className="icon-image">
									<img src={iconNotifi} alt="Notification" />
								</div>
							</a>
							<a href="/Profile">
								<div className="icon-image">
									<img src={iconProfile} alt="Profile" />
								</div>
							</a>
						</div>
						<div>
							<a href="/CreatePQ">
								<div className="icon-image">
									<img src={iconCreate} alt="Create P@Q" />
								</div>
							</a>
						</div>
						<div>
							<a href="/LogOut">
								<div className="icon-image">
									<img src={iconLogOut} alt="Log Out" />
								</div>
							</a>
						</div>
					</div>
					<div className="CliContainer">
						<Switch>
							<div className="CliMainContiner">
								<Route exact path="/">
									<Post />
								</Route>
								<Route path="/Question">
									<Question />
								</Route>
								<Route exact path="/Notification">
									<Notification />
								</Route>
								<Route path="/Profile">
									<Profile />
								</Route>
								<Route path="/CreatePQ">
									<CreatePQ />
								</Route>
								<Route path="/LogOut">
									<h1>Log Out</h1>
								</Route>
								{/* filter route */}
								<Route path="/BioTech">
									<h1>
										<BioTech />
									</h1>
								</Route>
								<Route path="/CivilTech">
									<h1>
										<CivilTech />
									</h1>
								</Route>
								<Route path="/ICT">
									<h1>
										<ICT />
									</h1>
								</Route>
								<Route path="/MathsScience">
									<h1>
										<MathsScience />
									</h1>
								</Route>
								<Route path="/Mechanical">
									<h1>
										<Mechanical />
									</h1>
								</Route>
								<Route path="/Other">
									<h1>
										<Other />
									</h1>
								</Route>
								<Route path="/Update">
									<h1>
										<NewsView />
									</h1>
								</Route>
							</div>
						</Switch>
						<div className="CliNewsPanel">
							<NewsView />
						</div>
					</div>
				</Router>
			</div>
		</React.Fragment>
	);
}

export default Home;
// https://www.youtube.com/watch?v=Ka3OQpwqxXA <-- Paging
