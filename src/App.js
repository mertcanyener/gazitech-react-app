import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import VisionMission from './pages/VisionMission';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vision-mission" element={<VisionMission />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
