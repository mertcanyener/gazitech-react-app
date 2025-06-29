import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  // Scroll pozisyonunu sıfırla
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-burgundy">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
          <i className="bi bi-cpu me-2"></i>
          GaziTech
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item mx-1">
              <NavLink
                className={({isActive}) =>
                  isActive
                    ? "nav-link custom-nav-link active"
                    : "nav-link custom-nav-link"
                }
                to="/"
                onClick={handleLinkClick}
              >
                <i className="bi bi-house me-1"></i>
                Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className={({isActive}) =>
                  isActive
                    ? "nav-link custom-nav-link active"
                    : "nav-link custom-nav-link"
                }
                to="/products"
                onClick={handleLinkClick}
              >
                <i className="bi bi-grid me-1"></i>
                Ürünler
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className={({isActive}) =>
                  isActive
                    ? "nav-link custom-nav-link active"
                    : "nav-link custom-nav-link"
                }
                to="/vision-mission"
                onClick={handleLinkClick}
              >
                <i className="bi bi-eye me-1"></i>
                Vizyon Misyon
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink
                className={({isActive}) =>
                  isActive
                    ? "nav-link custom-nav-link active"
                    : "nav-link custom-nav-link"
                }
                to="/contact"
                onClick={handleLinkClick}
              >
                <i className="bi bi-envelope me-1"></i>
                İletişim
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
