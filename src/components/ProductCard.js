import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  // Açıklamayı kısalt (max 2 satır)
  const truncateDescription = (text, maxLength = 80) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // WhatsApp mesajı oluştur
  const createWhatsAppMessage = () => {
    const message = `Merhaba! ${product.name} ürünü hakkında bilgi almak istiyorum.`;
    return `https://wa.me/905338448804?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="modern-product-card">
      <div className="product-image-container">
        <img
          src={product.image || 'https://via.placeholder.com/300x300?text=Ürün+Görseli'}
          className="product-image"
          alt={product.name}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=Ürün+Görseli';
          }}
        />
        <div className="product-overlay">
          <div className="product-actions">
            <Link
              to={`/products/${product.id}`}
              className="btn btn-light btn-sm me-2"
              title="Detayları Gör"
            >
              <i className="bi bi-eye"></i>
            </Link>
            <a
              href={createWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-sm"
              title="WhatsApp'tan Sor"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="product-content">
        <h5 className="product-title">{product.name}</h5>
        <p className="product-description">
          {truncateDescription(product.description)}
        </p>

        <div className="product-footer">
          <div className="d-flex justify-content-between align-items-center">
            <Link
              to={`/products/${product.id}`}
              className="btn btn-outline-burgundy btn-sm"
            >
              Detayları Gör
            </Link>
            <a
              href={createWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-burgundy btn-sm"
            >
              <i className="bi bi-shop me-1"></i>
              Mağazada Gör
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
