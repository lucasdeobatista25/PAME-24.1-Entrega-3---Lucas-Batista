import React, { useState } from 'react';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simular um login ou registro
    alert(`${isRegister ? 'Registering' : 'Logging in'} as ${username}`);
  };

  return (
    <div>
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
      </button>
    </div>
  );
}

export default LoginPage;
