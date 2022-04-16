import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Profile from "./features/Profile";
import Login from "./features/components/account/login.js"
import Register from "./features/components/account/Register.js"
import Navbar from "./features/components/Navbar";
import Main from "./features/quiz/Main.js";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <h1>JAH Pokemon Quiz</h1>
          <Navbar/>
        </div>

        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/register' element={<Register/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
