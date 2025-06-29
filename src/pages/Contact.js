import React from 'react';

function Contact() {

  return (
    <div className="contact-page">
      {/* Sayfa Başlığı */}
      <div className="page-header text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">İletişim</h1>
        <p className="lead text-muted">Gazitech mağazamıza ulaşın, sorularınızı sorun</p>
      </div>

      {/* Google Harita */}
      <div className="map-section mb-5">
        <h3 className="text-center mb-4">📍 Mağaza Konumumuz</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=Gazi+Tech,+Gazimağusa+99450,+KKTC&output=embed&z=15"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            title="Gazi Tech Konum"
            className="shadow-soft"
          ></iframe>
        </div>
      </div>

      {/* İletişim Bilgileri */}
      <div className="row justify-content-center">
        {/* İletişim Bilgileri */}
        <div className="col-lg-8">
          <h3 className="mb-4">📞 İletişim Bilgileri</h3>

          {/* İletişim Kartları */}
          <div className="contact-cards">
            {/* Adres Kartı */}
            <div className="contact-card mb-3">
              <div className="contact-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="contact-info">
                <h5>Mağaza Adresi</h5>
                <p>Gazi Tech, Gazimağusa 99450<br/>Kuzey Kıbrıs Türk Cumhuriyeti</p>
              </div>
            </div>

            {/* Telefon Kartı */}
            <div className="contact-card mb-3">
              <div className="contact-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="contact-info">
                <h5>Telefonla Ara</h5>
                <a href="tel:+905338448804" className="btn btn-burgundy btn-sm btn-shimmer">
                  <i className="bi bi-telephone me-2"></i>
                  +90 533 844 88 04
                </a>
              </div>
            </div>

            {/* WhatsApp Kartı */}
            <div className="contact-card mb-3">
              <div className="contact-icon">
                <i className="bi bi-whatsapp"></i>
              </div>
              <div className="contact-info">
                <h5>WhatsApp'a Yaz</h5>
                <a
                  href="https://wa.me/905338448804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm btn-shimmer"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Hemen Mesaj Gönder
                </a>
              </div>
            </div>


          </div>

          {/* Açılış Saatleri */}
          <div className="opening-hours mt-4">
            <h4 className="mb-3">🕒 Açılış Saatleri</h4>
            <div className="hours-table">
              <div className="hours-row">
                <span className="day">Pazartesi - Cuma</span>
                <span className="time">09:00 - 19:00</span>
              </div>
              <div className="hours-row">
                <span className="day">Cumartesi</span>
                <span className="time">10:00 - 17:00</span>
              </div>
              <div className="hours-row closed">
                <span className="day">Pazar</span>
                <span className="time">Kapalı</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
