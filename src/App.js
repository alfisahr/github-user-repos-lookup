import { useState } from "react";
import { getUserData } from "./utils/api";
import UserResult from './components/userResult'
import "./App.css";

function App() {
  const [username, setUsername] = useState(null);
  const [userResult, setUserResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserData(username).then((user) => {
      setUserResult(user)
    })
    .catch((err) => {
      setErrorMsg(err.message)
    });
  };
  const handleClear = () => {
    setUserResult(null);
    setUsername(null)
  }

  if (userResult !== null) {
    return <div className="App"><UserResult userResult={userResult} clearHandler={handleClear} /></div>;
  } else {
    return (
      <div className="App center">
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
            {errorMsg !== null ? <p className="error">{errorMsg}</p> : ''}
        </div>
      </div>
    );
  }
}

export default App;
