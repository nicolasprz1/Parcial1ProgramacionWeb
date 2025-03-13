import React, { useState } from 'react';
import Login from './components/login';
import Home from './components/Home';
import Detail from './components/Detalle';

function App() {
  const [screen, setScreen] = useState('login');
  const [detailData, setDetailData] = useState(null);

  // Cuando el login es exitoso
  const handleLoginSuccess = () => {
    setScreen('home');
  };

  // Seleccionar un item para ver detalle
  const handleSelectDetail = (detail) => {
    setDetailData(detail);
    setScreen('detail');
  };

  // Volver de la pantalla detalle a home
  const handleBack = () => {
    setDetailData(null);
    setScreen('home');
  };

  return (
    <div>
      {screen === 'login' && (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}

      {screen === 'home' && (
        <Home onSelectDetail={handleSelectDetail} />
      )}

      {screen === 'detail' && (
        <Detail detailData={detailData} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
