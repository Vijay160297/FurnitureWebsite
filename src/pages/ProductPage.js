

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Product images (replace these paths with actual ones)
import productImage1 from './images/product1.jpeg'; 
import productImage2 from './images/product2.jpeg'; 
import productImage3 from './images/product3.jpeg'; 
import productImage4 from './images/product4.jpeg'; 
import productImage5 from './images/product5.jpeg'; 
import productImage6 from './images/product6.jpeg'; 
import productImage7 from './images/product7.jpeg'; 
import productImage8 from './images/product8.jpeg'; 
import productImage9 from './images/product9.jpeg'; 
import productImage10 from './images/product10.jpeg'; 
import productImage11 from './images/product11.jpeg'; 
import productImage12 from './images/product12.jpeg'; 
import productImage13 from './images/product13.jpeg'; 
import productImage14 from './images/product14.jpeg'; 
import productImage15 from './images/product15.jpeg'; 
import productImage16 from './images/product16.jpeg'; 

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Modern Sofa', price: 699.99, image: productImage1, description: 'Comfortable and stylish modern sofa.' },
    { id: 2, name: 'Wooden Dining Table', price: 499.99, image: productImage2, description: 'Beautiful wooden dining table for your home.' },
    { id: 3, name: 'Leather Recliner Chair', price: 399.99, image: productImage3, description: 'Luxurious leather recliner chair for relaxation.' },
    { id: 4, name: 'Stylish Coffee Table', price: 299.99, image: productImage4, description: 'Stylish and modern coffee table for your living room.' },
    { id: 5, name: 'Minimalist Bookshelf', price: 149.99, image: productImage5, description: 'A simple and minimalist bookshelf for your home office.' },
    { id: 6, name: 'Elegant Bed Frame', price: 799.99, image: productImage6, description: 'Elegant bed frame made from high-quality wood.' },
    { id: 7, name: 'Comfy Armchair', price: 249.99, image: productImage7, description: 'Comfy armchair perfect for any living room or office.' },
    { id: 8, name: 'Dining Chair Set', price: 349.99, image: productImage8, description: 'A set of 4 modern dining chairs.' },
    { id: 9, name: 'Accent Chair', price: 179.99, image: productImage9, description: 'Modern accent chair for your living room or office.' },
    { id: 10, name: 'Wooden Cabinet', price: 459.99, image: productImage10, description: 'Wooden cabinet with plenty of storage space.' },
    { id: 11, name: 'Luxury Reclining Sofa', price: 1099.99, image: productImage11, description: 'Luxury reclining sofa with multiple positions.' },
    { id: 12, name: 'Glass Coffee Table', price: 229.99, image: productImage12, description: 'Sleek and stylish glass coffee table for your living room.' },
    { id: 13, name: 'Modern Office Chair', price: 149.99, image: productImage13, description: 'Comfortable office chair with ergonomic design.' },
    { id: 14, name: 'Contemporary Lamp', price: 89.99, image: productImage14, description: 'Sleek and stylish contemporary desk lamp.' },
    { id: 15, name: 'Minimalist Wall Art', price: 69.99, image: productImage15, description: 'A beautiful piece of minimalist wall art.' },
    { id: 16, name: 'Outdoor Lounge Chair', price: 299.99, image: productImage16, description: 'Comfortable and stylish outdoor lounge chair.' }
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map(item =>
          item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Furniture Store</h2>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4 d-flex justify-content-center">
            <div className="card shadow-sm" style={{ width: '18rem' }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '0.25rem',
                  borderTopRightRadius: '0.25rem',
                  cursor: 'pointer',
                }}
                onClick={() => addToCart(product)}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="my-5">
        <h3 className="text-center">Cart Summary</h3>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="text-center">
            <ul className="list-group">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '0.25rem',
                        marginRight: '15px',
                      }}
                    />
                    <div className="text-start">
                      <div className="fw-bold">{item.name}</div>
                      <div>${item.price.toFixed(2)} × {item.quantity}</div>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button className="btn btn-sm btn-secondary" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <button className="btn btn-sm btn-secondary mx-1" onClick={() => increaseQuantity(item.id)}>+</button>
                    <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <h4 className="mt-3">Total: ${totalCartPrice.toFixed(2)}</h4>
            <button className="btn btn-success mt-3" disabled={cart.length === 0}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;


