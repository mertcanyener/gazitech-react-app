import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="alert alert-warning" role="alert">
        Ürün bulunamadı. <Link to="/products">Tüm ürünlere dön</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="row">
        <div className="col-md-5 mb-4">
          <img 
            src={product.image || 'https://via.placeholder.com/500x500'} 
            alt={product.name} 
            className="img-fluid product-detail-image"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/500x500?text=Ürün+Görseli'}}
          />
        </div>
        <div className="col-md-7 mb-4">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">{product.price.toLocaleString('tr-TR')} ₺</p>
          
          <div className="product-description mb-4">
            <p>{product.description}</p>
          </div>
          
          <div className="product-specs mb-4">
            <h4>Teknik Özellikler</h4>
            <ul>
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          
          <div className="d-flex flex-wrap gap-3 mb-4">
            <div className="d-flex align-items-center">
              <span><i className="bi bi-shield-check"></i> 2 Yıl Garanti</span>
            </div>
            <div className="d-flex align-items-center">
              <span><i className="bi bi-box-seam"></i> Orijinal Ürün</span>
            </div>
          </div>
          
          <Link to="/products" className="btn btn-outline-secondary">
            <i className="bi bi-arrow-left me-2"></i>
            Ürünlere Dön
          </Link>
        </div>
      </div>
      
      <div className="mt-5">
        <h3>Benzer Ürünler</h3>
        <div className="row">
          {products
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 2)
            .map(p => (
              <div className="col-md-6 mb-4" key={p.id}>
                <div className="card h-100">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img 
                        src={p.image || 'https://via.placeholder.com/150x150'} 
                        className="img-fluid rounded-start h-100" 
                        alt={p.name}
                        style={{ objectFit: 'cover' }}
                        onError={(e) => {e.target.src = 'https://via.placeholder.com/150x150?text=Ürün+Görseli'}}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-price">{p.price.toLocaleString('tr-TR')} ₺</p>
                        <Link to={`/products/${p.id}`} className="btn btn-sm btn-outline-primary">
                          Detayları Gör
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
