import React from 'react';

function About() {
  return (
    <div>
      <h1 className="mb-4">Hakkımızda</h1>
      
      <div className="row mb-5">
        <div className="col-md-6">
          <img 
            src="/images/store.jpg" 
            alt="AK Techno Store" 
            className="img-fluid rounded mb-3"
            onError={(e) => {e.target.src = 'https://via.placeholder.com/600x400?text=AK+Techno+Store'}}
          />
        </div>
        <div className="col-md-6">
          <h2>Biz Kimiz?</h2>
          <p>
            AK Techno Store, 2020 yılında teknoloji tutkunları tarafından kurulmuş, 
            müşterilerine en kaliteli teknoloji ürünlerini en uygun fiyatlarla sunmayı 
            hedefleyen bir e-ticaret platformudur.
          </p>
          <p>
            Müşteri memnuniyetini her zaman ön planda tutan firmamız, satış öncesi ve 
            sonrası destek hizmetleriyle de fark yaratmaktadır.
          </p>
        </div>
      </div>
      
      <div className="mb-5">
        <h2 className="mb-4">Misyonumuz</h2>
        <p>
          Teknoloji dünyasındaki en son yenilikleri müşterilerimize sunarak, 
          onların hayatlarını kolaylaştırmak ve teknoloji deneyimlerini 
          zenginleştirmek için çalışıyoruz.
        </p>
      </div>
      
      <div className="mb-5">
        <h2 className="mb-4">Vizyonumuz</h2>
        <p>
          Türkiye'nin lider teknoloji perakendecisi olmak ve müşterilerimize 
          her zaman en iyi hizmeti sunmak için sürekli kendimizi geliştiriyoruz.
        </p>
      </div>
      
      <div className="mb-5">
        <h2 className="mb-4">Ekibimiz</h2>
        <div className="row">
          <div className="col-md-4 mb-4 text-center">
            <img 
              src="/images/team1.jpg" 
              alt="Takım Üyesi" 
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              onError={(e) => {e.target.src = 'https://via.placeholder.com/150x150?text=Takım+Üyesi'}}
            />
            <h5>Ahmet Yılmaz</h5>
            <p className="text-muted">Kurucu & CEO</p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <img 
              src="/images/team2.jpg" 
              alt="Takım Üyesi" 
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              onError={(e) => {e.target.src = 'https://via.placeholder.com/150x150?text=Takım+Üyesi'}}
            />
            <h5>Kemal Demir</h5>
            <p className="text-muted">Teknoloji Direktörü</p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <img 
              src="/images/team3.jpg" 
              alt="Takım Üyesi" 
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              onError={(e) => {e.target.src = 'https://via.placeholder.com/150x150?text=Takım+Üyesi'}}
            />
            <h5>Ayşe Kaya</h5>
            <p className="text-muted">Müşteri İlişkileri Müdürü</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
