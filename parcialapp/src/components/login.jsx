// src/components/Login.jsx
import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación (6-7 caracteres):
    if (password.length < 5 || password.length > 8) {
      setErrorMsg('La contraseña debe tener 5 o 8 caracteres.');
      return;
    }
    setErrorMsg('');
    onLoginSuccess(); // O la lógica que uses para cambiar de vista
  };

  return (
    <div style={styles.container}>
      {/* Izquierda: Imagen y branding */}
      <div style={styles.leftSide}>
        <div style={styles.brandContainer}>
          {/* Logo / Título */}
          <h2 style={{ marginBottom: '10px' }}>TOO GOOD TO GO</h2>
          <p style={{ fontStyle: 'italic' }}>Food Wasting Solution</p>
          {/* Imagen ejemplo */}
          <img
            src="https://www.laachicoria.es/wp-content/uploads/plato_perfecto_destacada.jpg"
            alt="Comida"
            style={styles.leftImage}
          />
        </div>
      </div>

      {/* Derecha: Formulario de Login */}
      <div style={styles.rightSide}>
        <h1 style={{ marginBottom: '20px' }}>Login</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Username
            <input
              type="text"
              placeholder="Enter your username"
              style={styles.input}
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {/* Si hay error, lo mostramos en rojo */}
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

          {/* Botón de Login */}
          <button type="submit" style={styles.loginButton}>
            Login
          </button>

          {/* Link de "Forgot Password?" */}
          <p style={{ marginTop: '10px' }}>
            <a href="#!" style={{ color: '#fff' }}>Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

// Estilos en JS
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'sans-serif',
  },
  leftSide: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSide: {
    flex: 1,
    backgroundColor: '#184c43',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandContainer: {
    textAlign: 'center',
    padding: '20px',
  },
  leftImage: {
    width: '400px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginTop: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    marginTop: '5px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '14px',
  },
  loginButton: {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#00b794',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
  },
};

export default Login;
