import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PlayButton from "./features/PlayButton";
import Login from "./features/Login";
import Profile from "./features/Profile";

import './App.css';
import Main from './features/quiz/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <h1>JAHM Pokemon Quiz</h1>
          <Link to="/">Home</Link> {" | "}
          <Link to="/profile">Profile</Link>
        </div>

        <div className='testArea'>
          <Main />
          <PlayButton />

        </div>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
