import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PlayButton from "./features/PlayButton";
import Login from './features/components/account/Login';
import Profile from "./features/Profile";

import './App.css';
import Register from './features/components/account/Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Login />
      <Register />
      <h1>JAHM Pokemon Quiz</h1>
      <Link to="/">Home</Link> {" | "}
      <Link to="/profile">Profile</Link>
    </div>


    <div className='testArea'>
      <PlayButton/>
    </div>
    <Routes>
      <Route path="login" element={<login />}/>
      
      <Route path="Profile" element={<Profile/>}/>
      
      <Route path='/history' component={History} />
      
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
