import React from 'react';

function Contact() {
  return (
    <div>
      <h1 className="mb-4">İletişim</h1>
      
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-4">Bize Ulaşın</h5>
              
              <ul className="list-unstyled contact-info">
                <li className="mb-3">
                  <i className="bi bi-geo-alt"></i> Gazi Tech, Gazimağusa 99450
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone"></i> +90 533 844 88 04
                </li>
                <li className="mb-3">
                  <i className="bi bi-clock"></i> Pazartesi - Cumartesi: 10:00 - 20:00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-5">
        <h4 className="mb-3">Konum</h4>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps?q=Gazi+Tech,+Gazimağusa+99450,+KKTC&output=embed&z=15"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Gazi Tech Konum"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
