const UserResult = ({userResult}) => {
	console.log(userResult)
	const {profile, repos} = userResult;
	return (
		<div className="container">
			<div className="sidebar">
				<div className="profile">
				<div className="thumb">
				<img src={profile.avatar_url} alt={profile.name} />
				</div>
				<h2 className="name">{profile.name}</h2>
				<div className="user-login">@{profile.login}</div>
				<p className="bio">{profile.bio}</p>
				</div>
			</div>
			<div className="content">
				<ul>
				{repos && repos.map((repo, i) => {
					return (
						<li key={i}>
							<h3 className="repo-name">{repo.name}</h3>
							<p className="desc">{repo.description}</p>
						</li>
						)
				})}
				</ul>
			</div>
		</div>
	);
};

export default UserResult;
