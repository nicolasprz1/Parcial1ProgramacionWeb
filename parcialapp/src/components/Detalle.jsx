// src/components/Detail.jsx
import React from 'react';

/*
  Espera un objeto "detailData" con la forma:
    {
      type: 'restaurant' | 'menu',
      data: {...}
    }
  El data es la info del restaurante o del menú.
*/
function Detail({ detailData, onBack }) {
  if (!detailData) {
    return <div style={{ padding: '20px' }}>No hay detalle para mostrar.</div>;
  }

  const { type, data } = detailData;

  // Generamos 3 URLs aleatorias para la galería
  const randomImages = [
    `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`,
    `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`,
    `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
  ];

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={onBack}>Volver</button>
      
      <h2>Detalle {type === 'restaurant' ? 'del Restaurante' : 'del Producto'}</h2>

      <div style={styles.infoSection}>
        {/* Nombre / título */}
        <h3>{type === 'restaurant' ? data.name : data.productName}</h3>
        {/* Descripción / precio */}
        {type === 'restaurant' && <p>{data.description}</p>}
        {type === 'menu' && <p>Precio: ${data.price}</p>}
        
        {/* Imagen principal */}
        <img 
          src={data.image} 
          alt={type === 'restaurant' ? data.name : data.productName}
          style={{ width: '300px', height: '200px', objectFit: 'cover' }}
        />
      </div>
      
      <h3>Galería de Fotos</h3>
      <div style={styles.gallery}>
        {randomImages.map((url, idx) => (
          <img 
            key={idx} 
            src={url} 
            alt={`random${idx}`} 
            style={{ width: '200px', height: '150px', objectFit: 'cover' }}
          />
        ))}
      </div>

      {/* Ejemplo: Si deseas un carrito, un botón de agregar, etc. */}
      {type === 'menu' && (
        <div style={{ marginTop: '20px' }}>
          <button style={styles.buyBtn}>Agregar al Carrito</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px'
  },
  backBtn: {
    marginBottom: '10px'
  },
  infoSection: {
    marginBottom: '20px'
  },
  gallery: {
    display: 'flex',
    gap: '10px'
  },
  buyBtn: {
    padding: '10px 20px',
    cursor: 'pointer'
  }
};

export default Detail;
