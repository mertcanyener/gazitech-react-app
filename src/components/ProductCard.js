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

  // Scroll pozisyonunu sıfırla
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              className="btn btn-light btn-sm me-2 btn-shimmer"
              title="Detayları Gör"
              onClick={handleLinkClick}
            >
              <i className="bi bi-eye me-1"></i>
              <span className="d-none d-md-inline">Gör</span>
            </Link>
            <a
              href={createWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-sm btn-shimmer"
              title="WhatsApp'tan Sor"
            >
              <i className="bi bi-whatsapp me-1"></i>
              <span className="d-none d-md-inline">Sor</span>
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
              className="btn btn-outline-burgundy btn-sm btn-shimmer"
              onClick={handleLinkClick}
            >
              <i className="bi bi-eye me-1"></i>
              Detayları Gör
            </Link>
            <a
              href={createWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-burgundy btn-sm btn-shimmer"
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
