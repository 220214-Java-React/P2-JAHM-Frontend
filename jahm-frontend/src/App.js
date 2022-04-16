import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Profile from "./features/Profile";
import Login from "./features/components/account/login.js"
import './App.css';
import Navbar from "./features/components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <h1>JAH Pokemon Quiz</h1>
          <Navbar/>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/history' component={History} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
