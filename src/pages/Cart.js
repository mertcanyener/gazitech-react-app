import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="empty-cart-container">
          <i className="bi bi-cart-x empty-cart-icon"></i>
          <h2>Sepetiniz Boş</h2>
          <p>Sepetinizde henüz ürün bulunmamaktadır.</p>
          <Link to="/products" className="btn btn-primary mt-3">
            Alışverişe Başla
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="mb-4">Alışveriş Sepeti</h1>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4 cart-items-container">
            <div className="card-body">
              <table className="table cart-table">
                <thead>
                  <tr>
                    <th>Ürün</th>
                    <th>Fiyat</th>
                    <th>Adet</th>
                    <th>Toplam</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="cart-item">
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={item.image || 'https://via.placeholder.com/50x50'} 
                            alt={item.name} 
                            className="cart-item-image me-3"
                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                          />
                          <div>
                            <h6 className="mb-0">{item.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>{item.price.toLocaleString('tr-TR')} ₺</td>
                      <td>
                        <div className="quantity-control">
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{(item.price * item.quantity).toLocaleString('tr-TR')} ₺</td>
                      <td>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="d-flex justify-content-between mt-3">
                <button 
                  className="btn btn-outline-secondary"
                  onClick={clearCart}
                >
                  Sepeti Temizle
                </button>
                <Link to="/products" className="btn btn-outline-primary">
                  Alışverişe Devam Et
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card cart-summary">
            <div className="card-body">
              <h5 className="card-title mb-4">Sipariş Özeti</h5>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Ara Toplam:</span>
                <span>{cartTotal.toLocaleString('tr-TR')} ₺</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Kargo:</span>
                <span>Ücretsiz</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4">
                <strong>Toplam:</strong>
                <strong>{cartTotal.toLocaleString('tr-TR')} ₺</strong>
              </div>
              
              <button className="btn btn-success w-100">
                Siparişi Tamamla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
