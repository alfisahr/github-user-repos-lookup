import { FaRegBuilding, FaLink, FaMapMarker, FaRegStar, FaArrowLeft } from "react-icons/fa";

const UserResult = ({ userResult, clearHandler }) => {
	console.log(userResult);
	const { profile, repos } = userResult;

	return (
		<div className="content-wrapper">
			<div className="container header-section">
				<div className="icon-top"><button onClick={clearHandler}><FaArrowLeft /></button></div>
				<div className="app-name"><span className="main">GitHub</span> <span className="secondary">User Lookup</span></div>
			</div>
			<div className="container content-section">
				<div className="sidebar">
					<div className="profile">
						<div className="thumb">
							<img src={profile.avatar_url} alt={profile.name} />
						</div>
						<h2 className="name">{profile.name}</h2>
						<div className="user-login">@{profile.login}</div>
						{profile.bio !== null ? <p className="bio">{profile.bio}</p> : ''}
						{profile.company !== null ? <div className="company"><FaRegBuilding /> {profile.company}</div> : ''}
						{profile.blog !== null ? <div className="blog"><FaLink /> {profile.blog}</div> : ''}
						{profile.location !== null ? <div className="location"><FaMapMarker /> {profile.location}</div> : ''}
					</div>
				</div>
				<div className="content">
					<ul className="repos-list">
						{repos &&
							repos.map((repo, i) => {
								return (
									<li key={i}>
										<h3 className="repo-name">
											<a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
										</h3>
										<p className="desc">
											{repo.description}
										</p>
										<div className="stats">
											{repo.language !== null ? <div className="language">{repo.language}</div> : ''}
											<div className="star">
												<FaRegStar />{" "}
												{repo.stargazers_count}
											</div>
											<div className="updated">
												Updated at {repo.updated_at}
											</div>
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default UserResult;
