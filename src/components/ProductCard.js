import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
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
    <Link to={`/products/${product.id}`} className="text-decoration-none">
      <div className="card h-100 product-card">
        <div className="card-img-container">
          <img
            src={product.image || 'https://via.placeholder.com/300x300'}
            className="card-img-top"
            alt={product.name}
            onError={(e) => {e.target.src = 'https://via.placeholder.com/300x300?text=Ürün+Görseli'}}
          />
          <div className={`badge bg-${categoryColor} position-absolute top-0 end-0 m-2`}>
            {product.category}
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-price">{product.price.toLocaleString('tr-TR')} ₺</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
