import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import'./Home.css';

// Import images for the carousel, hero section, and products
import c1 from './images/c1.jpeg';
import c2 from './images/c2.jpeg';
import c3 from './images/c3.jpeg';
import h1 from './images/h1.jpeg'; // Hero image
import i1 from './images/i1.jpeg'; // Additional image below hero

// Sample product images (replace with actual images)
import p1 from './images/p1.jpeg';
import p2 from './images/p2.jpeg';
import p3 from './images/p3.jpeg';
import p4 from './images/p4.jpeg';
import p5 from './images/p5.jpeg';
import p6 from './images/p6.jpeg';
import p7 from './images/p7.jpeg';
import p8 from './images/p8.jpeg';
import p9 from './images/p9.jpeg';
import p10 from './images/p10.jpeg';
import p11 from './images/p11.jpeg';
import p12 from './images/p12.jpeg';

const Home = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Hero Section with Custom Layout */}
      <section className="hero-section bg-light py-3" style={{ position: 'relative', backgroundColor: '#f8f9fa' }}>
        <div className="container d-flex align-items-center justify-content-between flex-column flex-md-row">
          {/* Left side text content */}
          <div className="text-content mb-4 mb-md-0 text-center text-md-left">
            <h1 className="display-3 fw-bold mb-4" style={{ fontSize: '4rem', color: '#333' }}>
              Transform Your Living Space
            </h1>
            <p className="lead mb-4" style={{ fontSize: '1.5rem', color: '#555' }}>
              Discover a wide range of beautifully designed furniture, crafted to fit your lifestyle.
            </p>
            <a href="#products" className="btn btn-primary btn-lg">
              Shop Now
            </a>
          </div>

          {/* Right side image */}
          <div className="image-container text-center">
            <img
              src={h1}
              alt="Hero"
              className="img-fluid rounded-circle"
              style={{
                width: '350px',
                height: '350px',
                objectFit: 'cover',
                border: '5px solid #fff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        </div>
      </section>

      {/* New Image Section Below Hero */}
      <section className="additional-image-section py-5">
        <div className="container text-center">
          <h2 className="mb-4" style={{ fontSize: '2.5rem', color: '#333' }}>Explore Our Collection</h2>
          <img
            src={i1}
            alt="Additional Image"
            className="img-fluid rounded"
            style={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </div>
      </section>

  {/* Featured Products Section */}

<div className="container my-5">
  <h2 className="text-center mb-4">Featured Products</h2>

  <div className="row justify-content-center">
    {/* Product 1 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p1} 
          className="card-img-top product-image" 
          alt="Product 1" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 1</h5>
          <p className="card-text">$199.99</p>
        </div>
      </div>
    </div>

    {/* Product 2 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p2} 
          className="card-img-top product-image" 
          alt="Product 2" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 2</h5>
          <p className="card-text">$299.99</p>
        </div>
      </div>
    </div>

    {/* Product 3 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p3} 
          className="card-img-top product-image" 
          alt="Product 3" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 3</h5>
          <p className="card-text">$399.99</p>
        </div>
      </div>
    </div>

    {/* Product 4 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p4} 
          className="card-img-top product-image" 
          alt="Product 4" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 4</h5>
          <p className="card-text">$499.99</p>
        </div>
      </div>
    </div>

    {/* Product 5 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p5} 
          className="card-img-top product-image" 
          alt="Product 5" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 5</h5>
          <p className="card-text">$599.99</p>
        </div>
      </div>
    </div>

    {/* Product 6 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p6} 
          className="card-img-top product-image" 
          alt="Product 6" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 6</h5>
          <p className="card-text">$699.99</p>
        </div>
      </div>
    </div>

    {/* Product 7 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p7} 
          className="card-img-top product-image" 
          alt="Product 7" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 7</h5>
          <p className="card-text">$799.99</p>
        </div>
      </div>
    </div>

    {/* Product 8 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p8} 
          className="card-img-top product-image" 
          alt="Product 8" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 8</h5>
          <p className="card-text">$899.99</p>
        </div>
      </div>
    </div>

    {/* Product 9 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p9} 
          className="card-img-top product-image" 
          alt="Product 9" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 9</h5>
          <p className="card-text">$999.99</p>
        </div>
      </div>
    </div>

    {/* Product 10 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p10} 
          className="card-img-top product-image" 
          alt="Product 10" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 10</h5>
          <p className="card-text">$1099.99</p>
        </div>
      </div>
    </div>

    {/* Product 11 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p11} 
          className="card-img-top product-image" 
          alt="Product 11" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 11</h5>
          <p className="card-text">$1199.99</p>
        </div>
      </div>
    </div>

    {/* Product 12 */}
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card product-card w-100">
        <img 
          src={p12} 
          className="card-img-top product-image" 
          alt="Product 12" 
        />
        <div className="card-body text-center">
          <h5 className="card-title">Product 12</h5>
          <p className="card-text">$1299.99</p>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Footer Section */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>About Us</h5>
              <p>We offer a wide range of stylish and high-quality furniture to transform your living spaces.</p>
            </div>
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#products" className="text-white">Shop</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
                <li><a href="#" className="text-white">FAQs</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <p>Email: info@furniturestore.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="col-md-3">
              <h5>Follow Us</h5>
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i> Facebook</a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i> Twitter</a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i> Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

