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
                  <i className="bi bi-geo-alt"></i> KKTC Gazimağusa 99450
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26084.194184994895!2d33.91440371789512!3d35.14566338093631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1767ca494d55%3A0x815f81b72f6e0261!2sGazima%C4%9Fusa%2099450%2C%20Kuzey%20K%C4%B1br%C4%B1s%20T%C3%BCrk%20Cumhuriyeti!5e0!3m2!1str!2str!4v1623164567890!5m2!1str!2str" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="GaziTech Konum"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
