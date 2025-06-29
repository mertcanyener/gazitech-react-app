import React from 'react';

function VisionMission() {
  return (
    <div className="vision-mission-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-burgundy mb-3">Vizyon & Misyon</h1>
              <p className="lead text-muted">
                Teknoloji dünyasında güvenin ve kalitenin adresi
              </p>
            </div>

            <div className="row g-4">
              {/* Vizyonumuz */}
              <div className="col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <div className="vision-icon mb-3">
                        <i className="bi bi-eye text-burgundy" style={{fontSize: '3rem'}}></i>
                      </div>
                      <h2 className="h3 fw-bold text-burgundy">Vizyonumuz</h2>
                    </div>
                    <p className="text-muted lh-lg">
                      Teknolojinin hızla değiştiği günümüzde, Gazitech.store olarak vizyonumuz; 
                      her bireyin en güncel ve güvenilir teknolojiye zahmetsizce ulaşabildiği, 
                      müşteri memnuniyetinin her şeyin önünde tutulduğu bir alışveriş deneyimi sunmaktır.
                    </p>
                    <p className="text-muted lh-lg">
                      2018 yılından bu yana teknoloji alanındaki gelişmeleri yakından takip ederek, 
                      hem ürün yelpazemizi hem de hizmet kalitemizi sürekli ileriye taşımayı hedefliyoruz.
                    </p>
                  </div>
                </div>
              </div>

              {/* Misyonumuz */}
              <div className="col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <div className="mission-icon mb-3">
                        <i className="bi bi-graph-up-arrow text-burgundy" style={{fontSize: '3rem'}}></i>
                      </div>
                      <h2 className="h3 fw-bold text-burgundy">Misyonumuz</h2>
                    </div>
                    <p className="text-muted lh-lg">
                      Kurulduğumuz günden bu yana önceliğimiz; dürüstlük, kalite ve müşteri memnuniyeti 
                      ilkelerinden ödün vermeden, 10.000'den fazla başarılı satışla her bir müşterimizin 
                      güvenini kazanmak oldu.
                    </p>
                    <p className="text-muted lh-lg">
                      Misyonumuz; her bütçeye uygun, orijinal ve garantili teknoloji ürünlerini 
                      erişilebilir kılmak, satış sonrası destekle müşterilerimizin yanında olmak ve 
                      sektörde güvenin adresi haline gelmektir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* İstatistikler */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="bg-light rounded p-4">
                  <div className="row text-center">
                    <div className="col-md-4 mb-3">
                      <div className="stat-item">
                        <h3 className="display-6 fw-bold text-burgundy">2018</h3>
                        <p className="text-muted mb-0">Kuruluş Yılı</p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="stat-item">
                        <h3 className="display-6 fw-bold text-burgundy">10.000+</h3>
                        <p className="text-muted mb-0">Başarılı Satış</p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="stat-item">
                        <h3 className="display-6 fw-bold text-burgundy">%100</h3>
                        <p className="text-muted mb-0">Müşteri Memnuniyeti</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Değerlerimiz */}
            <div className="row mt-5">
              <div className="col-12">
                <h3 className="text-center fw-bold text-burgundy mb-4">Değerlerimiz</h3>
                <div className="row g-3">
                  <div className="col-md-3 col-6">
                    <div className="text-center p-3">
                      <i className="bi bi-shield-check text-burgundy mb-2" style={{fontSize: '2rem'}}></i>
                      <h6 className="fw-bold">Güvenilirlik</h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="text-center p-3">
                      <i className="bi bi-gem text-burgundy mb-2" style={{fontSize: '2rem'}}></i>
                      <h6 className="fw-bold">Kalite</h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="text-center p-3">
                      <i className="bi bi-heart text-burgundy mb-2" style={{fontSize: '2rem'}}></i>
                      <h6 className="fw-bold">Müşteri Odaklılık</h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="text-center p-3">
                      <i className="bi bi-lightning text-burgundy mb-2" style={{fontSize: '2rem'}}></i>
                      <h6 className="fw-bold">Yenilikçilik</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
