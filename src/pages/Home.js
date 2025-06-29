import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function Home() {
  // Scroll pozisyonunu sıfırla
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Öne çıkan ürünler - belirli ürünleri göster
  const featuredProductIds = ['iphone16promax', 'airpodsprogen2', '20w_power_adapter'];
  const featuredProducts = products.filter(product => featuredProductIds.includes(product.id));

  return (
    <div>
      <div className="jumbotron bg-light p-5 rounded mb-4 hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">GaziTech'e Hoş Geldiniz</h1>
              <p className="lead">En yeni teknoloji ürünleri ve aksesuarları burada!</p>
              <Link to="/products" className="btn btn-burgundy btn-lg" onClick={handleLinkClick}>Ürünleri Keşfet</Link>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <img 
                src="/images/hero-image.jpg" 
                alt="Teknoloji Ürünleri" 
                className="img-fluid rounded animate__animated animate__fadeIn"
                onError={(e) => {e.target.src = 'https://via.placeholder.com/600x400?text=Teknoloji+Ürünleri'}}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="my-5 featured-products">
        <h2 className="text-center mb-4 featured-title">Öne Çıkan Ürünler</h2>
        <div className="row">
          {featuredProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/products" className="btn btn-outline-primary" onClick={handleLinkClick}>Tüm Ürünleri Gör</Link>
        </div>
      </section>

      <section className="my-5 bg-light p-4 rounded features-section">
        <h2 className="text-center mb-3 section-title">Neden Bizi Tercih Etmelisiniz?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3 feature-item">
            <div className="feature-icon mb-3">
              <i className="bi bi-award fs-1"></i>
            </div>
            <h4>Kaliteli Ürünler</h4>
            <p>Sadece en kaliteli ve güvenilir markaların ürünlerini sunuyoruz.</p>
          </div>
          <div className="col-md-4 mb-3 feature-item">
            <div className="feature-icon mb-3">
              <i className="bi bi-shield-check fs-1"></i>
            </div>
            <h4>Güvenilir Alışveriş</h4>
            <p>Güvenli ödeme sistemleri ve şeffaf politikalarımızla güvenle alışveriş yapın.</p>
          </div>
          <div className="col-md-4 mb-3 feature-item">
            <div className="feature-icon mb-3">
              <i className="bi bi-headset fs-1"></i>
            </div>
            <h4>7/24 Destek</h4>
            <p>Sorularınız için müşteri hizmetlerimiz her zaman yanınızda.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
