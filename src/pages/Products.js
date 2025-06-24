import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function Products() {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [categoryFilter, setCategoryFilter] = useState('');
  
  // Türkçe kategori karşılıkları
  const categoryNames = {
    'iphone15series': 'iPhone 15 Serisi',
    'iphone16series': 'iPhone 16 Serisi',
    'ipad': 'iPad',
    'macbook': 'MacBook',
    'watch': 'Apple Watch',
    'airpods': 'AirPods',
    'accessory': 'Aksesuarlar'
  };
  
  // Kategori sıralaması
  const categoryOrder = [
    'iphone16series',
    'iphone15series',
    'ipad',
    'macbook',
    'watch',
    'airpods',
    'accessory'
  ];
  
  // Filtreleme ve sıralama
  const filteredProducts = products.filter(product => 
    (product.name.toLowerCase().includes(filter.toLowerCase()) ||
    product.description.toLowerCase().includes(filter.toLowerCase())) &&
    (categoryFilter === '' || product.category === categoryFilter)
  );
  
  // Sıralama
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.price - b.price;
    } else if (sortBy === 'price-desc') {
      return b.price - a.price;
    } else if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <div>
      <h1 className="mb-4">Ürünlerimiz</h1>
      
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ürün ara..."
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            value={categoryFilter}
            onChange={handleCategoryChange}
          >
            <option value="">Tüm Kategoriler</option>
            {categoryOrder.map(category => (
              <option key={category} value={category}>
                {categoryNames[category] || category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="default">Sıralama</option>
            <option value="price-asc">Fiyat (Düşükten Yüksek)</option>
            <option value="price-desc">Fiyat (Yüksekten Düşük)</option>
            <option value="name-asc">İsim (A-Z)</option>
            <option value="name-desc">İsim (Z-A)</option>
          </select>
        </div>
      </div>
      
      {/* Kategori başlıkları ile ürünleri göster */}
      {categoryFilter === '' ? (
        categoryOrder.map(category => {
          const categoryProducts = sortedProducts.filter(product => product.category === category);
          if (categoryProducts.length === 0) return null;
          
          return (
            <div key={category} className="mb-5">
              <h2 className="mb-4 category-title">
                {categoryNames[category] || category}
              </h2>
              <div className="row">
                {categoryProducts.map(product => (
                  <div className="col-md-4 mb-4" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="row">
          {sortedProducts.length > 0 ? (
            sortedProducts.map(product => (
              <div className="col-md-4 mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Products;
