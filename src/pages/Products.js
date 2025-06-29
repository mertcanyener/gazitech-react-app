import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Scroll pozisyonunu sıfırla
  const handleScrollReset = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Yeni kategori yapısı - ürün türlerine göre ayrıştırılmış
  const categories = [
    { id: 'all', name: 'Tüm Ürünler', icon: 'bi-grid-3x3-gap' },
    { id: 'smartphone', name: 'Akıllı Telefon', icon: 'bi-phone' },
    { id: 'tablet', name: 'Tablet', icon: 'bi-tablet' },
    { id: 'laptop', name: 'Laptop', icon: 'bi-laptop' },
    { id: 'smartwatch', name: 'Akıllı Saat', icon: 'bi-smartwatch' },
    { id: 'headphones', name: 'Kulaklık', icon: 'bi-headphones' },
    { id: 'accessories', name: 'Aksesuarlar', icon: 'bi-collection' }
  ];

  // Kategori eşleştirme - mevcut ürün kategorilerini yeni kategorilere eşleştir
  const categoryMapping = {
    'iphone15series': 'smartphone',    // iPhone 15 serisi → Akıllı Telefon
    'iphone16series': 'smartphone',    // iPhone 16 serisi → Akıllı Telefon
    'ipad': 'tablet',                  // iPad serisi → Tablet
    'macbook': 'laptop',               // MacBook serisi → Laptop
    'watch': 'smartwatch',             // Apple Watch → Akıllı Saat
    'airpods': 'headphones',           // AirPods → Kulaklık
    'accessory': 'accessories'         // Gerçek aksesuarlar → Aksesuarlar
  };
  
  // Filtreleme fonksiyonu
  const filteredProducts = products.filter(product => {
    // Arama terimi kontrolü
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Kategori kontrolü
    const productMappedCategory = categoryMapping[product.category] || 'accessories';
    const matchesCategory = selectedCategory === 'all' || productMappedCategory === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="products-page">
      {/* Başlık ve Açıklama */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-burgundy mb-3">Ürün Kataloğumuz</h1>
        <p className="lead text-muted">
          Teknolojinin en yeni ürünlerini keşfedin. Mağazamızda incelemek için bizimle iletişime geçin.
        </p>
      </div>

      {/* Arama Kutusu */}
      <div className="row justify-content-center mb-4">
        <div className="col-lg-6 col-md-8">
          <div className="search-box position-relative">
            <input
              type="text"
              className="form-control form-control-lg ps-5"
              placeholder="Ürün ismine göre ara..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
          </div>
        </div>
      </div>

      {/* Kategori Filtreleri */}
      <div className="category-filters mb-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`btn category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <i className={`${category.icon} me-2`}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ürün Sonuçları */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          <div className="row g-4">
            {filteredProducts.map(product => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products text-center py-5">
            <div className="mb-4">
              <i className="bi bi-search text-muted" style={{fontSize: '4rem'}}></i>
            </div>
            <h4 className="text-muted mb-3">Ürün Bulunamadı</h4>
            <p className="text-muted">
              {searchTerm ?
                `"${searchTerm}" aramanız için sonuç bulunamadı.` :
                'Bu kategoride henüz ürün bulunmuyor.'
              }
            </p>
            <button
              className="btn btn-outline-burgundy btn-shimmer"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                handleScrollReset();
              }}
            >
              <i className="bi bi-arrow-clockwise me-2"></i>
              Tüm Ürünleri Göster
            </button>
          </div>
        )}
      </div>

      {/* Ürün Sayısı Bilgisi */}
      {filteredProducts.length > 0 && (
        <div className="text-center mt-4">
          <small className="text-muted">
            Toplam {filteredProducts.length} ürün gösteriliyor
          </small>
        </div>
      )}
    </div>
  );
}

export default Products;
