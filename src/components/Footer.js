import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  // Scroll pozisyonunu sıfırla
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5><Link to="/" className="text-decoration-none text-white" onClick={handleLinkClick}>GaziTech</Link></h5>
            <p className="text-muted">
              En kaliteli teknoloji ürünleri ve aksesuarları uygun fiyatlarla.
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <h5>İletişim</h5>
            <ul className="list-unstyled text-muted">
              <li><i className="bi bi-geo-alt"></i> KKTC Gazimağusa 99450</li>
              <li><i className="bi bi-telephone"></i> +90 533 844 88 04</li>
              <li><Link to="/contact" className="text-decoration-none text-muted" onClick={handleLinkClick}><i className="bi bi-envelope"></i> Bize Ulaşın</Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center mb-3">
          <Link to="/vision-mission" className="text-decoration-none text-muted me-3" onClick={handleLinkClick}>
            <i className="bi bi-eye me-1"></i>Vizyon Misyon
          </Link>
          <Link to="/contact" className="text-decoration-none text-muted" onClick={handleLinkClick}>
            <i className="bi bi-envelope me-1"></i>İletişim
          </Link>
        </div>
        <div className="text-center text-muted">
          <small>&copy; {new Date().getFullYear()} GaziTech. Tüm hakları saklıdır. | En yeni teknoloji ürünleri için güvenilir adresiniz.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
