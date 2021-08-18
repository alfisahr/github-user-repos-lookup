const id = process.env.REACT_APP_CLIENT_ID;
const secret = process.env.REACT_APP_CLIENT_SECRET;
const params = `?client_id=${id}&client_secret=${secret}`;

function getErrorMsg(message, username) {
	if (message === "Not Found") {
		return `${username} doesn't exist`;
	}

	return message;
}

function getProfile(username) {
	return fetch(`https://api.github.com/users/${username}${params}`)
		.then((res) => res.json())
		.then((profile) => {
			if (profile.message) {
				throw new Error(getErrorMsg(profile.message, username));
			}

			return profile;
		});
}

export function getRepos(username, page) {
	return fetch(`https://api.github.com/users/${username}/repos${params}&per_page=10&page=${page}`)
	.then((res) => res.json())
		.then((repos) => {
			if (repos.message) {
				throw new Error(getErrorMsg(repos.message, username));
			}

			return repos;
		});
}

export function getUserData(username) {
	return Promise.all([
		getProfile(username),
		getRepos(username, 1)
	]).then(([profile,repos]) => ({
		profile,
		repos
	}))
}