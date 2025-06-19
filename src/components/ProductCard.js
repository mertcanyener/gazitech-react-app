import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  // Kategori renklerini belirle
  const categoryColors = {
    'iphone15series': 'danger',
    'iphone16series': 'danger',
    'ipad': 'primary',
    'macbook': 'success',
    'watch': 'info',
    'airpods': 'warning',
    'accessory': 'secondary'
  };

  const categoryColor = categoryColors[product.category] || 'primary';

  return (
    <div className="card h-100 product-card">
      <div className="position-relative">
        <img 
          src={product.image || 'https://via.placeholder.com/300x300'} 
          className="card-img-top" 
          alt={product.name}
          onError={(e) => {e.target.src = 'https://via.placeholder.com/300x300?text=Ürün+Görseli'}}
        />
        {product.isNew && (
          <span className="badge bg-success position-absolute top-0 start-0 m-2">Yeni</span>
        )}
        <span className={`badge bg-${categoryColor} position-absolute top-0 end-0 m-2`}>
          {product.categoryName}
        </span>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted small">{product.shortDescription}</p>
        <p className="card-price mt-auto">{product.price.toLocaleString('tr-TR')} ₺</p>
        <Link to={`/products/${product.id}`} className="btn btn-outline-primary mt-2">
          Detayları Gör
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
