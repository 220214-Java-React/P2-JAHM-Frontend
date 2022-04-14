import React, { useState } from 'react';


function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');


  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    if (password != confPassword) {
      console.log("password Not Match");
    } else {
      console.log('A form submitted with Username :"' + username);
    }
    e.preventDefault();
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h2> Register New Account</h2>
          <h3> Enter Info </h3>
          <label >
            Username:
          </label><br />
          <input type="text" value={username} required onChange={(e)=> { handleChange(e) }} /><br /> 
          <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <label>
            Confirm Password:
          </label><br />
          <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    
    </div>
  );
}

export default Register;