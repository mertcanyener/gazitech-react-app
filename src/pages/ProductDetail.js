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
            src={product.image || 'https://via.placeholder.com/500x500?text=Ürün+Görseli'}
            alt={product.name}
            className="img-fluid product-detail-image"
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'contain',
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/500x500?text=Ürün+Görseli';
            }}
          />
        </div>
        <div className="col-md-7 mb-4">
          <h1 className="product-title">{product.name}</h1>

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
        <h3 className="mb-4">Benzer Ürünler</h3>
        <div className="row">
          {products
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 4)
            .map(p => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={p.id}>
                <div className="card h-100 similar-product-card">
                  <div className="similar-product-image">
                    <img
                      src={p.image || 'https://via.placeholder.com/200x200?text=Ürün+Görseli'}
                      className="card-img-top"
                      alt={p.name}
                      style={{
                        objectFit: 'contain',
                        background: 'white',
                        padding: '15px',
                        height: '200px'
                      }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200x200?text=Ürün+Görseli';
                      }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title mb-3">{p.name}</h6>
                    <div className="mt-auto">
                      <Link
                        to={`/products/${p.id}`}
                        className="btn btn-outline-burgundy btn-sm w-100"
                      >
                        <i className="bi bi-eye me-1"></i>
                        Detayları Gör
                      </Link>
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
