// src/components/Home.jsx
import React from 'react';
// Opcional: Usa react-icons (o SVGs propios)
import { FaUtensils, FaStore, FaShoppingCart } from 'react-icons/fa';
import './Home.css'; // Asegúrate de que la ruta sea correcta

function Home() {
  return (
    <div className="home-container">
      {/* Card oscura con íconos */}
      <div className="home-card">
        <div className="icon-box">
          <FaUtensils size={60} />
          <h3>Menu</h3>
        </div>
        <div className="icon-box">
          <FaStore size={60} />
          <h3>Stores</h3>
        </div>
        <div className="icon-box">
          <FaShoppingCart size={60} />
          <h3>Cart</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
