import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>GaziTech</h5>
            <p className="text-muted">
              En kaliteli teknoloji ürünleri ve aksesuarları uygun fiyatlarla.
            </p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Hızlı Erişim</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-muted">Ana Sayfa</Link></li>
              <li><Link to="/products" className="text-decoration-none text-muted">Ürünler</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-muted">İletişim</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>İletişim</h5>
            <ul className="list-unstyled text-muted">
              <li><i className="bi bi-geo-alt"></i> KKTC Gazimağusa 99450</li>
              <li><i className="bi bi-telephone"></i> +90 533 844 88 04</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center text-muted">
          <small>&copy; {new Date().getFullYear()} GaziTech. Tüm hakları saklıdır.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
