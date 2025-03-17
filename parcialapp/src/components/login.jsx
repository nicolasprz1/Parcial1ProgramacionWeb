// src/components/Login.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Login({ onLoginSuccess }) {
  const { t, i18n } = useTranslation();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de 6 o 7 caracteres
    if (password.length < 6 || password.length > 7) {
      setErrorMsg(t('passwordError'));
      return;
    }
    setErrorMsg('');
    onLoginSuccess();
  };

  return (
    <div style={styles.container}>
      {/* Botones para cambiar idioma, ubicados en la esquina */}
      <div style={styles.languageSwitch}>
        <button onClick={() => i18n.changeLanguage('es')}>ES</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>

      {/* Columna izquierda: Imagen + branding */}
      <div style={styles.leftSide}>
        <div style={styles.brandContainer}>
          <h2 style={{ marginBottom: '10px' }}>{t('brandTitle')}</h2>
          <p style={{ fontStyle: 'italic' }}>{t('brandSubtitle')}</p>
          <img
            src="https://www.laachicoria.es/wp-content/uploads/plato_perfecto_destacada.jpg"
            alt="Comida"
            style={styles.leftImage}
          />
        </div>
      </div>

      {/* Columna derecha: Formulario de Login */}
      <div style={styles.rightSide}>
        <h1 style={{ marginBottom: '20px' }}>{t('loginTitle')}</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            {t('usernameLabel')}
            <input
              type="text"
              placeholder={t('usernamePlaceholder')}
              style={styles.input}
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>

          <label style={styles.label}>
            {t('passwordLabel')}
            <input
              type="password"
              placeholder={t('passwordPlaceholder')}
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {/* Mostrar error si existe */}
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

          <button type="submit" style={styles.loginButton}>
            {t('loginButton')}
          </button>

          <p style={{ marginTop: '10px' }}>
            <a href="#!" style={{ color: '#fff' }}>{t('forgotPasswordLink')}</a>
          </p>
        </form>
      </div>
    </div>
  );
}

// Estilos en línea (misma estructura, con un contenedor principal a dos columnas)
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'sans-serif',
    position: 'relative' // Para ubicar languageSwitch con position absolute
  },
  languageSwitch: {
    position: 'absolute',
    top: '10px',
    right: '10px'
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
