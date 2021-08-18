import { useState } from "react";
import { getUserData } from "./utils/api";
import UserResult from './components/userResult'
import "./App.css";

function App() {
  const [username, setUsername] = useState(null);
  const [userResult, setUserResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserData(username).then((user) => {
      setUserResult(user)
    });
  };

  if (userResult !== null) {
    return <UserResult userResult={userResult} />;
  } else {
    return (
      <div className="App">
        <div className="content-wrapper">
          <div className="app-title">
            <span className="main">GitHub</span>{" "}
            <span className="secondary">User Lookup</span>
          </div>
          <div className="search-wrapper">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="search"
                placeholder="Github username..."
                onChange={(e) => setUsername(e.target.value)}
                value={username !== null ? username : ""}
                id="search"
              />
              <button type="submit" name="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
