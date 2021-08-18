import {useState} from 'react';
import {getUserData} from '../utils/api'

const SearchLookup = () => {
	const [username, setUsername] = useState(null)

	const handleSubmit = (e) => {
		e.preventDefault();
		getUserData(username).then((user) => {
			console.log(user)
		})
	}
	return (
		<div className="search-wrapper">
		<form onSubmit={handleSubmit}>
			<input type="text" name="search" onChange={(e) => setUsername(e.target.value)} value={username !== null ? username : ''} id="search" />
			<button type="submit" name="submit">Search</button>
			</form>
		</div>
	);
};

export default SearchLookup;
